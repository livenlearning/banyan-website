import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { getPostBySlug } from '@/sanity/queries'
import { POST_CATEGORIES, type PostCategory } from '@/lib/postCategories'
import { ArrowLeft, Calendar } from 'lucide-react'

// Static generation — build a page for every categorized post at deploy time
export async function generateStaticParams() {
  return Object.entries(POST_CATEGORIES).map(([slug, category]) => ({
    category,
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}): Promise<Metadata> {
  const { category, slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Post not found' }

  const title = `${post.title} — Banyan Global Learning`
  const description = post.excerpt ?? 'Insights for educators from Banyan Global Learning.'
  const url = `https://banyangloballearning.com/blog/${category}/${slug}`

  // To add a social share image: place a 1200×630 JPG at /public/og-blog-default.jpg
  // Then uncomment: images: [{ url: '/og-blog-default.jpg', width: 1200, height: 630 }]

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Banyan Global Learning'],
      tags: post.categories ?? [],
      // images: [{ url: '/og-blog-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      // images: ['/og-blog-default.jpg'],
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const CATEGORY_LABELS: Record<string, string> = {
  'ai-in-education': 'AI in Education',
  'global-learning': 'Global Learning',
  'digital-citizenship': 'Digital Citizenship',
  'virtual-field-trips': 'Virtual Field Trips',
  'sel': 'SEL',
  'teacher-pd': 'Teacher PD',
  'online-learning': 'Online Learning',
  'news': 'News',
}

const SECTION_LABELS: Record<PostCategory, string> = {
  'ai': 'AI in Education',
  'virtual-learning': 'Virtual Learning',
}

// Portable Text component overrides
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-5 text-neutral-700 leading-relaxed">{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="font-display font-semibold text-neutral-900 text-2xl mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="font-display font-semibold text-neutral-900 text-xl mt-8 mb-3">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#0e4a83] pl-5 my-6 italic text-neutral-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-[#0e4a83] underline underline-offset-2 hover:text-[#1ca59d] transition-colors"
      >
        {children}
      </a>
    ),
  },
}

export default async function CategorizedBlogPostPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>
}) {
  const { category, slug } = await params

  // Guard: category param must be a valid PostCategory
  const validCategory = POST_CATEGORIES[slug]
  if (!validCategory || validCategory !== category) notFound()

  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const sectionLabel = SECTION_LABELS[category as PostCategory] ?? category

  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Article header ───────────────────────────────────────── */}
        <section className="bg-white border-b border-neutral-100 pt-16 pb-10">
          <div className="container-site max-w-3xl mx-auto">
            <Link
              href={`/blog`}
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#0e4a83] text-sm mb-2 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </Link>

            {/* Breadcrumb hint */}
            <p className="text-xs text-neutral-400 mb-6">{sectionLabel}</p>

            {post.categories?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat) => (
                  <span key={cat} className="badge badge-blue text-xs">
                    {CATEGORY_LABELS[cat] ?? cat}
                  </span>
                ))}
              </div>
            )}

            <h1 className="display-lg text-neutral-900 mb-5 leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-neutral-500 leading-relaxed mb-6">
                {post.excerpt}
              </p>
            )}

            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <Calendar className="w-4 h-4" />
              <span>Banyan Global Learning · {formatDate(post.publishedAt)}</span>
            </div>
          </div>
        </section>

        {/* ── Article body ─────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-3xl mx-auto">
            <article className="prose-article">

              {/* New posts: Portable Text */}
              {post.body && post.body.length > 0 && (
                <PortableText value={post.body as Parameters<typeof PortableText>[0]['value']} components={ptComponents} />
              )}

              {/* Migrated posts: WordPress HTML */}
              {(!post.body || post.body.length === 0) && post.legacyContent && (
                <div
                  className="wp-content"
                  dangerouslySetInnerHTML={{ __html: post.legacyContent }}
                />
              )}

            </article>
          </div>
        </section>

        {/* ── Related CTA ──────────────────────────────────────────── */}
        <section className="bg-neutral-50 border-t border-neutral-100 py-16">
          <div className="container-site max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display font-semibold text-neutral-900 text-lg mb-1">
                Ready to bring these ideas to your classroom?
              </div>
              <p className="text-neutral-500 text-sm">
                Explore Banyan&apos;s programs for K–12 schools and districts.
              </p>
            </div>
            <Link href="/programs" className="btn btn-primary btn-md flex-shrink-0">
              Explore programs
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
