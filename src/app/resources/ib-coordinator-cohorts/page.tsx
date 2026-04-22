import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { Download, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IB Coordinator Cohorts Overview — Banyan Global Learning',
  description:
    'Overview document for IB coordinators exploring Global Learning Live cohorts.',
}

const PDF_PATH = '/documents/IB_Coordinator_Cohorts_Overview.pdf'

export default function IBCoordinatorCohortsPage() {
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
                IB Coordinator Cohorts Overview
              </h1>
            </div>
            <a
              href={PDF_PATH}
              download
              className="btn btn-teal btn-md"
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </section>

        {/* ── PDF viewer ───────────────────────────────────────────────── */}
        <section className="container-site py-8">
          <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
            <iframe
              src={PDF_PATH}
              title="IB Coordinator Cohorts Overview"
              className="w-full"
              style={{ height: 'calc(100vh - 240px)', minHeight: '700px' }}
            />
          </div>
          <p className="text-neutral-500 text-xs text-center mt-4">
            Having trouble viewing the PDF?{' '}
            <a href={PDF_PATH} className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer">
              Open it in a new tab
            </a>
            .
          </p>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
