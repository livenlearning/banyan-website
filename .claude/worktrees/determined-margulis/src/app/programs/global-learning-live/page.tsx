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
    title: 'Big Question + Awe Anchor',
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
    body: 'Classrooms are paired with genuine international peers — not simulated global perspectives, but real students from different countries and cultures.',
  },
  {
    icon: Repeat,
    title: 'Repeatable over time',
    body: "Connection doesn't happen in a single session. The 4-week arc is designed to build — each week layering meaning on top of the last.",
  },
  {
    icon: Users,
    title: 'Human-facilitated',
    body: "Banyan's trained facilitators host every session, so your teacher shows up as a co-learner — not the sole expert — and students take center stage.",
  },
  {
    icon: BookOpen,
    title: 'Fits inside existing class time',
    body: 'GLL is designed to slot into English, social studies, advisory, homeroom, or enrichment blocks. No new period required.',
  },
  {
    icon: Zap,
    title: 'Low lift for teachers',
    body: 'Teachers facilitate, they don&apos;t plan. Banyan handles curriculum, facilitation, partner matching, and scheduling so your team can focus on their students.',
  },
]

const whoItsFor = [
  'Students ages 10–14 (grades 5–8)',
  'Any subject: English, social studies, advisory, enrichment',
  'Schools with access to basic video conferencing',
  'Teachers who want authentic engagement, not another add-on',
  'Coordinators looking for repeatable, sustainable global programming',
  'Schools tired of one-off cultural events that don&apos;t go anywhere',
]

const logistics = [
  { icon: Calendar, label: 'Duration', value: '4 consecutive weeks per cycle' },
  { icon: Clock, label: 'Session length', value: '40–50 minutes per week' },
  { icon: Users, label: 'Cohort size', value: '~4 classrooms per cycle' },
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
            <p className="text-center text-neutral-500 text-sm font-semibold tracking-widest uppercase mb-10">
              The experience arc
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', label: 'Awe', sub: 'A live encounter with something genuinely surprising' },
                { step: '02', label: 'Expression', sub: 'Students share their own story, in their own voice' },
                { step: '03', label: 'Reciprocity', sub: 'Engaging with peers across the world' },
                { step: '04', label: 'Connection', sub: 'Something that is felt, not just learned' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="font-display font-bold text-neutral-900 text-lg mb-1">{item.label}</div>
                  <div className="text-neutral-500 text-sm leading-snug">{item.sub}</div>
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
              <h2 className="display-md text-neutral-900 mb-6 text-balance">
                Not a pen-pal program. Not a one-off event.{' '}
                <span className="text-teal-500">Something new.</span>
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
                  weeks of live, 40–50 minute sessions. A trained Banyan facilitator
                  hosts every session, so your teacher shows up as a co-learner. The
                  curriculum does the heavy lifting. Your students do the connecting.
                </p>
                <p>
                  The result isn&apos;t a performance or a one-time cultural exchange.
                  It&apos;s a felt experience — students who leave the cycle saying
                  something like <em>"I actually talked to someone in another country,
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
                    <div className="font-display font-extrabold text-teal-600 text-2xl leading-none">40–50</div>
                    <div className="text-neutral-500 text-xs mt-0.5">min per session</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                    <div className="font-display font-extrabold text-teal-600 text-2xl leading-none">Live</div>
                    <div className="text-neutral-500 text-xs mt-0.5">human-facilitated</div>
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="order-1 lg:order-2">
                <p className="section-label mb-4">What a session looks like</p>
                <h2 className="display-md text-neutral-900 mb-6">
                  Your teacher shows up. Banyan handles the rest.
                </h2>
                <div className="space-y-5 text-neutral-700">
                  <p className="body-lg">
                    A Banyan facilitator opens the session live with an awe anchor —
                    something unexpected, beautiful, or hard to explain from somewhere
                    in the world. Students from multiple classrooms, in multiple
                    countries, experience it together.
                  </p>
                  <p className="body-md">
                    From there, the facilitator moves students through structured
                    exchange: sharing artifacts, asking questions of international
                    peers, building a real back-and-forth. Your teacher isn&apos;t
                    managing the room — they&apos;re participating alongside their
                    students.
                  </p>
                  <p className="body-md">
                    Between sessions, students complete a light artifact — a short
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
                      title: 'A 40–50 minute weekly slot',
                      body: "GLL fits into existing class time — it doesn't need a new period. English, social studies, advisory, and enrichment all work.",
                    },
                    {
                      title: 'Basic video conferencing',
                      body: 'Zoom, Google Meet, Teams — whatever your school already uses. No special technology required.',
                    },
                    {
                      title: 'A teacher willing to step back',
                      body: "The best GLL teachers trust the process and let students lead. The facilitator's job is to hold the space; the teacher's job is to participate.",
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
                Simple to understand. Easy to budget.
              </h2>
              <p className="body-md text-neutral-600">
                One flat rate per classroom per cycle. No hidden fees. No per-student
                licensing. Just connect, and go.
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
                      <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wide mb-1">
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
              <p className="text-neutral-500 text-sm mb-6">
                Includes all facilitation, curriculum, partner matching, and scheduling.
                Volume pricing available for schools running multiple classrooms.
              </p>
              <Link href="/contact?program=gll" className="btn btn-teal btn-lg">
                Request enrollment information
                <ArrowRight size={18} />
              </Link>
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
                  Something happens in that fourth session. You can see it on their
                  faces — they stop performing and start actually talking to each other.
                  That&apos;s rare.
                </p>
                <footer className="text-neutral-500 text-sm">
                  <strong className="text-neutral-700 not-italic">Pilot Program Teacher</strong>
                  {' '}— Early GLL Cohort, 2025
                </footer>
              </blockquote>

              <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                {[
                  { number: '15+', label: 'Years of global learning experience' },
                  { number: '20+', label: 'Countries represented' },
                  { number: '5,000+', label: 'Students impacted' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="stat-number text-teal-500">{stat.number}</div>
                    <div className="text-neutral-500 text-sm mt-1 max-w-[140px]">{stat.label}</div>
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
                17-year exclusive partnership with Tsai Hsing Elementary in Taipei.
              </h2>
              <p className="text-blue-100 body-lg mb-8">
                Since 2009, Banyan has delivered daily live sessions to Taipei
                students in grades 5–8. Over 5,000 students. CILC Pinnacle Award.
                Alumni at NYU, University of Washington, and Ohio State. GLL takes
                that model and makes it available to any school, anywhere.
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
                Cycles fill quickly. Reach out to learn about upcoming cohort dates,
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
