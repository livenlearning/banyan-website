/**
 * Banyan Global Learning — WordPress → Sanity migration script
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=your_token node scripts/migrate-from-wordpress.mjs
 *
 * Get a write token at: https://www.sanity.io/manage/project/po12mj9t/api
 *   → API → Tokens → Add API token → Editor permissions
 */

import { readFileSync } from 'fs'
import { XMLParser } from 'fast-xml-parser'
import { createClient } from '@sanity/client'

const PROJECT_ID = 'po12mj9t'
const DATASET = 'production'
const TOKEN = process.env.SANITY_WRITE_TOKEN

if (!TOKEN) {
  console.error('❌ Missing SANITY_WRITE_TOKEN. Run: SANITY_WRITE_TOKEN=your_token node scripts/migrate-from-wordpress.mjs')
  process.exit(1)
}

const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
})

// ── Parse WordPress XML ──────────────────────────────────────────────────────

const xmlPath = process.env.WP_XML_PATH ?? './scripts/wordpress-export.xml'
let xmlContent
try {
  xmlContent = readFileSync(xmlPath, 'utf-8')
} catch {
  console.error(`❌ Could not find XML file at: ${xmlPath}`)
  console.error('   Copy your WordPress export XML to scripts/wordpress-export.xml')
  console.error('   Or set WP_XML_PATH=/path/to/your-export.xml')
  process.exit(1)
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  cdataPropName: '__cdata',
})

const parsed = parser.parse(xmlContent)
const items = parsed.rss.channel.item

const posts = []
for (const item of (Array.isArray(items) ? items : [items])) {
  const postType = item['wp:post_type']?.['__cdata'] ?? item['wp:post_type']
  const status = item['wp:status']?.['__cdata'] ?? item['wp:status']

  if (postType !== 'post' || status !== 'publish') continue

  const title = item.title?.['__cdata'] ?? item.title ?? ''
  const slug = item['wp:post_name']?.['__cdata'] ?? item['wp:post_name'] ?? ''
  const dateRaw = item['wp:post_date']?.['__cdata'] ?? item['wp:post_date'] ?? ''
  const content = item['content:encoded']?.['__cdata'] ?? ''
  const excerpt = item['excerpt:encoded']?.['__cdata'] ?? ''

  if (!slug || !title) continue

  posts.push({ title, slug, dateRaw, content, excerpt })
}

console.log(`✅ Parsed ${posts.length} published posts from WordPress export`)

// ── Upload to Sanity ─────────────────────────────────────────────────────────

let created = 0
let skipped = 0
let failed = 0

for (const post of posts) {
  try {
    // Check if post already exists
    const existing = await sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: post.slug }
    )

    if (existing) {
      console.log(`  ⏭ Skipping (already exists): ${post.slug}`)
      skipped++
      continue
    }

    const publishedAt = post.dateRaw
      ? new Date(post.dateRaw).toISOString()
      : new Date().toISOString()

    await sanity.create({
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      publishedAt,
      excerpt: post.excerpt || undefined,
      legacyContent: post.content || undefined,
    })

    console.log(`  ✅ Created: ${post.slug}`)
    created++

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 100))
  } catch (err) {
    console.error(`  ❌ Failed: ${post.slug} — ${err.message}`)
    failed++
  }
}

console.log(`\n📊 Migration complete:`)
console.log(`   Created:  ${created}`)
console.log(`   Skipped:  ${skipped} (already existed)`)
console.log(`   Failed:   ${failed}`)
console.log(`\nOpen Sanity Studio to review: http://localhost:3000/studio`)
