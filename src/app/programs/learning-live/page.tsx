import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  ArrowRight,
  MapPin,
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
    'Since 2008, Banyan has delivered daily live sessions to Tsai Hsing Elementary School in Taipei, Taiwan. Over 5,000 students and alumni at NYU, UW, and Ohio State.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { number: '17', suffix: ' years', label: 'of uninterrupted daily live sessions' },
  { number: '6,000', suffix: '+', label: 'students have moved through the program' },
  { number: '1 → 8', suffix: '', label: 'classrooms running synchronously, grown from a single pilot' },
  { number: '15', suffix: '', label: 'alumni universities: NYU, Georgetown, Northwestern — and more' },
]

const timeline = [
  {
    year: '2008',
    title: 'The Spark: One Classroom, One Camera.',
    body: 'Learning Live launches with a single 5th grade classroom in Taipei, connecting students to a live educator in the U.S. through nothing more than a camera and a shared passion for learning. A new model of global education is born.',
  },
  {
    year: '2009-2011',
    title: 'Expanding Across Grade Levels',
    body: 'Learning Live is added to Grades 6, 7, and 8, creating a comprehensive middle school program that builds students&apos; skills and confidence over multiple years.',
  },
  {
    year: '2010',
    title: 'First International Collaboration',
    body: 'Tsai Hsing students receive a special award at New York\'s Lego Robotics competition after collaborating with a team from Locust Valley High School. This marks the beginning of a series of international collaborations that become a hallmark of the program.',
  },
  {
    year: '2011',
    title: 'Pioneering Mobile Learning',
    body: 'As 4G technology expands in the U.S., Learning Live introduces real-time virtual field trips. Students explore the streets of L.A., engage with local artists, and witness the behind-the-scenes world of American culture. Learning becomes an adventure beyond the classroom walls.',
  },
  {
    year: '2014',
    title: 'Collaboration at Scale',
    body: 'The program expands to serve over 500 students across multiple grade levels. Banyan builds a robust curriculum aligned to linguistic, digital, and cultural competencies. Learning Live becomes a signature of Tsai Hsing\'s academic identity.',
  },
  {
    year: '2017',
    title: 'Expanding to Elementary Grades',
    body: 'Building on its success in middle school, Learning Live introduces the Bridges curriculum for Kindergarten through Grade 4, fostering curiosity and global awareness from a young age.',
  },
  {
    year: '2018',
    title: 'A Decade of Impact',
    body: 'Learning Live marks its 10th anniversary, having served over 2,000 students. Parents cite the program as a key factor in choosing Tsai Hsing. Students showcase their skills in international competitions and collaborations with elite schools like Menlo.',
  },
  {
    year: '2024',
    title: 'The Next Generation of Global Leaders',
    body: 'With eight classrooms and over 5,000 alumni, Learning Live reaches new heights. Graduates are accepted to prestigious universities such as NYU, University of Washington, and Ohio State, ready to thrive in a globalized world.',
  },
  {
    year: '2026',
    title: 'From Pioneering to Prove: The Birth of Global Learning Live',
    body: 'Building on 17 years of success at Tsai Hsing, Banyan launches Global Learning Live (GLL), making the Learning Live model accessible to schools worldwide. A groundbreaking partnership becomes a proven pathway to foster the skills, confidence, and perspective students need to lead in the 21st century.',
  },
]

const outcomes = [
  {
    icon: MessageCircle,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Confidence in English communication',
    body: 'Students develop the ability to speak English spontaneously and publicly — not just correctly. They present to international audiences, hold real-time discussions, and learn that communication is a relationship, not a performance.',
    detail: 'Tsai Hsing students regularly present to international audiences in English — a direct outcome of years of live, stakes-bearing exchange.',
  },
  {
    icon: Globe,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Cultural and global competency',
    body: 'The curriculum aligns with UN Sustainable Development Goals and brings students into cross-continental conversations on climate, identity, food, and place. They virtually explore jazz clubs in New Orleans and food carts in Mexico City — not as passive viewers, but as participants asking questions.',
    detail: 'Not cultural tourism — cultural relationship. Students build mental models of the world by talking to people who live in it.',
  },
  {
    icon: GraduationCap,
    color: 'text-gold-600',
    bg: 'bg-gold-50',
    title: 'Academic growth and lifelong impact',
    body: 'With high attendance, high participation, and high engagement, the outcomes of the Learning Live program can be seen long after the students leave the classroom. Alumni who go through Learning Live in 5th grade arrive at international universities with the confidence, communication skills, and global perspective their peers are still building.',
    detail: 'Alumni accepted to Northwestern, Georgetown, NYU, the University of Washington, and top international high schools and universities across Asia and the West.',
  },
]

const tsaiHsingImages = {
  schoolFront:
    'https://banyangloballearning.com/wp-content/uploads/2025/04/Screenshot-2025-04-03-at-1.16.18%E2%80%AFPM.png',
  classroom:
    'https://banyangloballearning.com/wp-content/uploads/2025/04/IMG_5294-scaled.jpeg',
}

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
                  Est. 2008 · Exclusive partnership · Not enrolling
                </span>
              </div>

              <h1 className="display-xl text-white text-balance mb-7 leading-[1.05]">
                Seventeen years.<br />
                One school.<br />
                <span className="text-amber-200">Five thousand students.</span>
              </h1>

              <p className="body-lg text-amber-100 mb-5 max-w-2xl">
                Since 2008, Banyan has delivered daily live virtual sessions to
                Tsai Hsing School in Taipei, Taiwan — one of the city&apos;s
                most esteemed private institutions. It is the longest
                running daily live virtual learning program in K–12 education.
              </p>
              <p className="body-md text-amber-200/80 max-w-2xl mb-12">
                This is what seventeen years of live, expert-facilitated global learning actually looks like.
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
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center gap-3 shrink-0 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <MapPin className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-300 text-xs font-semibold uppercase tracking-wide">Partner school</div>
                  <div className="text-white font-display font-semibold">Tsai Hsing School, Taipei, Taiwan</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <BookOpen className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-300 text-xs font-semibold uppercase tracking-wide">Founded</div>
                  <div className="text-white font-display font-semibold">1949 · Wenshan District</div>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                <div className="w-9 h-9 rounded-lg bg-gold-400/20 flex items-center justify-center">
                  <Users className="text-gold-400" size={17} />
                </div>
                <div>
                  <div className="text-amber-300 text-xs font-semibold uppercase tracking-wide">Partnership since</div>
                  <div className="text-white font-display font-semibold">2008 · Grades 5–8</div>
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
                    Tsai Hsing School: A Pioneer in Global Education
                  </h2>

                  <div className="space-y-5 body-md text-neutral-700">
                    <p>
                      Founded in 1949 in Taipei&apos;s Wenshan District, Tsai Hsing
                      School has long been recognized as one of the city&apos;s most
                      respected private institutions. Known for its commitment to
                      academic rigor and moral character development, Tsai Hsing has
                      consistently prepared students to become future leaders.
                    </p>
                    <p>
                      In the mid-2000s, the school&apos;s leadership recognized the
                      growing importance of English proficiency and digital skills in
                      the global education landscape. They sought to elevate the
                      school&apos;s English and global education program in a way that
                      no local hire could deliver.
                    </p>
                    <p>
                      The school realized that once students reached the middle grades,
                      their English level was sufficient for real-world practice, which
                      was crucial for advancing beyond classroom proficiency. If bringing
                      the classroom into the real world wasn&apos;t feasible, they
                      wondered, what if they did the next best thing?
                    </p>
                    <p className="font-medium text-neutral-900">
                      The result was a groundbreaking approach to learning.
                    </p>
                    <p>
                      In 2008, Tsai Hsing partnered with Banyan to create the first
                      Learning Live pilot in a single fifth-grade classroom. The program
                      offered daily, live virtual sessions with an expert educator, a
                      structured curriculum, and authentic international connections
                      built directly into the school day.
                    </p>
                    <p className="font-medium text-neutral-900">
                      The partnership quickly expanded to all middle grade levels and
                      continues to thrive today.
                    </p>
                  </div>
                </div>

                {/* Right — photo + parent signal */}
                <div className="space-y-5">
                  <div
                    className="rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-200 bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url('${tsaiHsingImages.classroom}')`,
                    }}
                  />

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
                The outcomes of Learning Live weren&apos;t just measured at the end of a
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
                Seventeen years<br />built one year at a time
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
                The students who went through this program are now in college and beyond.
              </h2>
              <p className="body-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
                The first cohort of Tsai Hsing students who learned English through
                Learning Live are now adults. Some arrived at prestigious universities. All of them arrived
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
                    backgroundImage: `url('${tsaiHsingImages.schoolFront}')`,
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
                  A school that helped build a new way of learning — and never looked back.
                </h2>
                <div className="space-y-5 body-md text-neutral-700">
                  <p>
                    Today, Learning Live runs across eight Tsai Hsing classrooms.
                    The partnership has become inseparable from the school&apos;s identity —
                    cited in enrollment conversations, featured in school marketing,
                    and returned to year-after-year
                    because students ask to come back.
                  </p>
                  <p>
                    The program delivered what Tsai Hsing had asked for in 2008:
                    students who could move
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
                    { icon: TrendingUp, label: 'Tsai Hsing enjoys enrollment at capacity' },
                    { icon: Lightbulb, label: 'Daily sessions, uninterrupted since 2008' },
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
                For schools seeking a more accessible entry point, we created Global Learning Live — a 4-week cohort program that distills the essential elements of that model: live facilitation, international peer connection, awe-driven experiences, and the discipline to let connection build over time.
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
