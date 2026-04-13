import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  BookOpen,
  Palette,
  Landmark,
  ScrollText,
  MapPin,
  Lightbulb,
  PenTool,
  MessageCircle,
  PartyPopper,
  Star,
  BarChart3,
  Clock,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Global Learning Live — IB Schools Landing Page
// Place at: src/app/programs/global-learning-live/ib/page.tsx
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Global Learning Live for IB Schools — MYP Curriculum Alignment',
  description:
    'Global Learning Live is a 4-week cross-cultural learning experience aligned to MYP Global Contexts, Key Concepts, and ATL Skills. Designed to fit inside existing IB class time with zero teacher prep.',
}

// ── Data ─────────────────────────────────────────────────────────────────────

const fourWeekArc = [
  {
    week: 'Week 1',
    title: 'Discover',
    description:
      'Students engage with curated cultural content and a driving question through facilitated discussion. Curiosity is sparked; the inquiry begins.',
    icon: Lightbulb,
    color: 'bg-teal-400',
  },
  {
    week: 'Week 2',
    title: 'Design',
    description:
      'Students develop an original creative response to the unit\u2019s big question through a structured design process.',
    icon: PenTool,
    color: 'bg-teal-500',
  },
  {
    week: 'Week 3',
    title: 'Exchange',
    description:
      'Partner classrooms share student work across countries. Students view, respond to, and reflect on each other\u2019s projects.',
    icon: MessageCircle,
    color: 'bg-teal-600',
  },
  {
    week: 'Week 4',
    title: 'Celebrate',
    description:
      'Students reflect on what they learned about themselves, their community, and their global partners.',
    icon: PartyPopper,
    color: 'bg-teal-700',
  },
]

const units = [
  {
    title: 'Festivals',
    timeline: 'Aug \u2013 Sep',
    question: 'How do communities celebrate who they are?',
    globalContexts: ['Personal & Cultural Expression', 'Identities & Relationships'],
    keyConcepts: ['Identity', 'Culture', 'Creativity', 'Communication'],
    bestFit: ['English / L&L', 'Social Studies / I&S', 'Art / Arts', 'Interdisciplinary'],
    icon: PartyPopper,
  },
  {
    title: 'Murals',
    timeline: 'Oct \u2013 Nov',
    question: 'What stories do communities paint on their walls \u2014 and why?',
    globalContexts: ['Personal & Cultural Expression', 'Identities & Relationships'],
    keyConcepts: ['Identity', 'Culture', 'Perspective', 'Creativity'],
    bestFit: ['Art / Arts (strongest)', 'Social Studies / I&S', 'English / L&L', 'Interdisciplinary'],
    icon: Palette,
  },
  {
    title: 'Local Legends',
    timeline: 'Feb \u2013 Mar',
    question: 'Whose stories shape our communities \u2014 and whose are missing?',
    globalContexts: ['Personal & Cultural Expression', 'Orientation in Space & Time'],
    keyConcepts: ['Identity', 'Culture', 'Perspective', 'Creativity'],
    bestFit: ['English / L&L (strongest)', 'Social Studies / I&S', 'Art / Arts', 'Interdisciplinary'],
    icon: ScrollText,
  },
  {
    title: 'Gathering Places',
    timeline: 'Apr \u2013 May',
    question: 'Why do people come together \u2014 and what do those spaces say about us?',
    globalContexts: ['Personal & Cultural Expression', 'Globalization & Sustainability'],
    keyConcepts: ['Identity', 'Culture', 'Creativity', 'Connections'],
    bestFit: ['Social Studies / I&S', 'Art / Arts', 'Tech / Design', 'English / L&L', 'Interdisciplinary'],
    icon: MapPin,
  },
]

const studentOutputs = [
  'Written reflections responding to the unit\u2019s driving question',
  'An original creative project',
  'AI-assisted visualizations that bring student concepts to life',
  'Recorded peer responses to partner classroom work',
  'End-of-unit reflections on cultural learning and personal growth',
]

const integrationPoints = [
  {
    icon: Clock,
    title: '~1 class period per week',
    body: 'Each unit runs four weeks. The entire GLL cycle fits into existing class time \u2014 no new period required.',
  },
  {
    icon: Globe,
    title: 'Maps to MYP Global Contexts & Key Concepts',
    body: 'Every unit connects directly to Global Contexts and Key Concepts your teachers are already addressing.',
  },
  {
    icon: BookOpen,
    title: 'Aligned MYP assessment criteria',
    body: 'GLL provides structured student work \u2014 reflections, creative designs, peer responses \u2014 that teachers can incorporate into their existing MYP assessment framework.',
  },
  {
    icon: Users,
    title: 'Facilitator-led model',
    body: 'Teachers don\u2019t need to design or deliver the cross-cultural component. Banyan\u2019s trained facilitators run every session.',
  },
  {
    icon: Landmark,
    title: 'Interdisciplinary unit ready',
    body: 'Every unit engages L&L, I&S, and Arts \u2014 naturally supporting a school\u2019s MYP interdisciplinary unit requirement.',
  },
  {
    icon: Sparkles,
    title: 'International-mindedness built in',
    body: 'Authentic cross-cultural exchange with real peers in other countries.',
  },
]

const pilotStats = [
  { number: '4.5/5', label: 'Student engagement score' },
  { number: '72%', label: 'Learned "a lot" about other cultures' },
  { number: '88%', label: 'Want to participate again' },
  { number: '10/10', label: 'Teacher recommendation score' },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GLLIBPage() {
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
                <span className="badge badge-white">IB Programme Aligned</span>
                <span className="text-teal-200 text-sm font-medium">Global Learning Live</span>
              </div>

              <h1 className="display-xl text-white text-balance mb-6">
                Cross-cultural inquiry{' '}
                <span className="text-teal-200">built for IB schools.</span>
              </h1>

              <p className="body-lg text-teal-100 mb-10 max-w-2xl">
                Global Learning Live is a structured 4-week program that connects your
                MYP classrooms to real peers in other countries through inquiry,
                creative production, and live virtual exchange. Aligned to Global
                Contexts, Key Concepts, and ATL Skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?service=global-learning-live" className="btn btn-white btn-xl">
                  Schedule a consultation
                  <ArrowRight size={20} />
                </Link>
                <Link href="#ib-alignment" className="btn btn-ghost btn-xl">
                  See IB alignment
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
        </section>

        {/* ── IB FRAMEWORK ALIGNMENT OVERVIEW ──────────────────────────── */}
        <section id="ib-alignment" className="bg-neutral-50 border-b border-neutral-200">
          <div className="container-site py-16">
            <p className="text-center text-neutral-600 text-sm font-semibold tracking-widest uppercase mb-10">
              MYP framework alignment
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
              {[
                { step: '01', label: 'Global Contexts', sub: 'Every unit maps to at least two MYP Global Contexts' },
                { step: '02', label: 'Key Concepts', sub: 'Identity, Culture, Creativity, Perspective, Communication, Connections' },
                { step: '03', label: 'ATL Skills', sub: 'Communication, Social, Self-management, and Thinking skills in every unit' },
                { step: '04', label: 'Subject Groups', sub: 'Language & Literature, Individuals & Societies, and Arts' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-sm flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="font-display font-bold text-neutral-900 text-lg mb-1">{item.label}</div>
                  <div className="text-neutral-600 text-sm leading-snug">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT IS GLL FOR IB ──────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="max-w-4xl mx-auto">
              <p className="section-label mb-4">Designed for IB</p>
              <h2 className="display-md text-neutral-900 mb-6">
                <span className="block">Inquiry-based. Cross-cultural.</span>
                <span className="block text-teal-500">Ready for your MYP classrooms.</span>
              </h2>
              <div className="space-y-5 body-lg text-neutral-700">
                <p>
                  GLL&apos;s core subject group connections are Language and Literature,
                  Individuals and Societies, and Arts. All units develop Communication,
                  Social, Self-management, and Thinking ATL skill categories.
                </p>
                <p>
                  Every GLL unit engages L&amp;L, I&amp;S, and Arts &mdash; naturally supporting
                  your school&apos;s MYP interdisciplinary unit requirement. Schools
                  required to complete at least one interdisciplinary unit per year can
                  use GLL as the inquiry-based, cross-cultural core of that unit.
                </p>
                <p>
                  A trained Banyan facilitator hosts every session. Teachers participate
                  alongside their students rather than planning or delivering the
                  cross-cultural component. One class period per week. Four weeks per
                  unit. That&apos;s the entire commitment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── THE 4-WEEK ARC ──────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">How each unit works</p>
              <h2 className="display-md text-neutral-900 mb-4">
                The 4-week instructional arc
              </h2>
              <p className="body-lg text-neutral-600">
                Each unit follows the same deliberate sequence &mdash; Discover, Design,
                Exchange, Celebrate &mdash; building from inquiry to genuine cross-cultural
                connection.
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

        {/* ── UNIT SEQUENCE WITH IB MAPPING ────────────────────────────── */}
        <section className="section-padding border-t border-neutral-200">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="section-label mb-4">School year units</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Four units. Each mapped to MYP.
              </h2>
              <p className="body-lg text-neutral-600">
                Schools can enter at any point in the sequence or select individual
                units. Each runs four weeks and maps directly to MYP Global Contexts
                and Key Concepts.
              </p>
            </div>

            <div className="space-y-6 max-w-5xl mx-auto">
              {units.map((unit, i) => {
                const Icon = unit.icon
                return (
                  <div key={i} className="card p-0 overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      {/* Left: unit identity */}
                      <div className="bg-teal-600 px-6 py-6 sm:w-72 sm:shrink-0 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon className="text-teal-200/70" size={18} />
                          <span className="text-teal-200 text-xs font-semibold tracking-widest uppercase">
                            {unit.timeline}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-white text-2xl mb-2">
                          {unit.title}
                        </h3>
                        <p className="text-teal-100 text-sm italic">
                          &ldquo;{unit.question}&rdquo;
                        </p>
                      </div>

                      {/* Right: IB mapping as simple rows */}
                      <div className="p-6 flex-1 divide-y divide-neutral-100">
                        <div className="pb-3">
                          <span className="text-sm text-neutral-500 font-semibold uppercase tracking-wide underline">Global Contexts</span>
                          <p className="text-base text-neutral-800 mt-0.5">{unit.globalContexts.join(' · ')}</p>
                        </div>
                        <div className="py-3">
                          <span className="text-sm text-neutral-500 font-semibold uppercase tracking-wide underline">Key Concepts</span>
                          <p className="text-base text-neutral-800 mt-0.5">{unit.keyConcepts.join(' · ')}</p>
                        </div>
                        <div className="pt-3">
                          <span className="text-sm text-neutral-500 font-semibold uppercase tracking-wide underline">Best-fit MYP classes</span>
                          <p className="text-base text-neutral-800 mt-0.5">{unit.bestFit.join(' · ')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── HOW IT INTEGRATES ────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">Integration</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Fits inside your existing MYP programme
              </h2>
              <p className="body-lg text-neutral-600">
                GLL slots into your existing MYP programme with minimal time
                commitment and maximum IB alignment. Your teachers keep doing what
                they do best &mdash; GLL adds the cross-cultural layer.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrationPoints.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="card p-6">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center mb-4">
                      <Icon className="text-teal-500" size={20} />
                    </div>
                    <h3 className="font-display font-bold text-neutral-900 text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── WHAT STUDENTS PRODUCE ────────────────────────────────────── */}
        <section className="section-padding">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="section-label mb-4">Student work</p>
                <h2 className="display-md text-neutral-900 mb-6">
                  Structured outputs aligned to MYP criteria
                </h2>
                <p className="body-lg text-neutral-700 mb-8">
                  Every unit generates work products that align with MYP assessment
                  criteria for Language and Literature, Individuals and Societies, and
                  Arts. Teachers receive structured artifacts &mdash; not loose
                  participation.
                </p>

                <ul className="space-y-4">
                  {studentOutputs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        className="text-teal-500 shrink-0 mt-0.5"
                        size={20}
                      />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IB alignment callout */}
              <div className="bg-teal-600 rounded-2xl p-8 text-white">
                <h3 className="font-display font-bold text-teal-100 uppercase tracking-wide text-sm mb-6">
                  ATL Skills developed in every unit
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: 'Communication',
                      body: 'Students express ideas through writing, visual design, and recorded responses shared with international peers.',
                    },
                    {
                      title: 'Social',
                      body: 'Authentic collaboration with students from different cultures and countries, facilitated in real time.',
                    },
                    {
                      title: 'Self-management',
                      body: 'Structured weekly tasks with clear deliverables that build responsibility and time management.',
                    },
                    {
                      title: 'Thinking',
                      body: 'Inquiry-driven engagement with big questions that require critical and creative thinking across cultural contexts.',
                    },
                  ].map((skill, i) => (
                    <div key={i} className="border-b border-teal-500/50 pb-5 last:border-0 last:pb-0">
                      <div className="font-display font-semibold text-white mb-1">{skill.title}</div>
                      <div className="text-teal-100 text-sm leading-relaxed">{skill.body}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PILOT RESULTS ────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-t border-neutral-200">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-8">Pilot results</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Spring 2026 Festivals Unit
              </h2>
              <p className="body-lg text-neutral-600 mb-12 max-w-xl mx-auto">
                Results from our first pilot cohort demonstrate strong engagement,
                cultural learning, and teacher satisfaction.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {pilotStats.map((stat, i) => (
                  <div key={i}>
                    <div className="stat-number text-teal-500">{stat.number}</div>
                    <div className="text-neutral-600 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <blockquote className="relative max-w-2xl mx-auto">
                <div className="text-7xl text-teal-200 font-serif leading-none mb-4">&ldquo;</div>
                <p className="display-sm text-neutral-800 font-medium italic mb-6 text-balance">
                  Perfect recommendation score, manageable workload. The students
                  were genuinely engaged with their international partners in a way I
                  haven&apos;t seen with other programs.
                </p>
                <footer className="text-neutral-600 text-sm">
                  <strong className="text-neutral-700 not-italic">Pilot Program Teacher</strong>
                  {' '}&mdash; Festivals Unit, March 2026
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── SCHOOL YEAR TIMELINE ─────────────────────────────────────── */}
        <section className="section-padding border-t border-neutral-200">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="section-label mb-4">Timeline</p>
              <h2 className="display-md text-neutral-900 mb-4">
                Full school year coverage
              </h2>
              <p className="body-lg text-neutral-600">
                Four units across the academic year. Enter at any point or select
                individual units that best fit your school&apos;s schedule.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {[
                { icon: PartyPopper, title: 'Festivals', period: 'Aug \u2013 Sep', color: 'bg-teal-400' },
                { icon: Palette, title: 'Murals', period: 'Oct \u2013 Nov', color: 'bg-teal-500' },
                { icon: ScrollText, title: 'Local Legends', period: 'Feb \u2013 Mar', color: 'bg-teal-600' },
                { icon: MapPin, title: 'Gathering Places', period: 'Apr \u2013 May', color: 'bg-teal-700' },
              ].map((unit, i) => {
                const Icon = unit.icon
                return (
                  <div key={i} className="card p-0 overflow-hidden text-center">
                    <div className={`${unit.color} px-4 py-5`}>
                      <Icon className="text-white/70 mx-auto mb-2" size={24} />
                      <div className="font-display font-bold text-white text-lg">{unit.title}</div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-center gap-2 text-neutral-600 text-sm">
                        <Calendar className="text-teal-500" size={14} />
                        {unit.period}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────── */}
        <section className="hero-gll section-padding">
          <div className="container-site">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="display-md text-white mb-5">
                Ready to bring GLL to your IB school?
              </h2>
              <p className="body-lg text-teal-100 mb-10">
                Whether you&apos;re looking for an interdisciplinary unit, an
                international-mindedness initiative, or a structured cross-cultural
                experience for your MYP students &mdash; GLL is built for this.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact?service=global-learning-live" className="btn btn-white btn-xl">
                  Schedule a consultation
                  <ArrowRight size={20} />
                </Link>
                <Link href="/programs/global-learning-live" className="btn btn-ghost btn-xl">
                  Back to GLL overview
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
