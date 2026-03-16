import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { ArrowRight, BookOpen, Users, Award, TrendingUp, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Banyan Global Learning',
  description:
    'Real results from real partnerships. See how Banyan Global Learning has helped school districts and schools transform student outcomes over 15+ years.',
}

const cases = [
  {
    slug: 'kennewick',
    program: 'AI Professional Development',
    programColor: 'badge-blue',
    accentColor: 'bg-[#0e4a83]',
    borderColor: 'border-[#0e4a83]',
    accentBar: 'bg-[#0e4a83]',
    tagline: 'District-wide AI PD that converted skeptics to practitioners.',
    org: 'Kennewick School District',
    location: 'Kennewick, WA',
    type: 'Public School District',
    heroGradient: 'from-[#070b12] via-[#0e2a50] to-[#0e4a83]',
    stats: [
      { value: '100%', label: 'Said PD was a valuable use of time' },
      { value: '100%', label: 'Gained strategies they could apply immediately' },
      { value: '100%', label: 'More likely to use AI tools next year' },
    ],
    quote: {
      text: 'These specific workflows have been helpful and I will implement them in my own AI work.',
      attribution: 'Kennewick educator — experienced AI user',
    },
    challenge:
      'KSD serves students across four school models — traditional, project-based, virtual, and juvenile justice. As AI tools entered classrooms, district leaders needed policy-aligned PD that met teachers where they actually were, from skeptics to early adopters.',
    icon: TrendingUp,
    ctaLabel: 'Read the full case study',
  },
  {
    slug: 'tsai-hsing',
    program: 'Learning Live',
    programColor: 'badge-gold',
    accentColor: 'bg-[#e5a025]',
    borderColor: 'border-[#e5a025]',
    accentBar: 'bg-[#e5a025]',
    tagline: '17 years. 5,000+ students. One enduring partnership.',
    org: 'Tsai Hsing School',
    location: 'Wenshan District, Taipei, Taiwan',
    type: 'Private K–12 School',
    heroGradient: 'from-[#2a1800] via-[#7a4800] to-[#e5a025]',
    stats: [
      { value: '17 yrs', label: 'Exclusive ongoing partnership' },
      { value: '5,000+', label: 'Students served' },
      { value: '1 → 8', label: 'Classrooms expanded over the partnership' },
    ],
    quote: {
      text: 'Our students didn\'t just learn English — they learned to use it, to think critically, and to engage with the world.',
      attribution: 'Tsai Hsing administrator',
    },
    challenge:
      'After reputational challenges in the early 2010s, Tsai Hsing sought a partner who could do more than teach English — they needed one who could elevate student confidence and global competency in ways local expat teachers could not deliver.',
    icon: BookOpen,
    ctaLabel: 'Read the full case study',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="hero-main py-24 lg:py-32">
          <div className="container-site text-center">
            <span className="section-label text-blue-200 mb-4 block">Case Studies</span>
            <h1 className="display-xl text-white mb-6">
              Real partnerships.{' '}
              <span className="text-gradient-gold">Real results.</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Banyan has been doing this since 2009. These are two of the partnerships that show
              what&apos;s possible when global learning is done with intention.
            </p>
          </div>
        </section>

        {/* ── Stats band ───────────────────────────────────────────────── */}
        <section className="bg-white border-b border-neutral-100 py-10">
          <div className="container-site">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '15+', label: 'Years of live global learning' },
                { value: '5,000+', label: 'Students served' },
                { value: '20+', label: 'Countries connected' },
                { value: '2', label: 'Active case studies & counting' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="stat-number text-[#0e4a83]">{s.value}</div>
                  <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Case study cards ─────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50">
          <div className="container-site">
            <div className="grid md:grid-cols-2 gap-8">
              {cases.map((c) => (
                <article
                  key={c.slug}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-100 flex flex-col"
                >
                  {/* Colored header band */}
                  <div className={`${c.heroGradient} bg-gradient-to-br p-8 text-white`}>
                    <span className={`badge ${c.programColor} mb-4 inline-block`}>{c.program}</span>
                    <h2 className="display-sm text-white mb-2">{c.org}</h2>
                    <p className="text-sm text-white/70 mb-4">{c.location} · {c.type}</p>
                    <p className="text-lg text-white/90 font-medium leading-snug">{c.tagline}</p>
                  </div>

                  {/* Stats row */}
                  <div className={`border-b border-neutral-100 grid grid-cols-3 divide-x divide-neutral-100`}>
                    {c.stats.map((s) => (
                      <div key={s.label} className="p-4 text-center">
                        <div className="text-2xl font-bold font-display text-[#0e4a83]">{s.value}</div>
                        <div className="text-xs text-neutral-500 mt-1 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Body */}
                  <div className="p-8 flex flex-col gap-6 flex-1">
                    {/* Challenge */}
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">The Challenge</div>
                      <p className="text-neutral-600 text-sm leading-relaxed">{c.challenge}</p>
                    </div>

                    {/* Pull quote */}
                    <blockquote className={`border-l-4 ${c.borderColor} pl-4`}>
                      <p className="text-neutral-700 italic text-sm leading-relaxed">
                        &ldquo;{c.quote.text}&rdquo;
                      </p>
                      <cite className="not-italic text-xs text-neutral-400 mt-2 block">— {c.quote.attribution}</cite>
                    </blockquote>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={`/case-studies/${c.slug}`}
                        className="btn btn-primary btn-md inline-flex items-center gap-2 group"
                      >
                        {c.ctaLabel}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── CILC Award callout ───────────────────────────────────────── */}
        <section className="bg-white section-padding border-y border-neutral-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <Award className="w-10 h-10 text-[#e5a025] mx-auto mb-4" />
              <h2 className="display-md text-neutral-900 mb-4">
                Recognized by the Center for Interactive Learning and Collaboration
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed">
                Banyan Global Learning received the CILC Pinnacle Award for excellence in
                distance learning — the field&apos;s highest recognition for programs that
                demonstrably improve student outcomes through live, connected learning.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <section className="hero-main py-20">
          <div className="container-site text-center">
            <h2 className="display-lg text-white mb-4">
              Ready to be the next story?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re enrolling a classroom or building a district-wide AI strategy,
              Banyan has a program built for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs" className="btn btn-gold btn-lg">
                Explore programs
              </Link>
              <Link href="/contact" className="btn btn-white btn-lg">
                Talk to our team
              </Link>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
