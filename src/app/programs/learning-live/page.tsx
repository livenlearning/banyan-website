import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  ArrowRight,
  MapPin,
  Award,
  Users,
  Globe,
  GraduationCap,
  MessageCircle,
  Lightbulb,
  TrendingUp,
  BookOpen,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Learning Live — Partnership Showcase Page
// Place at: src/app/programs/learning-live/page.tsx
//
// This is NOT a sales page. It is a proof page — 17 years of daily live
// sessions with Tsai Hsing Elementary School in Taipei, Taiwan.
// Visitor goal: understand the depth of Banyan's track record.
// Bridge: Learning Live is the model that Global Learning Live is built on.
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Learning Live — Banyan\'s 17-Year Taipei Partnership',
  description:
    'Since 2009, Banyan has delivered daily live sessions to Tsai Hsing Elementary School in Taipei, Taiwan. Over 5,000 students. CILC Pinnacle Award. Alumni at NYU, UW, and Ohio State.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { number: '17', suffix: ' years', label: 'of uninterrupted daily live sessions' },
  { number: '5,000', suffix: '+', label: 'students have moved through the program' },
  { number: '1 → 8', suffix: '', label: 'classrooms, grown from a single pilot' },
  { number: '3', suffix: '', label: 'alumni universities: NYU, UW, Ohio State — and more' },
]

const timeline = [
  {
    year: '2009',
    title: 'One classroom. One camera.',
    body: 'Banyan begins daily live sessions with a single Tsai Hsing classroom. Sessions run from a converted studio — no script, no precedent. Just a live educator, a class of fifth graders in Taipei, and a belief that connection could be built through a screen.',
  },
  {
    year: '2012',
    title: 'Expansion to three classrooms.',
    body: 'Word spreads within the school. Teachers request participation. The program expands to three classrooms across grade levels, and Banyan builds the curriculum infrastructure to support daily sessions at scale.',
  },
  {
    year: '2015',
    title: 'CILC Pinnacle Award.',
    body: 'The Center for Interactive Learning and Collaboration recognizes Learning Live with its Pinnacle Award — the highest distinction in virtual field trip and live distance learning programming.',
  },
  {
    year: '2019',
    title: 'Ten-year milestone. Five classrooms.',
    body: 'A decade in. The program has served over 2,000 students. Tsai Hsing marks the milestone as a signature part of its educational identity — cited by parents as a deciding factor in school choice.',
  },
  {
    year: '2024',
    title: 'Eight classrooms. Five thousand alumni.',
    body: 'The program reaches its largest scale yet. Alumni begin appearing at international universities. The first Tsai Hsing Learning Live graduates are accepted to NYU, the University of Washington, and Ohio State.',
  },
  {
    year: '2026',
    title: 'The model becomes Global Learning Live.',
    body: 'Banyan launches GLL — a program that takes the Learning Live model and makes it available to any school, anywhere. The product is different. The insight behind it is the same.',
  },
]

const outcomes = [
  {
    icon: MessageCircle,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Confidence in English communication',
    body: 'Students developed the ability to speak English spontaneously and publicly — not just correctly. They presented to international audiences, held real-time discussions, and learned that communication is a relationship, not a performance.',
    detail: 'Tsai Hsing students regularly present to international audiences in English — a direct outcome of years of live, stakes-bearing exchange.',
  },
  {
    icon: Globe,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Cultural and global competency',
    body: 'The curriculum aligned with UN Sustainable Development Goals and brought students into cross-continental conversations on climate, identity, food, and place. They virtually explored jazz clubs in New Orleans and food carts in Mexico City — not as passive viewers, but as participants asking questions.',
    detail: 'Not cultural tourism — cultural relationship. Students built mental models of the world by talking to people who live in it.',
  },
  {
    icon: GraduationCap,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Academic growth and lifelong impact',
    body: 'High attendance, high participation, and outcomes that outlasted the program itself. Alumni who went through Learning Live in 5th grade arrived at international universities with the confidence, communication skills, and global perspective their peers were still building.',
    detail: 'Alumni accepted to NYU, University of Washington, Ohio State, and top international high schools and universities across Asia and the West.',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function LearningLivePage() {
  return (
    <>
      <SiteHeader />

      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-ll relative overflow-hidden">
          {/* Texture */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Warm vignette */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background:
                'linear-gradient(to top, rgba(83,52,15,0.4), transparent)',
            }}
          />

          <div className="container-site relative z-10 py-24 lg:py-36">
            <div className="max-w-4xl">

              <div className="flex flex-wrap items-center gap-3 mb-7">
                <span className="badge badge-white">Learning Live</span>
                <span className="text-amber-100 text-sm font-medium">
                  Est. 2009 · Exclusive partnership · Not enrolling
                </span>
              </div>

              <h1 className="display-xl text-white text-balance mb-7 leading-[1.05]">
                Seventeen years.<br />
                One school.<br />
                <span className="text-amber-200">Five thousand students.</span>
              </h1>

              <p className="body-lg text-amber-100 mb-5 max-w-2xl">
                Since 2009, Banyan has delivered daily live virtual sessions to
                Tsai Hsing Elementary School in Taipei, Taiwan — one of the city&apos;s
                most esteemed private institutions. It is the longest continuously
                running live virtual learning program in K–12 education.
              </p>
              <p className="body-md text-amber-200/80 max-w-2xl mb-12">
                This page is not a sales page. It is a record of what happens when
                live, expert-facilitated global learning is given seventeen years to
                prove itself.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#story" className="btn btn-white btn-xl">
                  Read the story
                  <ArrowRight size={20} />
                </Link>
                <Link href="/programs/global-learning-live" className="btn btn-xl border border-white/40 text-white hover:bg-white/10">
                  See Global Learning Live
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* ── PARTNER PROFILE BAND ──────────────────────────────────────── */}
        <section className="bg-amber-950 border-b border-amber-900">
          <div className="container-site py-10">
            <div className="flex flex-wrap items-center gap-10 lg:gap-16">
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <MapPin className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-500 text-xs font-semibold uppercase tracking-wide">Partner school</div>
                  <div className="text-white font-display font-semibold">Tsai Hsing Elementary, Taipei, Taiwan</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <BookOpen className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-500 text-xs font-semibold uppercase tracking-wide">Founded</div>
                  <div className="text-white font-display font-semibold">1949 · Wenshan District</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <Award className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-500 text-xs font-semibold uppercase tracking-wide">Recognition</div>
                  <div className="text-white font-display font-semibold">CILC Pinnacle Award Winner</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <Users className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-500 text-xs font-semibold uppercase tracking-wide">Partnership since</div>
                  <div className="text-white font-display font-semibold">2009 · Grades 5–8</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE ────────────────────────────────────────────────── */}
        <section className="bg-neutral-950 section-padding">
          <div className="container-site">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="font-serif text-8xl leading-none mb-8"
                style={{ color: '#e5a025', opacity: 0.4 }}
              >
                &ldquo;
              </div>
              <blockquote>
                <p
                  className="font-display font-bold text-balance text-white leading-tight mb-10"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em' }}
                >
                  Our students didn&apos;t just learn English — they learned to use it,
                  to think critically, and to engage with the world.
                  It transformed their confidence.
                </p>
                <footer>
                  <div className="inline-flex items-center gap-4">
                    <div className="h-px w-12 bg-gold-400/40" />
                    <div className="text-center">
                      <div className="text-gold-400 font-semibold text-sm">Tsai Hsing School Administrator</div>
                      <div className="text-neutral-500 text-xs mt-0.5">Taipei, Taiwan · Learning Live Partnership</div>
                    </div>
                    <div className="h-px w-12 bg-gold-400/40" />
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── IMPACT STATS ─────────────────────────────────────────────── */}
        <section className="bg-neutral-900 border-y border-neutral-800 py-16">
          <div className="container-site">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="font-display font-extrabold leading-none mb-2"
                    style={{
                      fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                      background: 'linear-gradient(135deg, #edbc4e, #e5a025)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.number}
                    <span style={{ fontSize: '0.6em' }}>{stat.suffix}</span>
                  </div>
                  <div className="text-neutral-400 text-sm leading-snug max-w-[180px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE STORY ────────────────────────────────────────────────── */}
        <section id="story" className="section-padding bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left — narrative */}
              <div>
                <p className="section-label mb-4">The story</p>
                <h2 className="display-md text-neutral-900 mb-7">
                  A school that needed something the market couldn&apos;t give it.
                </h2>

                <div className="space-y-5 body-md text-neutral-700">
                  <p>
                    Tsai Hsing Elementary School was founded in 1949 in the Wenshan
                    District of Taipei, Taiwan. For decades, it held a place among
                    the city&apos;s most respected private institutions — known for
                    academic rigor, character education, and a bilingual emphasis that
                    set its students apart.
                  </p>
                  <p>
                    In the early 2010s, the school faced a challenge familiar to
                    many institutions: a period of over-investment in athletics had
                    created a reputational drift from its academic identity. Leadership
                    wanted to restore the school&apos;s core distinction — and elevate
                    its English and global education program in a way that no local
                    hire could deliver.
                  </p>
                  <p>
                    The conventional answer — bring in expat teachers — had already
                    proven inconsistent. Cultural gaps, high turnover, and the absence
                    of a sustained curriculum meant results that varied year to year.
                    What Tsai Hsing wanted wasn&apos;t better instruction. It was a
                    different kind of learning entirely.
                  </p>
                  <p>
                    In 2009, Banyan proposed Learning Live: daily, live virtual
                    sessions with a trained educator, a structured curriculum, and
                    real international connection built directly into the school day.
                    Not a tool. Not a vendor. A partner.
                  </p>
                  <p className="font-medium text-neutral-900">
                    Tsai Hsing said yes. That partnership is still running today.
                  </p>
                </div>
              </div>

              {/* Right — photo + credential */}
              <div className="space-y-5">
                {/* Main photo */}
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: "url('https://picsum.photos/seed/taipei-classroom/800/600')",
                  }}
                />

                {/* CILC Award callout */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center shrink-0">
                    <Award className="text-white" size={22} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-neutral-900 text-base mb-1">
                      CILC Pinnacle Award
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      The Center for Interactive Learning and Collaboration awarded
                      Learning Live its Pinnacle Award — the highest distinction in
                      live distance learning programming in K–12 education.
                    </p>
                  </div>
                </div>

                {/* Parent signal */}
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                  <p className="text-neutral-600 text-sm italic leading-relaxed mb-3">
                    &ldquo;Parents cite Learning Live as a key factor in choosing Tsai Hsing.
                    It is now marketed by the school as a signature element of its
                    educational offering.&rdquo;
                  </p>
                  <div className="text-neutral-400 text-xs">
                    — From the Tsai Hsing case study, 2025
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── OUTCOMES ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">What the program produced</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Three kinds of lasting change
              </h2>
              <p className="body-lg text-neutral-600">
                The outcomes of Learning Live weren&apos;t measured at the end of a
                semester. They compounded over years — visible in alumni university
                placements, parent enrollment decisions, and students who arrived at
                international settings already knowing how to show up in the world.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {outcomes.map((outcome, i) => {
                const Icon = outcome.icon
                return (
                  <div key={i} className="card p-0 overflow-hidden flex flex-col">
                    {/* Gold accent bar */}
                    <div className="h-1 w-full bg-gold-400" />
                    <div className="p-7 flex-1 flex flex-col">
                      <div className={`w-11 h-11 rounded-xl ${outcome.bg} flex items-center justify-center mb-5`}>
                        <Icon className={outcome.color} size={21} />
                      </div>
                      <h3 className="font-display font-bold text-neutral-900 text-lg mb-3">
                        {outcome.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-1">
                        {outcome.body}
                      </p>
                      <div className="pt-5 border-t border-neutral-100">
                        <p className="text-neutral-500 text-xs leading-relaxed italic">
                          {outcome.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="section-label mb-4">The timeline</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Seventeen years, built one year at a time
              </h2>
              <p className="body-md text-neutral-600">
                There&apos;s no shortcut to a 17-year track record. This is how it
                was built.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[22px] top-6 bottom-6 w-px bg-gold-200 hidden sm:block" />

                <div className="space-y-0">
                  {timeline.map((item, i) => (
                    <div key={i} className="relative flex gap-8 pb-10 last:pb-0">
                      {/* Year node */}
                      <div className="flex flex-col items-center shrink-0 hidden sm:flex">
                        <div className="w-11 h-11 rounded-full bg-gold-400 border-4 border-white shadow flex items-center justify-center z-10">
                          <div className="w-2.5 h-2.5 rounded-full bg-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-2">
                        <div
                          className="inline-block font-display font-extrabold text-sm mb-2 px-3 py-1 rounded-full"
                          style={{ background: '#fdf6e3', color: '#83520f' }}
                        >
                          {item.year}
                        </div>
                        <h3 className="font-display font-bold text-neutral-900 text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {item.body}
                        </p>
                        {i < timeline.length - 1 && (
                          <div className="mt-8 border-b border-neutral-100 sm:hidden" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ALUMNI CALLOUT ────────────────────────────────────────────── */}
        <section className="bg-neutral-950 py-20">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-2xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="text-gold-400" size={26} />
              </div>
              <h2 className="display-md text-white mb-5">
                The students who went through this program are now in college.
              </h2>
              <p className="body-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                The first cohort of Tsai Hsing students who learned English through
                Learning Live are now adults. Some arrived at NYU. Some at the
                University of Washington. Some at Ohio State. All of them arrived
                already knowing how to talk to people who aren&apos;t like them — which
                is the skill the program was designed to build.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {['New York University', 'University of Washington', 'Ohio State University'].map((uni, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 rounded-full border border-neutral-700 bg-neutral-900"
                  >
                    <span className="text-neutral-300 text-sm font-medium">{uni}</span>
                  </div>
                ))}
                <div className="px-5 py-3 rounded-full border border-gold-800/50 bg-gold-900/20">
                  <span className="text-gold-400 text-sm font-medium">
                    + international high schools &amp; universities across Asia and the West
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TSAI HSING TODAY ──────────────────────────────────────────── */}
        <section className="section-padding bg-white border-t border-neutral-100">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left — photo */}
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 bg-cover bg-center shadow-lg"
                  style={{
                    backgroundImage: "url('https://picsum.photos/seed/taipei-school/800/600')",
                  }}
                />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-gold-400 text-white rounded-xl shadow-lg px-5 py-4">
                  <div className="font-display font-extrabold text-3xl leading-none">8</div>
                  <div className="text-gold-100 text-xs mt-0.5">classrooms today</div>
                </div>
              </div>

              {/* Right — copy */}
              <div>
                <p className="section-label mb-4">Tsai Hsing today</p>
                <h2 className="display-md text-neutral-900 mb-6">
                  A school that reclaimed its distinction — and never looked back.
                </h2>
                <div className="space-y-5 body-md text-neutral-700">
                  <p>
                    Today, Learning Live runs across eight Tsai Hsing classrooms.
                    The partnership has become inseparable from the school&apos;s identity —
                    cited in enrollment conversations, featured in school marketing,
                    and returned to year after year not because of inertia, but
                    because students ask to come back.
                  </p>
                  <p>
                    The program delivered what Tsai Hsing had asked for in 2009:
                    not better English instruction, but students who could move
                    through the world with confidence, curiosity, and the capacity
                    to connect across difference.
                  </p>
                  <p className="font-medium text-neutral-900">
                    Seventeen years later, that mission is still running.
                    Every school day. Live.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-6">
                  {[
                    { icon: TrendingUp, label: 'Enrollment growth attributed to the program' },
                    { icon: Lightbulb, label: 'Daily sessions, uninterrupted since 2009' },
                    { icon: Users, label: 'Parents cite it as a key school-choice factor' },
                  ].map((item, i) => {
                    const Icon = item.icon
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold-50 flex items-center justify-center shrink-0">
                          <Icon className="text-gold-600" size={15} />
                        </div>
                        <span className="text-neutral-600 text-sm">{item.label}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BRIDGE TO GLL ─────────────────────────────────────────────── */}
        <section className="hero-ll relative overflow-hidden section-padding">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="container-site relative z-10">
            <div className="max-w-3xl mx-auto text-center">

              <div className="inline-flex items-center gap-2 bg-black/20 border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-amber-300" />
                <span className="text-amber-100 text-sm font-medium">
                  The model, now available to your school
                </span>
              </div>

              <h2 className="display-md text-white mb-6 text-balance">
                We spent 17 years figuring out what sustained global learning actually looks like.
              </h2>
              <p className="body-lg text-amber-100 mb-5 max-w-2xl mx-auto">
                Global Learning Live is what we built from it. A 4-week cohort program
                that takes the same model — live facilitation, international peer
                connection, awe-driven experience, and the discipline to let connection
                build over time — and makes it available to any school, anywhere.
              </p>
              <p className="text-amber-200/70 text-sm mb-12">
                It is not the same product. But it is the same insight.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/programs/global-learning-live" className="btn btn-white btn-xl">
                  Explore Global Learning Live
                  <ArrowRight size={20} />
                </Link>
                <Link href="/contact?program=gll" className="btn btn-xl border border-white/40 text-white hover:bg-white/10">
                  Enroll your classroom
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
