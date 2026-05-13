import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { ArrowLeft, Maximize2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IB MYP Coordinator Deck — Banyan Global Learning',
  description:
    'Overview deck for IB MYP coordinators exploring Global Learning Live cohorts.',
}

const SLIDES_EMBED =
  'https://docs.google.com/presentation/d/e/2PACX-1vQEMTTJdhbJuJ-lhlkuTZ9HAC_AbvNatv-cjZtdoc1TMr2mBPFBBBZmnWa5SLgGyQ/pubembed?start=false&loop=false&delayms=3000'

// Open the presentation in its own tab (no iframe chrome around it)
const SLIDES_FULLSCREEN_URL = SLIDES_EMBED

export default function IBMYPCoordinatorDeckPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-neutral-50 min-h-screen">
        {/* ── Header bar ───────────────────────────────────────────────── */}
        <section className="bg-white border-b border-neutral-200">
          <div className="container-site py-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <Link
                href="/programs/global-learning-live/ib"
                className="inline-flex items-center gap-2 text-neutral-500 hover:text-teal-600 text-sm mb-2 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to IB overview
              </Link>
              <h1 className="font-display font-semibold text-neutral-900 text-xl">
                IB MYP Coordinator Deck
              </h1>
              <p className="text-neutral-500 text-sm mt-1">
                Use the arrows in the slide viewer to navigate &mdash; or press
                <kbd className="mx-1 px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-xs font-medium">F</kbd>
                for fullscreen.
              </p>
            </div>
            <a
              href={SLIDES_FULLSCREEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-teal btn-md"
            >
              <Maximize2 size={16} />
              Open in new tab
            </a>
          </div>
        </section>

        {/* ── Slide viewer ─────────────────────────────────────────────── */}
        <section className="container-site py-8">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
            {/* Maintain the deck's native aspect ratio (1920:1109 ≈ 16:9.2) */}
            <div className="relative w-full" style={{ paddingBottom: '57.76%' }}>
              <iframe
                src={SLIDES_EMBED}
                title="IB MYP Coordinator Deck"
                className="absolute inset-0 w-full h-full"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
