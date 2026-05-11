import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import DiscoveryCallCTA from '@/components/DiscoveryCallCTA'
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  BookOpen,
  Settings,
  Server,
  AlertTriangle,
  TrendingUp,
  Users,
  Clock,
  FileCheck,
  ChevronRight,
  Award,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// AI Governance & Professional Development — Product Page
// Place at: src/app/programs/ai-pd/page.tsx
// Target buyer: Superintendent, CTO, Curriculum Director
// Engagement range: $15K–$50K+
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'AI Governance for K–12 Districts — Banyan Global Learning',
  description:
    'A 5-tier AI governance service line for K–12 districts: free Readiness Snapshot, $3,500 Readiness Scan, $15–25K Audit, $25–50K Blueprint, and ongoing Strategic Advisory Retainer. Anchored on the 5-Layer Framework with the Cognitive Core at the center.',
  openGraph: {
    title: 'AI Governance for K–12 Districts — Banyan Global Learning',
    description:
      'A 5-tier AI governance service line for K–12 districts. Free Readiness Snapshot, $3,500 Scan, $15–25K Audit, $25–50K Blueprint, and Strategic Advisory Retainer.',
    url: 'https://banyangloballearning.com/programs/ai-pd',
    type: 'website',
  },
}

// ── Data ─────────────────────────────────────────────────────────────────────

const layers = [
  {
    id: 'L1',
    name: 'Strategic Clarity',
    icon: TrendingUp,
    color: 'text-blue-400',
    bg: 'bg-blue-950',
    border: 'border-blue-800',
    accentBar: 'bg-blue-500',
    description:
      'Board-approved AI intent. Cross-functional steering. A vision your superintendent can articulate to staff, families, and media — and building principals can translate locally.',
    questions: [
      'Does your board have a documented AI strategic intent?',
      'Can your superintendent and cabinet clearly articulate the district\'s AI posture?',
      'Is AI strategy integrated into your district\'s broader strategic plan?',
    ],
  },
  {
    id: 'L2',
    name: 'Risk & Compliance',
    icon: Shield,
    color: 'text-blue-300',
    bg: 'bg-blue-950',
    border: 'border-blue-800',
    accentBar: 'bg-blue-400',
    description:
      'FERPA and COPPA alignment, vendor evaluation criteria, academic integrity boundaries, incident response. Protection from both legal exposure and reputational risk.',
    questions: [
      'Does your vendor evaluation process include AI-specific criteria (bias, transparency, data flow)?',
      'Do you maintain a living inventory of all AI tools in use district-wide?',
      'Have you defined AI academic integrity boundaries differentiated by grade level?',
    ],
  },
  {
    id: 'L3',
    name: 'Instructional Integration',
    icon: BookOpen,
    color: 'text-teal-300',
    bg: 'bg-teal-950',
    border: 'border-teal-800',
    accentBar: 'bg-teal-400',
    description:
      'The center of the framework — and our core differentiator. Cognitive integrity: defining which cognitive work must remain human-performed for learning to occur. Assessment redesign. AI literacy as a discipline, not an afterthought.',
    questions: [
      'Have you articulated which cognitive work must remain human-performed in your instructional model?',
      'Have your assessment practices been reviewed and updated to account for AI capabilities?',
      'Does your PD go beyond tool training to include pedagogy, ethics, and cognitive impact?',
    ],
    featured: true,
  },
  {
    id: 'L4',
    name: 'Operational Implementation',
    icon: Settings,
    color: 'text-blue-300',
    bg: 'bg-blue-950',
    border: 'border-blue-800',
    accentBar: 'bg-blue-400',
    description:
      'A documented 6–12 month implementation roadmap with milestones and owners. Sequenced, role-differentiated PD. Parent communication plans. The operational tissue that connects strategy to classrooms.',
    questions: [
      'Do you have a documented 6–12 month AI roadmap with milestones and named owners?',
      'Is your PD sequenced over time and differentiated by role — or a one-and-done workshop?',
      'Do you have a proactive parent and community engagement plan (not just reactive FAQs)?',
    ],
  },
  {
    id: 'L5',
    name: 'Infrastructure & Future-Readiness',
    icon: Server,
    color: 'text-blue-400',
    bg: 'bg-blue-950',
    border: 'border-blue-800',
    accentBar: 'bg-blue-500',
    description:
      'Vendor independence, data sovereignty, infrastructure decisions driven by educational principles rather than vendor sales cycles. A 2–3 year evolution roadmap that accounts for AI\'s pace of change.',
    questions: [
      'Do you have a decision framework for cloud vs. local/private AI solutions?',
      'Are infrastructure decisions driven by educational principles or vendor sales cycles?',
      'Are you monitoring emerging developments — agentic AI, multimodal models, AI companions?',
    ],
  },
]

const tiers = [
  {
    name: 'AI Readiness Scan',
    price: '$3,500',
    timeline: '2 weeks',
    badge: 'New',
    badgeClass: 'bg-amber-900/60 text-amber-200',
    description:
      'Productized maturity diagnostic. Your leadership team takes the deeper paid Snapshot, joins a 60-minute facilitated Scoring Workshop with Travis, and receives a third-party-validated maturity baseline plus three high-priority focus areas — in two weeks, for under $5,000.',
    deliverables: [
      'Deeper 5-Layer Snapshot intake (paid version, more granular)',
      '60-min Leadership Scoring Workshop (live, facilitated)',
      '8–10 page Scan Report with maturity rating per layer and Top 3 Focus Areas',
      '30-min closeout call',
      'One templated starter artifact (district picks from menu)',
    ],
    caption:
      'Best fit: districts whose leadership has a sense of where they are on AI governance and want a third-party-reviewed baseline before committing to deeper work. Director-discretionary spend in most districts — no board action required.',
    cta: 'Request a Readiness Scan',
    ctaHref: '/contact?service=readiness-scan',
    highlight: false,
  },
  {
    name: 'AI Governance Audit',
    price: '$15K–$25K',
    timeline: '4–6 weeks',
    badge: '',
    badgeClass: '',
    description:
      'A structured diagnostic across all five layers. We assess where your district stands, map the gaps, and deliver a prioritized action plan your leadership team can act on immediately.',
    deliverables: [
      '5-Layer Governance Assessment (full district)',
      'Gap analysis report with prioritized recommendations',
      'Vendor evaluation snapshot and compliance review',
      'Board-ready executive summary',
      'Implementation roadmap outline',
    ],
    caption:
      'Goes deeper than the Scan: stakeholder interviews beyond leadership, custom recommendations with implementation steps, and a board-ready executive summary.',
    cta: 'Request an Audit',
    ctaHref: '/contact?service=governance-audit',
    highlight: false,
  },
  {
    name: 'AI Implementation Blueprint',
    price: '$25K–$50K',
    timeline: '3–4 months',
    badge: 'Highest impact',
    badgeClass: 'bg-teal-800 text-teal-200',
    description:
      'Deep partnership from diagnosis through implementation. We build the governance infrastructure, redesign assessments, train leadership teams, and produce every major deliverable — then hand it over fully staffed and ready to run.',
    deliverables: [
      'Everything in the Governance Audit',
      'Cognitive Integrity Rubric (grade-differentiated)',
      'AI Task Redesign Templates (curriculum-aligned)',
      'Vendor Evaluation Matrix (Banyan-built)',
      'Staff and parent communication toolkit',
      'Sequenced, role-differentiated PD plan',
      '6–12 month operational roadmap with owners',
      '2–3 year infrastructure evolution roadmap',
    ],
    cta: 'Request a Blueprint Proposal',
    ctaHref: '/contact?service=implementation-blueprint',
    highlight: true,
  },
  {
    name: 'Strategic Advisory Retainer',
    price: '$4K–$8K / month',
    timeline: 'Ongoing',
    badge: 'For sustained momentum',
    badgeClass: 'bg-blue-900 text-blue-300',
    description:
      'AI governance is not a one-time engagement. The landscape shifts quarterly. Our advisory retainer keeps your leadership team current, accountable, and ahead of what\'s coming.',
    deliverables: [
      'Monthly leadership check-in and strategy session',
      'On-call policy review and vendor evaluation support',
      'Emerging technology briefings (quarterly)',
      'Board meeting prep and talking points',
      'Incident response support as needed',
    ],
    cta: 'Schedule a Retainer Conversation',
    ctaHref: '/contact?service=advisory-retainer',
    highlight: false,
  },
]

const competitors = [
  {
    who: 'AI for Education / ISTE',
    what: 'They train educators on AI tools',
    banyan: 'We architect the institutional systems those educators return to',
  },
  {
    who: 'CoSN Maturity Assessment',
    what: 'They tell districts where they are',
    banyan: 'We take districts where they need to go',
  },
  {
    who: 'McKinsey / Big 4',
    what: 'Strategic rigor, no classroom depth — and $200K+ price tags',
    banyan: 'Practitioner depth plus strategic rigor, at a price mid-size districts can fund',
  },
  {
    who: 'EdTech Vendors',
    what: 'Governance guidance that leads to product adoption',
    banyan: 'Vendor-independent — we work for your district, not a sales cycle',
  },
]

const marketStats = [
  { number: '60%', label: 'of U.S. teachers are using AI tools in their classrooms' },
  { number: '60%', label: 'of those teachers say their district has NOT communicated clear AI policies' },
  { number: '38%', label: 'CAGR: projected growth of AI in K–12 through 2033' },
  { number: '28', label: 'states have published AI guidance — but most districts haven\'t kept up' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function AIPDPage() {
  return (
    <>
      <SiteHeader />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #070b12 0%, #0d1b2e 60%, #051e38 100%)' }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Blue glow */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #4586c3 0%, transparent 70%)',
            }}
          />

          <div className="container-site relative z-10 py-24 lg:py-36">
            <div className="max-w-4xl">

              {/* Pre-heading */}
              <div className="flex items-center gap-3 mb-7">
                <span className="badge badge-blue">AI Governance</span>
                <span className="text-blue-400 text-sm font-medium">
                  For K–12 district leadership teams
                </span>
              </div>

              <h1 className="display-xl text-white text-balance mb-8 leading-[1.05]">
                Your district has an AI{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  policy.
                </span>
                <br />
                You don&apos;t yet have AI{' '}
                <span className="text-white">governance.</span>
              </h1>

              <p className="body-lg text-neutral-300 mb-4 max-w-2xl">
                60% of your teachers are already using AI tools. 60% of them say your
                district has not communicated clear expectations. The policy-practice
                gap is widening — and the districts that close it now will be the ones
                that get this right.
              </p>
              <p className="body-lg text-neutral-400 mb-12 max-w-2xl">
                Banyan&apos;s 5-Layer AI Governance Framework gives district leadership
                the structure, deliverables, and implementation support to move from
                reactive to deliberate — at a price point and practitioner depth no
                large consultancy can match.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/programs/ai-pd/snapshot" className="btn btn-primary btn-xl">
                  Take the Readiness Snapshot
                  <ArrowRight size={20} />
                </Link>
                <Link href="#framework" className="btn btn-xl border border-neutral-600 text-neutral-300 hover:bg-white/5 hover:border-neutral-400">
                  See the framework
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── MARKET STATS BAND ─────────────────────────────────────────── */}
        <section className="bg-neutral-950 border-y border-neutral-800">
          <div className="container-site py-14">
            <p className="text-neutral-500 text-xs font-semibold tracking-widest uppercase text-center mb-10">
              The state of AI in K–12 — early 2026
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketStats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-display font-extrabold tracking-tight leading-none mb-2"
                    style={{
                      fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                      background: 'linear-gradient(135deg, #93c5fd, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-neutral-400 text-sm leading-snug max-w-[180px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE PROBLEM ───────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-900">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  What districts are asking for
                </p>
                <h2 className="display-md text-white mb-6">
                  One-day workshops don&apos;t solve a governance problem.
                </h2>
                <p className="body-lg text-neutral-300 mb-5">
                  The AI-in-education market has moved. Districts aren&apos;t asking for
                  another PD session — they&apos;re asking for institutional clarity:
                  policy-to-practice alignment, assessment integrity standards, vendor
                  evaluation frameworks, board-level readiness, and implementation
                  roadmaps that survive longer than a semester.
                </p>
                <p className="body-md text-neutral-400">
                  These are higher-order problems that require a governance-first partner,
                  not a PD provider. Banyan is built to be that partner.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: AlertTriangle,
                    title: 'Policy-to-practice alignment',
                    body: 'You have policies. Classrooms are inconsistent. The gap between what the board approved and what happens in third period is real.',
                  },
                  {
                    icon: FileCheck,
                    title: 'Assessment integrity',
                    body: 'How do you handle AI and academic honesty when the tool is invisible and the policy is vague?',
                  },
                  {
                    icon: Shield,
                    title: 'Vendor evaluation',
                    body: 'Which AI tools should you approve, and what criteria should you use to decide — independently of vendor sales cycles?',
                  },
                  {
                    icon: Users,
                    title: 'Board-level readiness',
                    body: 'How do you brief your board and community on AI risk in a way that is honest, confident, and actionable?',
                  },
                ].map((item, i) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-neutral-800 rounded-xl p-5 border border-neutral-700"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-900/60 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="text-blue-400" size={17} />
                      </div>
                      <div>
                        <div className="font-display font-semibold text-white text-base mb-1">
                          {item.title}
                        </div>
                        <div className="text-neutral-400 text-sm leading-relaxed">{item.body}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── THE 5-LAYER FRAMEWORK ─────────────────────────────────────── */}
        <section id="framework" className="section-padding bg-neutral-950">
          <div className="container-site">

            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Banyan&apos;s proprietary framework
              </p>
              <h2 className="display-md text-white mb-5">
                The 5-Layer AI Governance Framework
              </h2>
              <p className="body-lg text-neutral-400">
                Most governance frameworks treat instruction as downstream from policy.
                This one treats it as the center of the entire system — which is how
                districts actually experience the problem.
              </p>
            </div>

            <div className="space-y-4">
              {layers.map((layer, i) => {
                const Icon = layer.icon
                return (
                  <div
                    key={i}
                    className={`rounded-xl border ${layer.border} overflow-hidden`}
                    style={{ background: 'rgba(15,23,42,0.8)' }}
                  >
                    {/* Top accent */}
                    <div className={`h-0.5 w-full ${layer.accentBar}`} />

                    <div className="p-7 lg:p-8">
                      <div className="grid lg:grid-cols-[240px_1fr_1fr] gap-6 lg:gap-8 items-start">

                        {/* Label + icon */}
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                            <Icon className={layer.color} size={22} />
                          </div>
                          <div>
                            <div className="text-neutral-500 text-xs font-bold tracking-widest uppercase mb-1">
                              {layer.id}
                            </div>
                            <div className="font-display font-bold text-white text-xl leading-tight">
                              {layer.name}
                            </div>
                            {layer.featured && (
                              <span className="inline-block mt-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-900 text-teal-300 uppercase tracking-wide">
                                Core differentiator
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Description */}
                        <div className="text-neutral-300 text-sm leading-relaxed lg:border-l lg:border-neutral-800 lg:pl-8">
                          <p>{layer.description}</p>
                          {layer.featured && (
                            <a
                              href="/downloads/cognitive-integrity-rubric-grade8.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-teal-300 hover:text-teal-200 text-sm font-medium mt-3 group"
                            >
                              Preview the Cognitive Integrity Rubric
                              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                            </a>
                          )}
                        </div>

                        {/* Sample questions */}
                        <div className="lg:border-l lg:border-neutral-800 lg:pl-8">
                          <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-3">
                            Sample assessment questions
                          </div>
                          <ul className="space-y-2">
                            {layer.questions.map((q, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <ChevronRight
                                  className="text-blue-500 shrink-0 mt-0.5"
                                  size={14}
                                />
                                <span className="text-neutral-400 text-sm leading-snug">{q}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Snapshot CTA */}
            <div className="mt-10 rounded-2xl border border-blue-700 bg-blue-950/40 p-8 lg:p-10">
              <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
                <div>
                  <span className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3 block">
                    Free
                  </span>
                  <div className="font-display font-bold text-white text-2xl mb-4">
                    5-Layer AI Readiness Snapshot
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-5 max-w-2xl">
                    A 10-minute self-assessment built directly on the 5-Layer Framework.
                    Your leadership team answers 25 statements across the five governance
                    layers, plus four context questions. We auto-deliver a 2-page
                    personalized report with your maturity rating per layer and three
                    immediate priorities &mdash; the same instrument we use to anchor
                    every paid engagement.
                  </p>
                  <p className="text-blue-300 text-xs">
                    No card. No consultant call. The PDF lands in your inbox within 48 hours.
                  </p>
                </div>
                <Link
                  href="/programs/ai-pd/snapshot"
                  className="btn btn-white btn-lg shrink-0"
                >
                  Take the Snapshot
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE TIERS ─────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-900">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Engagement tiers
              </p>
              <h2 className="display-md text-white mb-5">
                Choose your level of engagement
              </h2>
              <p className="body-md text-neutral-400">
                Every engagement starts with the free{' '}
                <Link href="/programs/ai-pd/snapshot" className="text-blue-300 hover:text-blue-200 underline underline-offset-2">5-Layer Snapshot</Link>
                . From there, four levels of partnership &mdash; depending on how much you
                want us in your district&apos;s room.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden flex flex-col ${
                    tier.highlight
                      ? 'border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.15)]'
                      : 'border border-neutral-700'
                  }`}
                  style={{ background: tier.highlight ? 'rgba(14,74,131,0.15)' : 'rgba(23,33,48,0.8)' }}
                >
                  {/* Header */}
                  <div className={`p-7 border-b ${tier.highlight ? 'border-blue-800' : 'border-neutral-700'}`}>
                    {tier.badge ? (
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${tier.badgeClass}`}>
                          {tier.badge}
                        </span>
                      </div>
                    ) : (
                      <div className="mb-4 h-[26px]" aria-hidden="true" />
                    )}
                    <h3 className="font-display font-bold text-white text-xl mb-1">
                      {tier.name}
                    </h3>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span
                        className="font-display font-extrabold text-3xl"
                        style={{
                          background: 'linear-gradient(135deg, #93c5fd, #3b82f6)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {tier.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm mb-5">
                      <Clock size={14} />
                      {tier.timeline}
                    </div>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="p-7 flex-1">
                    <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-4">
                      Deliverables
                    </div>
                    <ul className="space-y-3">
                      {tier.deliverables.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2
                            className={`shrink-0 mt-0.5 ${tier.highlight ? 'text-blue-400' : 'text-neutral-500'}`}
                            size={15}
                          />
                          <span className="text-neutral-300 text-sm leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {('caption' in tier && tier.caption) ? (
                      <p className="text-neutral-500 text-xs leading-relaxed mt-5 pt-5 border-t border-neutral-800 italic">
                        {tier.caption}
                      </p>
                    ) : null}
                  </div>

                  {/* CTA */}
                  <div className="px-7 pb-7">
                    <Link
                      href={tier.ctaHref}
                      className={`btn btn-lg w-full justify-center ${
                        tier.highlight ? 'btn-primary' : 'border border-neutral-600 text-neutral-300 hover:bg-white/5 hover:border-neutral-400'
                      }`}
                    >
                      {tier.cta}
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-neutral-500 text-sm mt-8">
              All engagements are funded through general operating budgets, Title II-A, Title IV-A, or
              state AI/technology grants. Banyan can help identify applicable funding streams.
            </p>
          </div>
        </section>

        {/* ── WHY BANYAN ────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-950">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div>
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Competitive positioning
                </p>
                <h2 className="display-md text-white mb-6">
                  Strategic rigor. Classroom depth. Vendor independence.
                </h2>
                <p className="body-lg text-neutral-300 mb-5">
                  Banyan occupies a positioning that no major competitor currently holds:
                  governance-first, practitioner-grounded, and priced for the districts
                  that need it most.
                </p>
                <p className="body-md text-neutral-400 mb-8">
                  Our consultant has designed curriculum, led school programs, managed
                  virtual learning systems, and built AI tools from the ground up. That
                  cross-stack fluency — instruction, operations, technology, governance —
                  is the core of what makes the 5-Layer Framework work.
                </p>

                <div className="space-y-4">
                  {[
                    'Governance-first, not PD-first',
                    'Vendor-independent — we work for your district',
                    'Practitioner depth — classroom to boardroom',
                    'Complementary to CoSN, not competitive',
                    'Priced for mid-size districts ($15K–$50K)',
                    'Cognitive integrity as instructional north star',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-blue-400 shrink-0" size={18} />
                      <span className="text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive comparison */}
              <div className="space-y-4">
                <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-6">
                  How we compare
                </div>
                {competitors.map((comp, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-neutral-800 overflow-hidden"
                    style={{ background: 'rgba(15,23,42,0.6)' }}
                  >
                    <div className="px-5 py-4 border-b border-neutral-800">
                      <div className="text-neutral-400 text-xs font-semibold uppercase tracking-wide">
                        {comp.who}
                      </div>
                      <div className="text-neutral-500 text-sm mt-1">{comp.what}</div>
                    </div>
                    <div className="px-5 py-4 flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-[10px] font-bold">B</span>
                      </div>
                      <div className="text-blue-200 text-sm leading-relaxed">{comp.banyan}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY — KENNEWICK ────────────────────────────────────── */}
        <section className="section-padding bg-neutral-900 border-t border-neutral-800">
          <div className="container-site">
            <div className="max-w-4xl mx-auto">

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center shrink-0">
                  <Award className="text-blue-400" size={20} />
                </div>
                <div>
                  <div className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
                    Case study
                  </div>
                  <div className="text-white font-display font-bold text-lg">
                    Kennewick School District, WA
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-5 mb-10 text-sm text-neutral-400 leading-relaxed">
                <strong className="text-neutral-200">A note on framing:</strong>{' '}
                This engagement was an AI professional development workshop for
                Kennewick teachers &mdash; adjacent to, but not the same as, the
                Governance service line described above. We include it because the
                underlying practitioner approach is what the Governance engagements
                operationalize.
              </div>

              <div className="grid md:grid-cols-2 gap-10 items-start">

                <div>
                  <h2 className="display-sm text-white mb-5">
                    100% of teachers agreed the PD was valuable and gained strategies they could apply immediately.
                  </h2>
                  <p className="text-neutral-400 body-md mb-6">
                    Kennewick School District engaged Banyan for district-wide AI
                    professional development. After the engagement, every participating
                    teacher reported gaining practical, applicable strategies — and
                    increased openness to integrating AI into their instructional practice.
                  </p>
                  <Link
                    href="/case-studies/kennewick"
                    className="btn border border-blue-700 text-blue-300 hover:bg-blue-900/30 btn-md"
                  >
                    Read the full case study
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      stat: '100%',
                      label: 'of teachers agreed the PD was valuable',
                    },
                    {
                      stat: '100%',
                      label: 'gained strategies they could apply to their teaching',
                    },
                    {
                      stat: '100%',
                      label: 'reported being more likely to use AI tools after the engagement',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-5 p-5 rounded-xl border border-neutral-700"
                      style={{ background: 'rgba(14,74,131,0.1)' }}
                    >
                      <div
                        className="font-display font-extrabold text-4xl leading-none shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #93c5fd, #3b82f6)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {item.stat}
                      </div>
                      <div className="text-neutral-300 text-sm leading-snug">{item.label}</div>
                    </div>
                  ))}

                  {/* Testimonial quotes */}
                  <div
                    className="p-5 rounded-xl border border-neutral-700 mt-2"
                    style={{ background: 'rgba(15,23,42,0.6)' }}
                  >
                    <p className="text-neutral-300 text-sm italic leading-relaxed mb-3">
                      &ldquo;These specific workflows have been helpful. Yeah, I am more open to using AI.&rdquo;
                    </p>
                    <div className="text-neutral-500 text-xs">
                      — Kennewick teacher, post-engagement survey
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA — TWO WAYS TO BEGIN ─────────────────────────────── */}
        <section
          className="section-padding relative overflow-hidden"
          style={{ background: 'linear-gradient(160deg, #060b14 0%, #0e3460 60%, #0c2a52 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="container-site relative z-10">
            <div className="max-w-4xl mx-auto">

              <div className="text-center mb-12">
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                  Start here
                </p>
                <h2 className="display-md text-white mb-5">
                  Two ways to begin
                </h2>
                <p className="body-lg text-blue-100 max-w-2xl mx-auto">
                  The cleanest start is the 5-Layer Snapshot &mdash; 10 minutes, free,
                  your maturity baseline lands in your inbox. From there, a free
                  30-minute discovery call is available if you&apos;d like to discuss
                  your results before committing to a paid engagement.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                {/* Primary CTA card — Snapshot */}
                <div className="rounded-2xl border-2 border-blue-500 bg-blue-950/40 p-8 shadow-[0_0_40px_rgba(59,130,246,0.15)] flex flex-col">
                  <div className="flex-1">
                    <span className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3 block">
                      Free · 10 minutes
                    </span>
                    <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                      Take the 5-Layer AI Readiness Snapshot
                    </h3>
                    <p className="text-blue-100 text-sm leading-relaxed mb-6">
                      Free. 10 minutes. Personalized 2-page PDF auto-delivered to
                      your inbox within 48 hours.
                    </p>
                  </div>
                  <Link href="/programs/ai-pd/snapshot" className="btn btn-primary btn-lg w-full justify-center">
                    Take the Snapshot
                    <ArrowRight size={17} />
                  </Link>
                </div>

                {/* Secondary CTA card — Discovery call (gated) */}
                <div className="rounded-2xl border border-blue-800 bg-blue-950/20 p-8 flex flex-col">
                  <div className="flex-1">
                    <span className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-3 block">
                      Free · 30 minutes
                    </span>
                    <h3 className="font-display font-bold text-white text-xl mb-3 leading-tight">
                      Book a 30-minute discovery call
                    </h3>
                    <p className="text-blue-200 text-sm leading-relaxed mb-6">
                      After the Snapshot, talk through your results with Travis.
                      No obligation. No pitch until we know the fit.
                    </p>
                  </div>
                  <DiscoveryCallCTA />
                </div>

              </div>

              <p className="text-center text-neutral-500 text-xs mt-10">
                Engagements may be funded through Title II-A, Title IV-A, state AI grants, or general operating budget.
              </p>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
