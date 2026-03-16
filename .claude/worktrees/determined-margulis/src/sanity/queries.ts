import { client } from './client'

export type Post = {
  _id: string
  title: string
  slug: string
  publishedAt: string
  excerpt: string
  categories: string[]
  body: unknown[] | null        // Portable Text for new posts
  legacyContent: string | null  // HTML from WordPress migration
}

export type PostSummary = Omit<Post, 'body' | 'legacyContent'>

// All posts for the index page (newest first)
export async function getAllPosts(): Promise<PostSummary[]> {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      categories
    }`
  )
}

// Single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const results = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      categories,
      body,
      legacyContent
    }`,
    { slug }
  )
  return results ?? null
}

// All slugs for static generation
export async function getAllPostSlugs(): Promise<string[]> {
  const results = await client.fetch(
    `*[_type == "post"] { "slug": slug.current }`
  )
  return results.map((r: { slug: string }) => r.slug)
}
