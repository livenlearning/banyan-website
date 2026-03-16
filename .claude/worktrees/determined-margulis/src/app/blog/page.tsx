import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { getAllPosts } from '@/sanity/queries'
import BlogGrid from './BlogGrid'

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

        {/* ── Filtered post grid ─────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <BlogGrid posts={posts} />
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
