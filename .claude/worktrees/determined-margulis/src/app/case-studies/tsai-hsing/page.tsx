import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Award,
  Globe,
  GraduationCap,
  Users,
  BookOpen,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tsai Hsing School × Banyan Learning Live — Case Study',
  description:
    'How a 17-year partnership between Banyan Global Learning and Tsai Hsing School in Taipei transformed English education, boosted student confidence, and produced graduates accepted to NYU, UW, and Ohio State.',
}

const stats = [
  { value: '17', label: 'Years of unbroken partnership', suffix: 'yrs' },
  { value: '5,000+', label: 'Students served through Learning Live', suffix: '' },
  { value: '1 → 8', label: 'Classrooms scaled over the partnership', suffix: '' },
]

const outcomes = [
  {
    icon: Users,
    title: 'Confidence in English Communication',
    color: 'bg-[#1ca59d]/10',
    iconColor: 'text-[#1ca59d]',
    description:
      'By embedding English in real-world content and global themes, students improved fluency in meaningful contexts — not worksheets. Over time, they began speaking with confidence even in spontaneous, unscripted settings.',
    bullets: [
      'Improved spontaneous conversation and public speaking skills',
      'Students regularly present to international audiences',
    ],
  },
  {
    icon: Globe,
    title: 'Cultural and Global Competency',
    color: 'bg-[#0e4a83]/10',
    iconColor: 'text-[#0e4a83]',
    description:
      "Banyan's storytelling curriculum and Field Trip Live experiences grounded learning in real-world cultural issues. Whether virtually exploring jazz clubs in New Orleans or food carts in Mexico City, students gained authentic global exposure.",
    bullets: [
      'Curriculum aligned to UN Sustainable Development Goals',
      'Cross-continental student collaborations on climate change, identity, and more',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Academic Growth and Lifelong Impact',
    color: 'bg-[#e5a025]/10',
    iconColor: 'text-[#e5a025]',
    description:
      'Learning Live became one of the most beloved parts of the school day, with high attendance and participation. Graduates gained admission to top international universities, citing the program as foundational.',
    bullets: [
      'Program scaled from 1 to 8 classrooms over the partnership',
      'Alumni accepted to NYU, University of Washington, Ohio State, and more',
    ],
  },
]

const timeline = [
  { year: '2009', event: 'Partnership begins with one classroom and one camera. First live connection between Tsai Hsing students and a Banyan facilitator.' },
  { year: '2012', event: 'Program expands from 1 to 3 classrooms. Curriculum evolves to include project-based global themes aligned to UN SDGs.' },
  { year: '2015', event: 'Banyan Global Learning receives the CILC Pinnacle Award for excellence in distance learning, with Tsai Hsing as a key proof point.' },
  { year: '2019', event: 'Program scales to 8 classrooms across grades K–9. First alumni begin enrolling at international universities.' },
  { year: '2024', event: 'Over 5,000 students have participated in Learning Live. Partnership enters its 15th consecutive year.' },
  { year: '2026', event: 'Banyan launches Global Learning Live (GLL) — a scalable version of the Tsai Hsing model — for classrooms worldwide.' },
]

export default function TsaiHsingCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-ll py-24 lg:py-32">
          <div className="container-site">

            {/* Breadcrumb */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-yellow-200 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All case studies
            </Link>

            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="badge badge-gold">Learning Live</span>
                <span className="badge text-white border-white/30" style={{ background: 'rgba(255,255,255,0.15)' }}>
                  Private K–12 School · Taipei, Taiwan
                </span>
              </div>
              <h1 className="display-xl text-white mb-6 leading-tight">
                17 years.{' '}
                <span className="text-white/90">5,000 students.</span>{' '}
                <br className="hidden lg:block" />
                One enduring partnership.
              </h1>
              <p className="text-xl text-yellow-100 leading-relaxed">
                How Tsai Hsing School in Taipei transformed its English education, restored its
                academic reputation, and produced graduates who go on to global universities —
                through a single, sustained partnership with Banyan Global Learning.
              </p>
            </div>
          </div>
        </section>

        {/* ── Stats band ───────────────────────────────────────────────── */}
        <section className="bg-[#e5a025] py-10">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-yellow-600">
              {stats.map((s) => (
                <div key={s.label} className="py-6 md:py-0 px-8 text-center">
                  <div className="text-5xl font-bold font-display text-white mb-2">{s.value}</div>
                  <div className="text-yellow-100 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About the school ─────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-label mb-3 block">About Tsai Hsing School</span>
                <h2 className="display-md text-neutral-900 mb-6">
                  One of Taipei&apos;s most prestigious private institutions — with a vision for global education.
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Founded in 1949 in the Wenshan District of Taipei, Taiwan, Tsai Hsing School
                  is one of the city&apos;s most esteemed private institutions. Offering K–12
                  education, the school has long held a reputation for academic excellence,
                  character education, and bilingual learning.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  It serves a diverse, ambitious student body in a community that values both
                  tradition and innovation — which made it the perfect environment to explore
                  what sustained global learning could look like.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Founded', value: '1949' },
                  { label: 'Location', value: 'Wenshan District, Taipei' },
                  { label: 'Type', value: 'Private K–12' },
                  { label: 'Staff', value: 'Approx. 300' },
                  { label: 'Focus', value: 'Academic excellence + bilingual learning' },
                  { label: 'Partnership since', value: '2009' },
                ].map((f) => (
                  <div key={f.label} className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                    <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-1">{f.label}</div>
                    <div className="text-neutral-800 font-medium text-sm">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge ────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-900 text-white">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <span className="section-label text-yellow-400 mb-3 block">The Challenge</span>
              <h2 className="display-md text-white mb-6">
                They needed more than an English teacher. They needed a global education partner.
              </h2>
              <p className="text-neutral-300 leading-relaxed text-lg mb-6">
                In the early 2010s, Tsai Hsing faced reputational challenges after over-investing
                in athletics. Determined to restore its academic image, the administration sought
                to modernize its English and digital education offerings.
              </p>
              <p className="text-neutral-300 leading-relaxed text-lg">
                The school had previously hired local expat teachers, but the results were
                inconsistent due to cultural and communication gaps. They needed a partner who
                could do more than teach English — they needed one who could elevate the
                application of English in real, global contexts.
              </p>
            </div>
          </div>
        </section>

        {/* ── Pull quote ───────────────────────────────────────────────── */}
        <section className="bg-[#e5a025] py-16">
          <div className="container-site">
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="text-3xl lg:text-4xl font-display font-semibold text-white leading-snug mb-6">
                &ldquo;Our students didn&apos;t just learn English — they learned to use it,
                to think critically, and to engage with the world.
                It transformed their confidence.&rdquo;
              </p>
              <cite className="not-italic text-yellow-100 text-lg">— Tsai Hsing School Administrator</cite>
            </blockquote>
          </div>
        </section>

        {/* ── Outcomes ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">Outcomes</span>
              <h2 className="display-md text-neutral-900">
                Three ways Learning Live transformed Tsai Hsing.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {outcomes.map((o) => {
                const Icon = o.icon
                return (
                  <div key={o.title} className="card p-8 flex flex-col">
                    <div className={`w-12 h-12 rounded-xl ${o.color} flex items-center justify-center mb-5`}>
                      <Icon className={`w-6 h-6 ${o.iconColor}`} />
                    </div>
                    <h3 className="font-display font-semibold text-neutral-900 text-lg mb-3">{o.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">{o.description}</p>
                    <ul className="space-y-2 mt-auto">
                      {o.bullets.map((b) => (
                        <li key={b} className="flex gap-2 items-start">
                          <CheckCircle2 className="w-4 h-4 text-[#e5a025] flex-shrink-0 mt-0.5" />
                          <span className="text-neutral-600 text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-y border-neutral-100">
          <div className="container-site">
            <div className="text-center mb-14">
              <span className="section-label mb-3 block">The Partnership Timeline</span>
              <h2 className="display-md text-neutral-900">17 years of growth.</h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-16 top-0 bottom-0 w-px bg-neutral-200 hidden md:block" />

                <div className="space-y-8">
                  {timeline.map((t, i) => (
                    <div key={t.year} className="flex gap-8 items-start">
                      <div className="flex-shrink-0 w-14 text-right">
                        <span className="text-sm font-bold font-display text-[#e5a025]">{t.year}</span>
                      </div>
                      {/* Dot */}
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-[#e5a025] mt-1.5 relative z-10 hidden md:block" />
                      <div className="flex-1 pb-2">
                        <p className="text-neutral-700 text-sm leading-relaxed">{t.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CILC Award ───────────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center p-10 rounded-2xl bg-neutral-50 border border-neutral-100">
                <Award className="w-16 h-16 text-[#e5a025] flex-shrink-0" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">Recognition</div>
                  <h3 className="font-display font-semibold text-neutral-900 text-xl mb-2">CILC Pinnacle Award</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    The Center for Interactive Learning and Collaboration awarded Banyan Global
                    Learning its Pinnacle Award — the field&apos;s highest honor for distance learning
                    programs that demonstrably improve student outcomes. The Tsai Hsing partnership
                    was a central proof point of that recognition.
                  </p>
                </div>
              </div>

              {/* Alumni */}
              <div className="mt-8 text-center">
                <div className="text-sm font-semibold uppercase tracking-widest text-neutral-400 mb-4">Alumni accepted to</div>
                <div className="flex flex-wrap justify-center gap-3">
                  {['New York University (NYU)', 'University of Washington', 'Ohio State University'].map((u) => (
                    <span key={u} className="badge badge-blue">{u}</span>
                  ))}
                  <span className="badge badge-neutral">and more</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ROI ──────────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-y border-neutral-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto">
              <span className="section-label mb-3 block text-center">Return on Investment</span>
              <h2 className="display-md text-neutral-900 mb-10 text-center">
                The impact goes beyond the classroom.
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    label: 'Time Saved',
                    detail: 'Streamlined communication via Google Classroom, real-time backchannel tools, and integrated conferencing',
                  },
                  {
                    label: 'Money Saved',
                    detail: 'Avoided costly relocation and retention of foreign teachers by using a proven virtual teaching model',
                  },
                  {
                    label: 'Value Created',
                    detail: 'Enrollment growth, academic reputation restoration, and lasting alumni impact at global universities',
                  },
                ].map((r) => (
                  <div key={r.label} className="p-6 bg-white rounded-xl border border-neutral-100 text-center">
                    <div className="text-xs font-semibold uppercase tracking-widest text-[#e5a025] mb-3">{r.label}</div>
                    <p className="text-neutral-600 text-sm leading-relaxed">{r.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Bridge to GLL ────────────────────────────────────────────── */}
        <section className="hero-main py-20">
          <div className="container-site text-center">
            <span className="section-label text-blue-200 mb-4 block">What Comes Next</span>
            <h2 className="display-lg text-white mb-4">
              We spent 17 years figuring out what sustained global learning actually looks like.
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Global Learning Live is what we built from it — a scalable version of everything
              that made Tsai Hsing&apos;s program transformative, now available to any classroom in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/global-learning-live" className="btn btn-teal btn-lg inline-flex items-center gap-2">
                Learn about Global Learning Live
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/programs/learning-live" className="btn btn-white btn-lg">
                More about Learning Live
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
