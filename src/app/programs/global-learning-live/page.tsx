import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  Globe,
  Video,
  Users,
  Repeat,
  Sparkles,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  BookOpen,
  Heart,
  Zap,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Global Learning Live — Product Page
// Place at: src/app/programs/global-learning-live/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Global Learning Live — Live, International, Cohort-Based Learning',
  description:
    'Connect your classroom to the world. Global Learning Live is a 4-week cohort program that creates real student connection through awe-driven experiences and live international peer exchange.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const fourWeekArc = [
  {
    week: 'Week 1',
    title: 'Big Question\n+ Awe Anchor',
    description:
      'A front-loaded live experience designed to create genuine awe — an encounter with something unexpected, beautiful, or hard to explain. Students leave with one personal "big question" to carry into the cycle.',
    icon: Sparkles,
    color: 'bg-teal-400',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    week: 'Week 2',
    title: 'Story',
    description:
      'Students create a low-barrier personal artifact connected to the theme — a short video, a drawing with narration, a personal story. The focus is expression, not analysis. Sharing their own experience, not performing.',
    icon: MessageSquare,
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    week: 'Week 3',
    title: 'Comparison + Interpretation',
    description:
      "Students engage with peer artifacts from their international cohort. They make observations, ask questions, and shift from \"my story\" to \"what I'm learning about you and us.\" This is where the real exchange begins.",
    icon: Globe,
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
  {
    week: 'Week 4',
    title: 'Wrap + Reciprocity Loop',
    description:
      'Students respond, clarify, and synthesize. A culminating live connective moment brings the cohort back together — letting students land on something they genuinely feel, not just learned.',
    icon: Heart,
    color: 'bg-teal-700',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-700',
  },
]

const whatMakesItWork = [
  {
    icon: Video,
    title: 'Live & synchronous',
    body: 'Every session happens in real time with a trained human facilitator. Not recorded. Not asynchronous. The live element is the point.',
  },
  {
    icon: Globe,
    title: 'International by design',
    body: 'Classrooms are paired with international peers — not simulated global perspectives, but real students from different countries and cultures.',
  },
  {
    icon: Repeat,
    title: 'Repeatable over time',
    body: "Connection doesn't happen in a single session. The 4-week arc is designed to build — each week layering meaning on top of the last.",
  },
  {
    icon: Users,
    title: 'Human-facilitated',
    body: "Banyan's trained facilitators host every session, so your teacher shows up as a co-learner — not the sole expert.",
  },
  {
    icon: BookOpen,
    title: 'Fits inside existing class time',
    body: 'GLL is designed to slot into ELA, social studies, advisory, homeroom, or enrichment blocks. No new period required.',
  },
  {
    icon: Zap,
    title: 'Low lift for teachers',
    body: 'Teachers participate, they don&apos;t plan. Banyan handles curriculum, facilitation, partner matching, and scheduling so your team can focus on their students.',
  },
]

const whoItsFor = [
  'Students ages 10–14 (grades 5–8)',
  'Any subject: English, social studies, advisory, enrichment',
  'Classrooms with access to basic video conferencing',
  'Teachers who want authentic engagement, not another add-on',
  'Coordinators looking for repeatable, sustainable global programming',
  'Schools tired of one-off cultural events that don&apos;t go anywhere',
]

const logistics = [
  { icon: Calendar, label: 'Duration', value: '4 consecutive weeks per cycle' },
  { icon: Clock, label: 'Session length', value: '1 class period per week' },
  { icon: Users, label: 'Cohort size', value: '~4 global classrooms per cohort' },
  { icon: Globe, label: 'Format', value: 'Live, synchronous, video-based' },
  { icon: BookOpen, label: 'Fits into', value: 'Existing class schedule' },
  { icon: Sparkles, label: 'Price', value: '~$1,000 per classroom per cycle' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GLLPage() {
  return (
    <>
      <SiteHeader />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-gll relative overflow-hidden">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container-site relative z-10 py-24 lg:py-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="badge badge-white">Global Learning Live</span>
                <span className="text-teal-200 text-sm font-medium">Now enrolling</span>
              </div>

              <h1 className="display-xl text-white text-balance mb-6">
                Live. International.{' '}
                <span className="text-teal-200">Transformative.</span>
              </h1>

              <p className="body-lg text-teal-100 mb-10 max-w-2xl">
                A 4-week cohort program that connects your classroom to real students
                around the world — through live sessions, personal storytelling, and
                genuine international peer exchange. Built to fit inside your
                existing schedule.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?program=gll" className="btn btn-white btn-xl">
                  Enroll your classroom
                  <ArrowRight size={20} />
                </Link>
                <Link href="#how-it-works" className="btn btn-ghost btn-xl">
                  See how it works
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
        </section>

        {/* ── CORE MECHANISM ───────────────────────────────────────────── */}
        <section className="bg-neutral-50 border-b border-neutral-200">
          <div className="container-site py-16">
            <p className="text-center text-neutral-600 text-sm font-semibold tracking-widest uppercase mb-10">
              The experience arc
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', label: 'Awe', sub: 'A live encounter with something genuinely surprising...and inspirational' },
                { step: '02', label: 'Expression', sub: 'Students share their own story, in their own voice' },
                { step: '03', label: 'Reciprocity', sub: 'Engage with peers across the world' },
                { step: '04', label: 'Connection', sub: 'Something that is felt, not just learned' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="font-display font-bold text-neutral-900 text-lg mb-1">{item.label}</div>
                  <div className="text-neutral-600 text-sm leading-snug">{item.sub}</div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS GLL ──────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="max-w-4xl mx-auto">
              <p className="section-label mb-4">What it is</p>
              <h2 className="display-md text-neutral-900 mb-6">
                  <span className="block">Not a pen-pal program.</span>
                  <span className="block">Not a one-off event.</span>
                  <span className="block text-teal-500">Something new.</span>
              </h2>
              <div className="space-y-5 body-lg text-neutral-700">
                <p>
                  Global Learning Live is a repeatable, live, cohort-based global
                  learning program that creates meaningful student connection through
                  awe-driven experiences, personal expression, and international peer
                  exchange — all inside existing school schedules.
                </p>
                <p>
                  Each cycle pairs your classroom with international peers for four
                  weeks of live sessions that fit into a single class period. A trained Banyan facilitator
                  hosts every session, so your teacher shows up as a co-learner. The
                  curriculum does the heavy lifting. Your students do the connecting.
                </p>
                <p>
                  The result isn&apos;t a performance or a one-time cultural exchange.
                  It&apos;s a felt experience — students who leave the cycle saying
                  something like <em>"I actually communicated with someone in another country,
                  and they were kind of like me."</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — 4-WEEK ARC ────────────────────────────────── */}
        <section id="how-it-works" className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">How it works</p>
              <h2 className="display-md text-neutral-900 mb-4">
                The 4-week arc
              </h2>
              <p className="body-lg text-neutral-600">
                Each cycle follows a deliberate sequence. The structure isn&apos;t
                arbitrary — every week is designed to build on the last, moving
                students from curiosity to genuine connection.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fourWeekArc.map((week, i) => {
                const Icon = week.icon
                return (
                  <div key={i} className="card p-0 overflow-hidden">
                    <div className={`${week.color} px-5 pt-6 pb-5`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white/70 text-xs font-semibold tracking-widest uppercase">
                          {week.week}
                        </span>
                        <Icon className="text-white/60" size={18} />
                      </div>
                      <h3 className="font-display font-bold text-white text-xl leading-tight">
                        {week.title}
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {week.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT A SESSION LOOKS LIKE ─────────────────────────────────── */}
        <section className="section-padding border-t border-neutral-200">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 order-2 lg:order-1">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://picsum.photos/seed/gll-session/800/600)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
                {/* Floating stat */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <div className="font-display font-extrabold text-teal-600 text-2xl leading-none">1</div>
                    <div className="text-neutral-600 text-xs mt-0.5">class period</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <div className="font-display font-extrabold text-teal-600 text-2xl leading-none">Live</div>
                    <div className="text-neutral-600 text-xs mt-0.5">human-facilitated</div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="order-1 lg:order-2">
                <p className="section-label mb-4">What a session looks like</p>
                <h2 className="display-md text-neutral-900 mb-6">
                  <span className="block">Your teacher shows up.</span>
                  <span className="block">Banyan handles the rest.</span>
                </h2>
                <div className="space-y-5 text-neutral-700">
                  <p className="body-lg">
                    A Banyan facilitator opens the session live with an awe anchor —
                    something unexpected, beautiful, or hard to explain from somewhere
                    in the world. The same moment reaches classrooms across multiple 
                    countries — each in their own time, all within the same week.
                  </p>
                  <p className="body-md">
                    From there, the facilitator moves students through structured
                    exchange: sharing artifacts, asking questions of international
                    peers, building a real back-and-forth. Your teacher isn&apos;t
                    managing the room — they&apos;re participating alongside their
                    students.
                  </p>
                  <p className="body-md">
                    During sessions, students complete a light artifact — a short
                    video, a drawing, a personal story — that gets shared with their
                    international cohort. This is where the asynchronous thread
                    builds. When they come back live the next week, they&apos;re
                    picking up a real conversation.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Live video session', 'Trained facilitator', 'International peers', 'Light student artifacts', 'Structured exchange'].map((tag) => (
                    <span key={tag} className="badge badge-teal">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT MAKES IT WORK ───────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">The non-negotiables</p>
              <h2 className="display-md text-neutral-900 mb-4">
                What makes GLL different
              </h2>
              <p className="body-lg text-neutral-600">
                These aren&apos;t features — they&apos;re design principles. Remove any
                one of them and you don&apos;t have Global Learning Live anymore.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatMakesItWork.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card p-6">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                      <Icon className="text-teal-500" size={20} />
                    </div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p
                      className="text-neutral-600 text-sm leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ─────────────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="section-label mb-4">Who it&apos;s for</p>
                <h2 className="display-md text-neutral-900 mb-6">
                  Built for teachers who want something real
                </h2>
                <p className="body-lg text-neutral-700 mb-8">
                  GLL works best in classrooms where a teacher is already looking for
                  authentic engagement — not another worksheet, not another tool — but
                  an experience that actually moves their students.
                </p>

                <ul className="space-y-4">
                  {whoItsFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-teal-500 shrink-0 mt-0.5"
                        size={20}
                      />
                      <span
                        className="text-neutral-700"
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* What must be true callout */}
              <div className="bg-teal-600 rounded-2xl p-8 text-white">
                <h3 className="font-display font-bold text-xl mb-6 text-teal-100 uppercase tracking-wide text-sm">
                  What your school needs
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: 'A single period weekly slot',
                      body: "GLL fits into existing class time — it doesn't need a new period. English, social studies, advisory, and enrichment all work.",
                    },
                    {
                      title: 'Basic video conferencing',
                      body: 'Zoom, Google Meet, Teams — whatever your school already uses. No special technology required.',
                    },
                    {
                      title: 'A teacher willing to step back',
                      body: "The best GLL teachers trust the process and guide the students. The facilitator's job is engage curiousity; the teacher's job is to participate.",
                    },
                    {
                      title: 'Commitment for 4 weeks',
                      body: 'The arc only works if everyone shows up. We ask for consistent attendance across the full cycle.',
                    },
                  ].map((req, i) => (
                    <div key={i} className="border-b border-teal-500/50 pb-5 last:border-0 last:pb-0">
                      <div className="font-display font-semibold text-white mb-1">{req.title}</div>
                      <div className="text-teal-100 text-sm leading-relaxed">{req.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGISTICS + PRICING ──────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-t border-neutral-200">
          <div className="container-site">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="section-label mb-4">Logistics &amp; pricing</p>
              <h2 className="display-md text-neutral-900 mb-4">
                <span className="block">Simple to understand.</span>
                <span className="block">Easy to budget.</span>
              </h2>
              <p className="body-md text-neutral-600">
                <span className="block">One flat rate per classroom per cycle.</span>
                <span className="block">No hidden fees.</span>
                <span className="block">No per-student licensing.</span>
               <span className="block">Just connect, and go.</span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
              {logistics.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                      <Icon className="text-teal-500" size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-600 font-semibold uppercase tracking-wide mb-1">
                        {item.label}
                      </div>
                      <div className="font-display font-bold text-neutral-900 text-base">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Pricing callout */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 text-center">
              <div className="stat-number text-teal-500 mb-2">~$1,000</div>
              <div className="text-neutral-700 font-medium text-lg mb-1">per classroom, per cycle</div>
              <p className="text-neutral-600 text-sm mb-6">
                <span className="block">Includes all facilitation, curriculum, partner matching, and scheduling.</span>
                <span className="block">Volume pricing available for schools running multiple classrooms.</span>
              </p>
              <Link href="/contact?program=gll" className="btn btn-teal btn-lg">
                Request enrollment information
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SCHOOL YEAR TIMELINE ──────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">School year at a glance</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Four units. One school year.
              </h2>
              <p className="body-lg text-neutral-600">
                Each GLL unit runs 4 weeks and follows the same awe-driven arc.
                Together they form a full-year sequence — but schools can enter at
                any point or select individual units.
              </p>
            </div>

            {/* ── Desktop horizontal timeline ─────────────────────────────── */}
            <div className="hidden lg:block max-w-5xl mx-auto mb-10">
              {/* Timeline bar */}
              <div className="relative flex items-stretch">
                {/* Continuous track */}
                <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
                  <div className="flex h-full">
                    {/* Aug–Nov segment */}
                    <div className="flex-[4] bg-teal-300 rounded-l-full" />
                    {/* Winter break gap */}
                    <div className="flex-[2] border-t-2 border-dashed border-neutral-300 self-center h-0" />
                    {/* Feb–May segment */}
                    <div className="flex-[4] bg-teal-300 rounded-r-full" />
                  </div>
                </div>

                {/* Unit cards laid out across the track */}
                <div className="relative grid grid-cols-[1fr_1fr_0.8fr_1fr_1fr] w-full gap-0">
                  {/* ── Festivals ── */}
                  <div className="flex flex-col items-center text-center px-2">
                    <div className="card p-5 w-full border-t-4 border-teal-400 mb-4">
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        Festivals
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        Aug &ndash; Sep
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        &ldquo;How do communities celebrate who they are?&rdquo;
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-teal-100 z-10" />
                  </div>

                  {/* ── Murals ── */}
                  <div className="flex flex-col items-center text-center px-2">
                    <div className="card p-5 w-full border-t-4 border-teal-500 mb-4">
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        Murals
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        Oct &ndash; Nov
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        &ldquo;What stories do communities paint on their walls — and why?&rdquo;
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-teal-500 ring-4 ring-teal-100 z-10" />
                  </div>

                  {/* ── Winter break spacer ── */}
                  <div className="flex flex-col items-center justify-end pb-1">
                    <span className="text-neutral-400 text-xs font-medium tracking-wide uppercase mb-3">
                      Winter break
                    </span>
                    <div className="w-3 h-3 rounded-full bg-neutral-300 z-10" />
                  </div>

                  {/* ── Local Legends ── */}
                  <div className="flex flex-col items-center text-center px-2">
                    <div className="card p-5 w-full border-t-4 border-teal-600 mb-4">
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        Local Legends
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        Feb &ndash; Mar
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        &ldquo;Whose stories shape our communities — and whose are missing?&rdquo;
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-teal-600 ring-4 ring-teal-100 z-10" />
                  </div>

                  {/* ── Gathering Spaces ── */}
                  <div className="flex flex-col items-center text-center px-2">
                    <div className="card p-5 w-full border-t-4 border-teal-700 mb-4">
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        Gathering Spaces
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        Apr &ndash; May
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        &ldquo;Why do people come together — and what do those spaces say about us?&rdquo;
                      </p>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-teal-700 ring-4 ring-teal-100 z-10" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Mobile vertical timeline ────────────────────────────────── */}
            <div className="lg:hidden max-w-md mx-auto mb-10">
              <div className="relative pl-8">
                {/* Vertical track line */}
                <div className="absolute left-[9px] top-0 bottom-0 w-0.5 bg-teal-200" />

                {[
                  {
                    name: 'Festivals',
                    dates: 'Aug \u2013 Sep',
                    question: '\u201cHow do communities celebrate who they are?\u201d',
                    borderColor: 'border-teal-400',
                    dotColor: 'bg-teal-400',
                  },
                  {
                    name: 'Murals',
                    dates: 'Oct \u2013 Nov',
                    question: '\u201cWhat stories do communities paint on their walls \u2014 and why?\u201d',
                    borderColor: 'border-teal-500',
                    dotColor: 'bg-teal-500',
                  },
                ].map((unit, i) => (
                  <div key={i} className="relative mb-6">
                    <div className="absolute -left-8 top-5 w-5 h-5 rounded-full ring-4 ring-teal-100 z-10" style={{}} >
                      <div className={`w-full h-full rounded-full ${unit.dotColor}`} />
                    </div>
                    <div className={`card p-5 border-l-4 ${unit.borderColor}`}>
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        {unit.name}
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        {unit.dates}
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        {unit.question}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Winter break indicator */}
                <div className="relative mb-6 pl-2">
                  <div className="absolute -left-8 top-2 w-5 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-neutral-300" />
                  </div>
                  <p className="text-neutral-400 text-xs font-medium tracking-wide uppercase py-3">
                    Winter break
                  </p>
                </div>

                {[
                  {
                    name: 'Local Legends',
                    dates: 'Feb \u2013 Mar',
                    question: '\u201cWhose stories shape our communities \u2014 and whose are missing?\u201d',
                    borderColor: 'border-teal-600',
                    dotColor: 'bg-teal-600',
                  },
                  {
                    name: 'Gathering Spaces',
                    dates: 'Apr \u2013 May',
                    question: '\u201cWhy do people come together \u2014 and what do those spaces say about us?\u201d',
                    borderColor: 'border-teal-700',
                    dotColor: 'bg-teal-700',
                  },
                ].map((unit, i) => (
                  <div key={i} className="relative mb-6 last:mb-0">
                    <div className="absolute -left-8 top-5 w-5 h-5 rounded-full ring-4 ring-teal-100 z-10">
                      <div className={`w-full h-full rounded-full ${unit.dotColor}`} />
                    </div>
                    <div className={`card p-5 border-l-4 ${unit.borderColor}`}>
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-1">
                        {unit.name}
                      </h3>
                      <p className="text-teal-600 text-xs font-semibold tracking-wide uppercase mb-2">
                        {unit.dates}
                      </p>
                      <p className="text-neutral-600 text-sm leading-snug italic">
                        {unit.question}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flexibility note */}
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-start gap-3 bg-teal-50 border border-teal-200 rounded-xl px-6 py-4 text-left">
                <Calendar className="text-teal-500 shrink-0 mt-0.5" size={20} />
                <p className="text-neutral-700 text-sm leading-relaxed">
                  <strong className="text-neutral-900">Flexible entry.</strong>{' '}
                  Schools can enter at any point in the sequence or select individual
                  units that fit their curriculum calendar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIAL PLACEHOLDER ──────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-8">Early pilot results</p>

              {/* Placeholder quote block — replace with real testimonials */}
              <blockquote className="relative">
                <div className="text-7xl text-teal-200 font-serif leading-none mb-4">&ldquo;</div>
                <p className="display-sm text-neutral-800 font-medium italic mb-6 text-balance">
                  Sharing with others like them, but around the world, feels different. You can see it on their
                  faces — they stop performing and start actually engaging with each other.
                  That&apos;s rare.
                </p>
                <footer className="text-neutral-600 text-sm">
                  <strong className="text-neutral-700 not-italic">Pilot Program Teacher</strong>
                  {' '}— Early GLL Cohort, 2025
                </footer>
              </blockquote>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                {[
                  { number: '15+', label: 'Years of global learning experience' },
                  { number: '20+', label: 'Countries represented' },
                  { number: '100k+', label: 'Live sessions delivered' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="stat-number text-teal-500">{stat.number}</div>
                    <div className="text-neutral-600 text-sm mt-1 max-w-[140px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── LEARNING LIVE CREDIBILITY BRIDGE ─────────────────────────── */}
        <section className="bg-blue-600 section-padding">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center text-white">
              <p className="text-blue-300 text-xs font-semibold tracking-widest uppercase mb-4">
                Built on 17 years of proof
              </p>
              <h2 className="display-md text-white mb-5">
                GLL is built on the same model as Learning Live — our
                17-year exclusive partnership with Tsai Hsing School in Taipei.
              </h2>
              <p className="text-blue-100 body-lg mb-8">
                Since 2008, Banyan has delivered daily live sessions to Taipei
                students in grades 5–8.
                Alumni at Northwestern, NYU, Georgetown, University of Michigan, and more. GLL has taken
                that model and made it available to any school, anywhere.
              </p>
              <Link href="/programs/learning-live" className="btn btn-white btn-lg">
                Read the Learning Live story
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="hero-gll section-padding">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="display-md text-white mb-5">
                Ready to connect your classroom to the world?
              </h2>
              <p className="body-lg text-teal-100 mb-10">
                Cohorts fill quickly. Reach out to learn about upcoming cyle dates,
                enrollment requirements, and whether GLL is the right fit for your
                school.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact?program=gll" className="btn btn-white btn-xl">
                  Enroll your classroom
                  <ArrowRight size={20} />
                </Link>
                <Link href="/programs" className="btn btn-ghost btn-xl">
                  See all programs
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  )
}
