import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { getAllPosts } from '@/sanity/queries'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog — Banyan Global Learning',
  description:
    'Insights on AI in education, global learning, digital citizenship, virtual field trips, and the future of K–12 teaching.',
  alternates: {
    canonical: 'https://banyangloballearning.com/blog',
  },
  openGraph: {
    title: 'Blog — Banyan Global Learning',
    description:
      'Insights on AI in education, global learning, digital citizenship, virtual field trips, and the future of K–12 teaching.',
    url: 'https://banyangloballearning.com/blog',
    type: 'website',
    // images: [{ url: '/og-blog-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — Banyan Global Learning',
    description:
      'Insights on AI in education, global learning, digital citizenship, virtual field trips, and the future of K–12 teaching.',
    // images: ['/og-blog-default.jpg'],
  },
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

export default async function BlogIndexPage() {
  const posts = await getAllPosts()

  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="hero-main py-20 lg:py-28">
          <div className="container-site text-center">
            <span className="section-label text-blue-200 mb-4 block">Blog</span>
            <h1 className="display-xl text-white mb-4">
              Ideas for educators.{' '}
              <span className="text-gradient-gold">From educators.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Insights on AI in education, global learning, digital citizenship,
              and the future of the K–12 classroom.
            </p>
          </div>
        </section>

        {/* ── Post grid ──────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            {posts.length === 0 ? (
              <div className="text-center py-24 text-neutral-400">
                Posts are loading — check back soon.
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <article key={post._id} className="card flex flex-col">
                    {/* Category badge */}
                    <div className="p-6 pb-0">
                      {post.categories?.length > 0 && (
                        <span className="badge badge-blue mb-3 inline-block text-xs">
                          {CATEGORY_LABELS[post.categories[0]] ?? post.categories[0]}
                        </span>
                      )}
                      <h2 className="font-display font-semibold text-neutral-900 text-lg leading-snug mb-3 hover:text-[#0e4a83] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      {post.excerpt && (
                        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}
                    </div>

                    <div className="p-6 pt-4 mt-auto flex items-center justify-between border-t border-neutral-100 mt-4">
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#0e4a83] text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-neutral-100 py-16">
          <div className="container-site text-center">
            <h2 className="display-md text-neutral-900 mb-4">
              Want to see these ideas in action?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
              Explore Banyan&apos;s programs — from AI PD for districts to live global connections for classrooms.
            </p>
            <Link href="/programs" className="btn btn-primary btn-lg">
              Explore our programs
            </Link>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
