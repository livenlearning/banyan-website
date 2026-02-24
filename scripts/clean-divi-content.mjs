/**
 * Banyan Global Learning — Divi shortcode cleaner
 *
 * The WordPress content uses Divi builder shortcodes ([et_pb_text], etc.)
 * This script patches all existing Sanity posts with cleaned HTML content.
 *
 * Usage:
 *   SANITY_WRITE_TOKEN=your_token node scripts/clean-divi-content.mjs
 */

import { readFileSync } from 'fs'
import { XMLParser } from 'fast-xml-parser'
import { createClient } from '@sanity/client'

const PROJECT_ID = 'po12mj9t'
const DATASET = 'production'
const TOKEN = process.env.SANITY_WRITE_TOKEN

if (!TOKEN) {
  console.error('❌ Missing SANITY_WRITE_TOKEN')
  process.exit(1)
}

const sanity = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
})

// ── Divi content cleaner ─────────────────────────────────────────────────────

function cleanDiviContent(raw) {
  if (!raw) return ''

  let html = raw

  // 1. Convert [et_pb_image src="..." alt="..."] to <img> tags
  html = html.replace(
    /\[et_pb_image([^\]]*)\]\[\/et_pb_image\]/g,
    (match, attrs) => {
      const srcMatch = attrs.match(/src="([^"]+)"/)
      const altMatch = attrs.match(/alt="([^"]*)"/)
      const titleMatch = attrs.match(/title_text="([^"]*)"/)
      if (!srcMatch) return ''
      const src = srcMatch[1]
      const alt = altMatch?.[1] || titleMatch?.[1] || ''
      return `<img src="${src}" alt="${alt}" style="max-width:100%;height:auto;border-radius:8px;margin:1.5rem 0;" />`
    }
  )

  // 2. Convert [et_pb_button button_url="..." button_text="..."] to <a> tags
  html = html.replace(
    /\[et_pb_button([^\]]*)\](\[\/et_pb_button\])?/g,
    (match, attrs) => {
      const urlMatch = attrs.match(/button_url="([^"]+)"/)
      const textMatch = attrs.match(/button_text="([^"]+)"/)
      if (!urlMatch || !textMatch) return ''
      return `<a href="${urlMatch[1]}">${textMatch[1]}</a>`
    }
  )

  // 3. Strip all remaining Divi opening shortcodes (keep inner content)
  html = html.replace(/\[et_pb_[^\]]*\]/g, '')

  // 4. Strip all Divi closing shortcodes
  html = html.replace(/\[\/et_pb_[^\]]*\]/g, '')

  // 5. Strip any other WordPress shortcodes [like_this] or [/like_this]
  html = html.replace(/\[\/?\w[^\]]*\]/g, '')

  // 6. Clean up excessive whitespace and blank lines
  html = html
    .replace(/\n{3,}/g, '\n\n')   // collapse 3+ newlines to 2
    .replace(/^\s+|\s+$/g, '')      // trim

  // 7. Wrap bare paragraphs (lines of text not already in HTML tags)
  //    Split on double newlines, wrap non-tag blocks in <p>
  const blocks = html.split(/\n\n+/)
  html = blocks
    .map((block) => {
      block = block.trim()
      if (!block) return ''
      // If already starts with an HTML tag, leave it alone
      if (/^<(h[1-6]|ul|ol|li|blockquote|img|figure|div|p)/i.test(block)) return block
      // Otherwise wrap in <p>
      return `<p>${block.replace(/\n/g, '<br />')}</p>`
    })
    .filter(Boolean)
    .join('\n')

  return html
}

// ── Parse WordPress XML to get original content ──────────────────────────────

const xmlPath = process.env.WP_XML_PATH ?? './scripts/wordpress-export.xml'
const xmlContent = readFileSync(xmlPath, 'utf-8')

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

  const slug = item['wp:post_name']?.['__cdata'] ?? item['wp:post_name'] ?? ''
  const content = item['content:encoded']?.['__cdata'] ?? ''
  if (!slug) continue

  posts.push({ slug, content })
}

console.log(`📄 Processing ${posts.length} posts...\n`)

// ── Patch Sanity documents with cleaned content ───────────────────────────────

let patched = 0
let notFound = 0
let failed = 0

for (const post of posts) {
  try {
    const existingId = await sanity.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: post.slug }
    )

    if (!existingId) {
      console.log(`  ⚠️  Not found in Sanity: ${post.slug}`)
      notFound++
      continue
    }

    const cleaned = cleanDiviContent(post.content)

    await sanity.patch(existingId).set({ legacyContent: cleaned }).commit()

    console.log(`  ✅ Patched: ${post.slug}`)
    patched++

    await new Promise((r) => setTimeout(r, 80))
  } catch (err) {
    console.error(`  ❌ Failed: ${post.slug} — ${err.message}`)
    failed++
  }
}

console.log(`\n📊 Done:`)
console.log(`   Patched:   ${patched}`)
console.log(`   Not found: ${notFound}`)
console.log(`   Failed:    ${failed}`)
