import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  ArrowRight,
  Globe,
  Shield,
  Heart,
  Video,
  Clock,
  Star,
  CalendarCheck,
  Sparkles,
  Users,
  CheckCircle2,
  PlayCircle,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Virtual Field Trips — Program Page
// Place at: src/app/programs/virtual-field-trips/page.tsx
//
// Three content pillars: Global Citizenship · Digital Citizenship · SEL
// Pricing: ~$300 per session
// Format: single live sessions, any grade level, 40–60 min
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Live Virtual Field Trips — Global Citizenship, Digital Citizenship & SEL',
  description:
    'Expert-guided live virtual programs for K–12 classrooms. Global Citizenship, Digital Citizenship, and Social-Emotional Learning — single sessions, no long-term commitment, $300/session.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    id: 'global-citizenship',
    icon: Globe,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
    accent: 'bg-teal-400',
    badge: 'Global Citizenship',
    badgeClass: 'badge-teal',
    heading: 'Put your students\u2019 feet on the ground — from their desks.',
    body: 'Our global citizenship programs bring students into real places, real celebrations, and real conversations with the world. Not a video tour. A live guide, live questions, and live discovery.',
    series: [
      {
        name: 'Lunar New Year in Taipei, Taiwan',
        parts: '3-part series',
        audience: 'Grades 3–8',
        description:
          'Students travel live to Taipei\'s vibrant night markets, navigate the city in a "choose your own adventure" style, and celebrate Lunar New Year traditions with an expert guide on the ground. Along the way, they pick up Mandarin phrases, explore food and entertainment, and travel together across the Pacific — without leaving their classroom.',
        highlights: [
          'Live exploration of two Taipei night markets',
          'Lunar New Year traditions explained from the source',
          'Choose-your-own-adventure city navigation',
          'Introduction to Mandarin language and culture',
        ],
      },
    ],
    ctaLabel: 'Book a Global Citizenship session',
    note: 'New global destinations added regularly. Contact us to see what\u2019s currently available.',
  },
  {
    id: 'digital-citizenship',
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    accent: 'bg-blue-600',
    badge: 'Digital Citizenship',
    badgeClass: 'badge-blue',
    heading: 'The most important skill your students will practice this week isn\u2019t academic.',
    body: 'Our Digital Citizenship programs meet students where they are — in the digital world they already live in — and give them the judgment, habits, and empathy to navigate it well. Two complete series, differentiated by age.',
    series: [
      {
        name: 'Digital Citizenship for Young Learners',
        parts: 'Complete series · Pre-K–Grade 4',
        audience: 'Pre-K–Grade 4',
        description:
          'A fun, interactive series built around a crew of puppet friends from Digitopolis. Students guide their new friends through real-world digital dilemmas — including what happens when Dude posts an embarrassing photo of a friend as a joke. Rooted in the Zones of Regulation framework, this series builds practical digital judgment through story, problem-solving, and live discussion.',
        highlights: [
          'Puppet-based storytelling for genuine engagement',
          'Grounded in Zones of Regulation (Leah Kuypers, MA.Ed.)',
          'Covers privacy, consent, and online kindness',
          'Age-appropriate scenarios with real decision moments',
        ],
      },
      {
        name: 'Digital Citizenship for Junior High',
        parts: 'Complete series · Grades 6–8',
        audience: 'Grades 6–8',
        description:
          'A more sophisticated look at the digital world built for students who are already immersed in it. This series goes beyond "don\'t share passwords" — it addresses online identity, the permanence of digital actions, peer dynamics on social platforms, and the ethical weight of what students post, share, and say. Designed for the age when it matters most.',
        highlights: [
          'Online identity and digital reputation',
          'Peer dynamics and social platform ethics',
          'Permanence of digital actions',
          'Designed specifically for the middle school moment',
        ],
      },
    ],
    ctaLabel: 'Book a Digital Citizenship session',
    note: 'Both series can be booked as individual sessions or as a complete multi-part program.',
  },
  {
    id: 'sel',
    icon: Heart,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    accent: 'bg-gold-400',
    badge: 'Social-Emotional Learning',
    badgeClass: 'badge-gold',
    heading: 'Students can\u2019t learn what they can\u2019t regulate.',
    body: 'Our SEL programs give students the emotional vocabulary, self-awareness, and interpersonal tools they need to thrive — in your classroom and beyond it. Built by educators and performers who understand how to reach kids.',
    series: [
      {
        name: 'Social Emotional Superheroes',
        parts: '3-episode series',
        audience: 'Grades K–5',
        description:
          'Originally created during the pandemic to meet students in one of the most emotionally difficult moments in recent education history, Social Emotional Superheroes has grown into one of our most-requested programs. Students discover that real superheroes aren\'t defined by what they can do — but by what they can feel, understand, and choose. Three episodes, each building on the last.',
        highlights: [
          'Episode 1: Knowing your own emotions and returning to the green zone',
          'Episode 2: Seeing through others\u2019 eyes \u2014 empathy as a superpower',
          'Episode 3: Making choices that are good for you and for others',
          'Created by educators and performers for genuine student connection',
        ],
      },
    ],
    ctaLabel: 'Book a Social Emotional Superheroes session',
    note: 'Each episode works as a standalone or as a progressive series. Many teachers run all three across consecutive weeks.',
  },
]

const howItWorks = [
  {
    step: '01',
    icon: CalendarCheck,
    title: 'Choose your program',
    body: 'Pick a content area and series. Tell us your grade level, class size, and preferred dates.',
  },
  {
    step: '02',
    icon: Video,
    title: 'We handle everything',
    body: "Banyan's expert educators prepare and host your session. You show up as a co-learner — no lesson planning required.",
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Your students go somewhere',
    body: 'Live, interactive, and impossible to replicate with a YouTube video. Students ask real questions and get real answers.',
  },
]

const logistics = [
  { icon: Clock, label: 'Session length', value: '40–60 minutes' },
  { icon: Users, label: 'Class size', value: 'Standard classroom (up to 35)' },
  { icon: Star, label: 'Grade levels', value: 'Pre-K through Grade 8' },
  { icon: Video, label: 'Platform', value: 'Zoom, Google Meet, or Teams' },
  { icon: CalendarCheck, label: 'Booking window', value: 'As little as 2 weeks out' },
  { icon: PlayCircle, label: 'Price', value: '~$300 per session' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VirtualFieldTripsPage() {
  return (
    <>
      <SiteHeader />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-main relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          <div className="container-site relative z-10 py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* Left — copy */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="badge badge-white">Virtual Field Trips</span>
                  <span className="text-blue-200 text-sm font-medium">Book a single session</span>
                </div>

                <h1 className="display-xl text-white text-balance mb-6">
                  Expert-guided.{' '}
                  <span className="text-gradient-gold">Live.</span>{' '}
                  Today.
                </h1>

                <p className="body-lg text-blue-100 mb-10 max-w-xl">
                  Live virtual programs that take your students somewhere real — to
                  celebrate Lunar New Year in Taipei, to navigate the ethics of online
                  life, or to discover their own emotional superpowers. One session.
                  No long-term commitment. Just a great class period.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact?program=vft" className="btn btn-gold btn-xl">
                    Book a session
                    <ArrowRight size={20} />
                  </Link>
                  <Link href="#programs" className="btn btn-ghost btn-xl">
                    See all programs
                  </Link>
                </div>
              </div>

              {/* Right — three pillars preview */}
              <div className="grid gap-4">
                {[
                  {
                    icon: Globe,
                    color: 'text-teal-300',
                    bg: 'bg-teal-900/40',
                    border: 'border-teal-700/50',
                    label: 'Global Citizenship',
                    example: 'Lunar New Year in Taipei, Taiwan',
                  },
                  {
                    icon: Shield,
                    color: 'text-blue-300',
                    bg: 'bg-blue-900/40',
                    border: 'border-blue-700/50',
                    label: 'Digital Citizenship',
                    example: 'Two complete series: Young Learners & Junior High',
                  },
                  {
                    icon: Heart,
                    color: 'text-gold-300',
                    bg: 'bg-gold-900/20',
                    border: 'border-gold-700/40',
                    label: 'Social-Emotional Learning',
                    example: 'Social Emotional Superheroes — 3-episode series',
                  },
                ].map((pillar, i) => {
                  const Icon = pillar.icon
                  return (
                    <div
                      key={i}
                      className={`flex items-center gap-4 rounded-xl border ${pillar.border} ${pillar.bg} px-5 py-4 backdrop-blur-sm`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className={pillar.color} size={19} />
                      </div>
                      <div>
                        <div className="text-white font-display font-semibold text-sm">
                          {pillar.label}
                        </div>
                        <div className="text-blue-300/70 text-xs mt-0.5">{pillar.example}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
        <section className="bg-neutral-50 border-b border-neutral-200 py-16">
          <div className="container-site">
            <p className="text-center text-neutral-500 text-xs font-semibold tracking-widest uppercase mb-12">
              How it works
            </p>
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {howItWorks.map((step, i) => {
                const Icon = step.icon
                return (
                  <div key={i} className="text-center">
                    <div className="relative inline-flex mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">
                        <Icon className="text-white" size={22} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center">
                        <span className="text-white text-[10px] font-bold leading-none">{i + 1}</span>
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-neutral-900 text-base mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── THREE PILLARS ─────────────────────────────────────────────── */}
        <div id="programs">

          {pillars.map((pillar, pillarIndex) => {
            const PillarIcon = pillar.icon
            const isEven = pillarIndex % 2 === 0

            return (
              <section
                key={pillar.id}
                id={pillar.id}
                className={`section-padding border-b border-neutral-200 ${isEven ? 'bg-white' : 'bg-neutral-50'}`}
              >
                <div className="container-site">

                  {/* Pillar header */}
                  <div className="flex items-start gap-5 mb-12 pb-10 border-b border-neutral-200">
                    <div className={`w-14 h-14 rounded-2xl ${pillar.bg} flex items-center justify-center shrink-0`}>
                      <PillarIcon className={pillar.color} size={26} />
                    </div>
                    <div className="max-w-3xl">
                      <span className={`badge ${pillar.badgeClass} mb-3`}>{pillar.badge}</span>
                      <h2 className="display-sm text-neutral-900 mb-3">
                        {pillar.heading}
                      </h2>
                      <p className="body-lg text-neutral-600">{pillar.body}</p>
                    </div>
                  </div>

                  {/* Series cards */}
                  <div className={`grid ${pillar.series.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl'} gap-6 mb-8`}>
                    {pillar.series.map((series, seriesIndex) => (
                      <div key={seriesIndex} className="card overflow-hidden">
                        {/* Accent bar */}
                        <div className={`h-1 w-full ${pillar.accent}`} />
                        <div className="p-7">
                          {/* Series label */}
                          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                            <div>
                              <h3 className="font-display font-bold text-neutral-900 text-xl leading-tight mb-1">
                                {series.name}
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                <span className="badge badge-neutral">{series.parts}</span>
                                <span className="badge badge-neutral">{series.audience}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                            {series.description}
                          </p>

                          {/* Highlights */}
                          <ul className="space-y-2.5">
                            {series.highlights.map((h, hi) => (
                              <li key={hi} className="flex items-start gap-3">
                                <CheckCircle2
                                  className={`shrink-0 mt-0.5 ${pillar.color}`}
                                  size={15}
                                />
                                <span className="text-neutral-600 text-sm">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pillar CTA + note */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
                    <p className="text-neutral-400 text-sm italic max-w-lg">{pillar.note}</p>
                    <Link
                      href={`/contact?program=vft&pillar=${pillar.id}`}
                      className="btn btn-primary btn-md shrink-0"
                    >
                      {pillar.ctaLabel}
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                </div>
              </section>
            )
          })}

        </div>

        {/* ── LOGISTICS + PRICING ──────────────────────────────────────── */}
        <section className="section-padding bg-neutral-900">
          <div className="container-site">
            <div className="text-center max-w-xl mx-auto mb-14">
              <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
                Logistics &amp; pricing
              </p>
              <h2 className="display-md text-white mb-4">
                One great class period.{' '}
                <span className="text-gradient-gold">One simple price.</span>
              </h2>
              <p className="text-neutral-400 body-md">
                No subscriptions. No per-student licensing. No setup fees.
                Just book, show up, and let your students go somewhere.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-12">
              {logistics.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-xl border border-neutral-700 bg-neutral-800/50 p-5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-900/60 flex items-center justify-center shrink-0">
                      <Icon className="text-blue-400" size={17} />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wide mb-1">
                        {item.label}
                      </div>
                      <div className="font-display font-bold text-white text-base">
                        {item.value}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Price callout */}
            <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-700 bg-neutral-800/40 p-8 text-center">
              <div
                className="font-display font-extrabold leading-none mb-2"
                style={{
                  fontSize: '3.5rem',
                  background: 'linear-gradient(135deg, #edbc4e, #e5a025)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ~$300
              </div>
              <div className="text-neutral-300 font-medium text-lg mb-1">per session</div>
              <p className="text-neutral-500 text-sm mb-8 max-w-md mx-auto">
                Multi-session and full-series discounts available. Schools
                booking three or more sessions receive volume pricing.
              </p>
              <Link href="/contact?program=vft" className="btn btn-gold btn-lg">
                Check availability and book
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF / WHAT TEACHERS SAY ─────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <p className="section-label text-center mb-10">What makes these different</p>

              <div className="grid sm:grid-cols-3 gap-6 mb-16">
                {[
                  {
                    title: 'Live, not recorded',
                    body: 'Students ask real questions and get real answers in real time. The unpredictability is the point.',
                  },
                  {
                    title: 'Expert-facilitated',
                    body: "Every session is guided by a Banyan educator who knows the content and knows how to hold a live room full of kids.",
                  },
                  {
                    title: 'No prep required',
                    body: 'We provide everything. Open the video call, introduce the session, and watch your students go.',
                  },
                ].map((item, i) => (
                  <div key={i} className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                    <h3 className="font-display font-bold text-neutral-900 text-base mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>

              {/* 15-year credibility line */}
              <div className="text-center">
                <p className="body-md text-neutral-500">
                  Built on 15+ years of live virtual programming experience —
                  the same practitioner depth behind Banyan&apos;s{' '}
                  <Link href="/programs/learning-live" className="text-blue-600 hover:underline font-medium">
                    17-year Taipei partnership
                  </Link>{' '}
                  and{' '}
                  <Link href="/programs/global-learning-live" className="text-teal-500 hover:underline font-medium">
                    Global Learning Live
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="hero-main section-padding">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="display-md text-white mb-5">
                Ready to take your class somewhere?
              </h2>
              <p className="body-lg text-blue-100 mb-10">
                Sessions book as little as two weeks out. Tell us your grade
                level, content area, and preferred dates — and we&apos;ll match
                you with the right program.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact?program=vft" className="btn btn-gold btn-xl">
                  Book a session — $300
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
