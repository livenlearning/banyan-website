import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingUp,
  Users,
  ClipboardCheck,
  Presentation,
  MessageSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kennewick School District × Banyan AI PD — Case Study',
  description:
    'How Kennewick School District implemented district-wide AI professional development that achieved 100% teacher satisfaction and immediate classroom application.',
}

const stats = [
  { value: '100%', label: 'Agreed PD was a valuable use of time' },
  { value: '100%', label: 'Gained strategies they could apply immediately' },
  { value: '100%', label: 'More likely to use AI tools in the coming school year' },
]

const steps = [
  {
    num: '01',
    icon: ClipboardCheck,
    title: 'Pre-Session Survey',
    description:
      'Gathered teacher input on current AI use, comfort levels, and specific concerns to shape the training before a single slide was written.',
  },
  {
    num: '02',
    icon: Presentation,
    title: 'Customized Content',
    description:
      'Designed curriculum around district needs and teacher input — not a generic template. Focus areas included time-saving workflows for lesson planning, grading, and differentiation; policy-aligned student-use strategies (AI-Free, AI-Assisted, AI-Partnered tasks); and classroom pedagogy redesign.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Engaging Presentation',
    description:
      'Used real-world, accessible examples — from pop culture references to concrete classroom scenarios — to ensure relevance across all teacher comfort levels, from AI skeptics to early adopters.',
  },
  {
    num: '04',
    icon: MessageSquare,
    title: 'Follow-Up Office Hours',
    description:
      'Provided ongoing opportunities for teachers to request additional workflows, share classroom insights, and ask questions as they integrated district AI policy into their daily and weekly routines.',
  },
]

const differentiators = [
  'Tailor every session to the district\'s policies, approved apps, and teacher context',
  'Provide practical workflows and artifacts teachers can use immediately',
  'Address both teacher needs and student-use norms in the same training',
  'Deliver across varied school models, proving flexibility and relevance',
]

export default function KennewickCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #070b12 0%, #0e2a50 50%, #0e4a83 100%)' }}>
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="container-site relative py-24 lg:py-32">

            {/* Breadcrumb */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All case studies
            </Link>

            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="badge badge-blue">AI Professional Development</span>
                <span className="badge badge-neutral text-white border-white/20" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  Public School District · Kennewick, WA
                </span>
              </div>
              <h1 className="display-xl text-white mb-6 leading-tight">
                District-wide AI PD that{' '}
                <span className="text-gradient-gold">converted skeptics to practitioners.</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Kennewick School District needed AI professional development that could meet teachers where they were —
                from total skeptics to enthusiastic early adopters — across four distinct school models.
                Banyan delivered a customized half-day session that left zero teachers behind.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats band ───────────────────────────────────────────────── */}
        <section className="bg-[#0e4a83] py-10">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-blue-700">
              {stats.map((s) => (
                <div key={s.label} className="py-6 md:py-0 px-8 text-center">
                  <div className="text-5xl font-bold font-display text-white mb-2">{s.value}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Context & Challenge ──────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="section-label mb-3 block">Context &amp; Challenge</span>
                <h2 className="display-md text-neutral-900 mb-6">
                  A district that couldn&apos;t afford a one-size-fits-all answer.
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Kennewick School District serves a diverse student population across four distinct
                  school models: traditional schools, project-based learning environments, virtual
                  learning, and a juvenile justice program. As AI tools rapidly entered classrooms,
                  district leaders recognized the urgent need to equip staff with responsible,
                  practical, and policy-aligned training.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  KSD sought a PD partner who could move beyond generic introductions to AI, and
                  instead deliver tailored, ready-to-use strategies aligned to their specific
                  context and emerging district policies.
                </p>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">Key challenges</div>
                {[
                  'Wide variance in teacher comfort — from AI skeptics to enthusiastic early adopters',
                  'Rising concerns around student misuse and academic integrity',
                  'A lack of district-specific guidance and workflows teachers could immediately apply',
                ].map((c) => (
                  <div key={c} className="flex gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0e4a83] flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700 text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
                <div className="mt-6 p-5 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-[#0e4a83] text-sm font-medium">
                    National data: only ~40% of schools have AI policies, and 51% of teachers cite
                    lack of training as the #1 barrier to responsible AI adoption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Approach ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-y border-neutral-100">
          <div className="container-site">
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">Our Approach</span>
              <h2 className="display-md text-neutral-900 mb-4">Built around the district. Not the other way around.</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Banyan designed a custom half-day professional development session — condensed from
                our 5-part AI PD series — structured around three goals: save teachers time,
                guide responsible student use, and align practices with policy.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step) => {
                const Icon = step.icon
                return (
                  <div key={step.num} className="card p-8">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0e4a83]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#0e4a83]" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#0e4a83]/50 uppercase tracking-widest mb-1">Step {step.num}</div>
                        <h3 className="font-display font-semibold text-neutral-900 text-lg mb-2">{step.title}</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Results ──────────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label mb-3 block">Results</span>
                <h2 className="display-md text-neutral-900 mb-6">
                  Every teacher left with something they could use the next day.
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Post-session feedback revealed unanimous satisfaction — across all teacher comfort
                  levels. Teachers who entered as skeptics left with concrete AI workflows. Experienced
                  adopters left with new policy-aligned structures. And the data bears that out.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Teachers also requested more subject-specific examples and student-facing tools
                  for future sessions — feedback that has directly shaped Banyan&apos;s ongoing AI PD
                  curriculum design.
                </p>
              </div>

              <div className="space-y-5">
                {/* Stat cards */}
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-5 p-5 rounded-xl bg-[#0e4a83] text-white">
                    <div className="text-4xl font-bold font-display text-white flex-shrink-0 w-24 text-center">{s.value}</div>
                    <div className="text-blue-100 text-sm leading-snug">{s.label}</div>
                  </div>
                ))}

                {/* Teacher quotes */}
                <div className="mt-6 space-y-4">
                  <blockquote className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 border-l-4 border-l-[#0e4a83]">
                    <p className="text-neutral-700 italic text-sm leading-relaxed">
                      &ldquo;These specific workflows have been helpful and I will implement them in my own AI work.&rdquo;
                    </p>
                    <cite className="not-italic text-xs text-neutral-400 mt-2 block">— Experienced AI user</cite>
                  </blockquote>
                  <blockquote className="p-5 rounded-xl bg-neutral-50 border border-neutral-100 border-l-4 border-l-[#e5a025]">
                    <p className="text-neutral-700 italic text-sm leading-relaxed">
                      &ldquo;Yeah, I am more open to using AI for some tasks.&rdquo;
                    </p>
                    <cite className="not-italic text-xs text-neutral-400 mt-2 block">— Former AI skeptic</cite>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why it matters ───────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-y border-neutral-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <span className="section-label mb-3 block text-center">Why It Matters</span>
              <h2 className="display-md text-neutral-900 mb-6 text-center">
                This is what makes Banyan AI PD different.
              </h2>
              <p className="text-neutral-600 text-center mb-10 leading-relaxed">
                Anyone can deliver generic AI awareness training. KSD&apos;s success comes from a
                fundamentally different approach — one that starts with the district&apos;s reality, not a slide deck.
              </p>
              <div className="space-y-4">
                {differentiators.map((d) => (
                  <div key={d} className="flex gap-4 items-start p-5 bg-white rounded-xl border border-neutral-100">
                    <CheckCircle2 className="w-5 h-5 text-[#1ca59d] flex-shrink-0 mt-0.5" />
                    <p className="text-neutral-700">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section style={{ background: 'linear-gradient(135deg, #070b12 0%, #0e2a50 50%, #0e4a83 100%)' }} className="py-20">
          <div className="container-site text-center">
            <h2 className="display-lg text-white mb-4">
              Ready to implement your district&apos;s AI strategy?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Banyan offers half-day workshops, four-part series, blended models, and ongoing
              coaching. Every engagement starts with your district&apos;s specific context.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/ai-pd" className="btn btn-gold btn-lg inline-flex items-center gap-2">
                Explore AI PD programs
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn btn-white btn-lg">
                Request a proposal
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
