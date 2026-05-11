import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import SnapshotEmbed from '@/components/SnapshotEmbed'
import { ArrowLeft, Clock, Mail, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: '5-Layer AI Readiness Snapshot — Banyan Global Learning',
  description:
    'A 10-minute self-assessment built on Banyan\'s 5-Layer AI Governance Framework. Auto-delivers a personalized 2-page maturity report with your three immediate priorities.',
  alternates: { canonical: 'https://banyangloballearning.com/programs/ai-pd/snapshot' },
  openGraph: {
    title: '5-Layer AI Readiness Snapshot — Banyan Global Learning',
    description:
      'A 10-minute self-assessment for K–12 district leadership teams. Maturity rating across five governance layers plus three immediate priorities. Free.',
    url: 'https://banyangloballearning.com/programs/ai-pd/snapshot',
    type: 'website',
  },
}

const WHAT_YOU_GET = [
  'Maturity rating across all five layers, scored on a 4-point scale.',
  'Plain-language interpretation of where you are on each layer.',
  'Three immediate priorities tailored to your lowest-scoring areas — quick wins your team can act on this month, with no consultant required.',
]

export default function SnapshotPage() {
  return (
    <>
      <SiteHeader />

      <main className="bg-neutral-950 min-h-screen">

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden border-b border-neutral-800"
          style={{ background: 'linear-gradient(160deg, #070b12 0%, #0d1b2e 60%, #051e38 100%)' }}
        >
          <div className="container-site relative z-10 py-16 lg:py-20">
            <Link
              href="/programs/ai-pd"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to AI Governance
            </Link>

            <div className="max-w-3xl">
              <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
                Free · 10 minutes
              </span>
              <h1 className="display-lg text-white text-balance mb-5 leading-[1.1]">
                5-Layer AI Readiness Snapshot
              </h1>
              <p className="body-lg text-neutral-300 mb-2 max-w-2xl">
                A 10-minute self-assessment built directly on the 5-Layer Framework.
                Your leadership team answers 25 statements across the five governance
                layers, plus four context questions. We auto-deliver a 2-page
                personalized report with your maturity rating per layer and three
                immediate priorities &mdash; the same instrument we use to anchor every
                paid engagement.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET + WHO + TRUST ───────────────────────────────── */}
        <section className="border-b border-neutral-800 bg-neutral-900">
          <div className="container-site py-12">
            <div className="grid lg:grid-cols-3 gap-8">

              <div>
                <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  What you get
                </div>
                <ul className="space-y-3">
                  {WHAT_YOU_GET.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={16} />
                      <span className="text-neutral-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Who should take it
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Designed for superintendents, CTOs, CAOs, directors of innovation,
                  and any leadership-team member building the district&apos;s AI
                  posture. Best taken in conversation with 2&ndash;3 of your leaders.
                </p>
              </div>

              <div>
                <div className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  How it works
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Clock className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-300 text-sm leading-relaxed">
                      ~10 minutes to complete with your leadership team
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-300 text-sm leading-relaxed">
                      Personalized PDF report lands in your inbox in under 2 minutes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-400 shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-300 text-sm leading-relaxed">
                      No card. No consultant call. No follow-up sales pitch.
                    </span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* ── TALLY EMBED ──────────────────────────────────────────────── */}
        <section className="bg-white">
          <div className="container-site py-12 lg:py-16">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-4 sm:p-6 lg:p-8">
                <SnapshotEmbed />
              </div>
              <p className="text-neutral-500 text-xs text-center mt-6">
                Want to talk through your results? After you complete the Snapshot,
                a free 30-minute discovery call becomes available on the AI Governance page.
              </p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
