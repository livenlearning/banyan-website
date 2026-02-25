import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { ArrowRight, Globe, Users, Lightbulb, Award, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Banyan Global Learning',
  description:
    'For 17 years, Banyan Global Learning has connected K–12 classrooms to the world through live, expert-led global experiences, AI professional development, and authentic learning partnerships.',
  alternates: { canonical: 'https://banyangloballearning.com/about' },
  openGraph: {
    title: 'About — Banyan Global Learning',
    description: 'Meet the team behind 17 years of global classroom connections.',
    url: 'https://banyangloballearning.com/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Banyan Global Learning',
    description: 'Meet the team behind 17 years of global classroom connections.',
  },
}

const values = [
  {
    icon: Globe,
    title: 'Connection before curriculum',
    body: 'The most transformative learning happens when students encounter real people, real places, and real perspectives — not textbook versions of them. We build programs around that belief.',
  },
  {
    icon: Users,
    title: 'Educator-centered, always',
    body: "Every program we build starts with one question: what does the teacher need to make this work? If it doesn't serve educators, it won't reach students.",
  },
  {
    icon: Lightbulb,
    title: 'Practical over theoretical',
    body: 'Elegant ideas mean nothing if they break down in third period. Everything we design — from virtual field trips to AI governance frameworks — has to work in actual classrooms, with real students.',
  },
  {
    icon: Award,
    title: 'Authentic over performative',
    body: 'We believe in real relationships with real partners. Our international connections in Taiwan and China are built on years of trust, not just vendor agreements.',
  },
  {
    icon: Heart,
    title: 'Long-term over transactional',
    body: "We're not in the one-and-done PD business. Our most important relationships are the ones we've maintained for a decade — districts, schools, and partners who've grown alongside us.",
  },
]

const team = [
  {
    name: 'Seth Fleischauer',
    title: 'Founder & President',
    bio: 'Seth founded Banyan Global Learning 17 years ago with a vision for what global education could look like at its best: not a unit in a textbook, but a live encounter with the world. He has built Banyan from a single program into a multi-faceted learning organization connecting thousands of students to experts, educators, and classrooms across the globe.',
    photo: null, // Replace with: '/team/seth-fleischauer.jpg'
    initials: 'SF',
  },
  {
    name: 'Courtney Dayhuff',
    title: 'Director of International Programs',
    bio: 'Courtney oversees Banyan\'s international partnerships in China and Taiwan, managing the relationships that power Global Learning Live and the virtual exchange programs that connect American students to real classrooms across the Pacific.',
    photo: null, // Replace with: '/team/courtney-dayhuff.jpg'
    initials: 'CD',
  },
  {
    name: 'Travis Moyer',
    title: 'Director of Programming & Marketing',
    bio: 'Travis oversees the development of new programs and Banyan\'s marketing strategy. He brings both creative and strategic thinking to how Banyan communicates its work — and to what that work looks like next.',
    photo: null, // Replace with: '/team/travis-moyer.jpg'
    initials: 'TM',
  },
  {
    name: 'Katrina Baran',
    title: 'Chief of Staff',
    bio: 'Katrina brings a distinctive combination of deep expertise in English language instruction and extensive HR experience to the operational core of Banyan. She ensures the programs, partnerships, and people that make Banyan run are supported with the same care we bring to every classroom experience.',
    photo: null, // Replace with: '/team/katrina-baran.jpg'
    initials: 'KB',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-main py-20 lg:py-28">
          <div className="container-site">
            <div className="max-w-3xl">
              <span className="section-label text-blue-200 mb-4 block">About Banyan</span>
              <h1 className="display-xl text-white mb-6 text-balance">
                We put the world{' '}
                <span className="text-gradient-gold">inside the classroom.</span>
              </h1>
              <p className="body-lg text-blue-100 mb-8 max-w-2xl">
                For over 17 years, Banyan Global Learning has connected K–12 classrooms to
                real experts, authentic cultural experiences, and the global conversations
                that shape the next generation of citizens and thinkers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs" className="btn btn-primary btn-lg">
                  Explore our programs
                  <ArrowRight size={18} />
                </Link>
                <Link href="/contact" className="btn btn-lg border border-white/30 text-white hover:bg-white/10">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS BAND ───────────────────────────────────────────────── */}
        <section className="bg-white border-b border-neutral-100">
          <div className="container-site py-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: '17+', label: 'Years connecting classrooms to the world' },
                { number: '10K+', label: 'Students reached through live programs' },
                { number: '20+', label: 'Countries represented in our content' },
                { number: '100%', label: 'Of Kennewick teachers rated the PD valuable' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="font-display font-extrabold text-[#0e4a83] mb-1"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}>
                    {stat.number}
                  </div>
                  <div className="text-neutral-500 text-sm leading-snug max-w-[160px] mx-auto">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ORIGIN / MISSION ─────────────────────────────────────────── */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>
                <p className="text-[#0e4a83] text-xs font-semibold tracking-widest uppercase mb-4">
                  Our story
                </p>
                <h2 className="display-md text-neutral-900 mb-6">
                  Built on the belief that every student deserves a window to the world.
                </h2>
                <p className="body-lg text-neutral-600 mb-5">
                  Banyan Global Learning was founded 17 years ago by Seth Fleischauer with a
                  straightforward conviction: that the most powerful learning doesn&apos;t happen
                  in isolation — it happens in encounter. Encounter with different cultures,
                  different perspectives, different ways of seeing the world.
                </p>
                <p className="body-md text-neutral-500 mb-5">
                  What started as a program to bring global voices into U.S. classrooms has grown
                  into a full suite of live, expert-led learning experiences — virtual field trips
                  to Taiwan, live cultural exchanges with Chinese schools, AI professional
                  development for district leadership, and custom programs that meet schools where
                  they are and take them somewhere new.
                </p>
                <p className="body-md text-neutral-500">
                  The name &ldquo;Banyan&rdquo; is intentional. The banyan tree doesn&apos;t grow straight up —
                  it spreads outward, sends down roots from its branches, and creates a canopy
                  wide enough for an entire community to gather under. That&apos;s what we&apos;re
                  building: a canopy for global learning.
                </p>
              </div>

              {/* Visual pull-quote block */}
              <div className="space-y-4">
                <div
                  className="rounded-2xl p-8 text-white"
                  style={{ background: 'linear-gradient(160deg, #0e2a4f 0%, #0e4a83 100%)' }}
                >
                  <div className="text-5xl text-blue-300 font-display leading-none mb-4">&ldquo;</div>
                  <p className="body-lg text-blue-50 italic leading-relaxed mb-6">
                    The most transformative learning happens when students encounter real people,
                    real places, and real perspectives — not textbook versions of them.
                  </p>
                  <div className="text-blue-300 text-sm font-semibold">
                    — Seth Fleischauer, Founder &amp; President
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-5">
                    <div className="text-[#0e4a83] font-display font-bold text-2xl mb-1">Global</div>
                    <div className="text-neutral-500 text-sm">Partnerships in Asia, partnerships in the U.S.</div>
                  </div>
                  <div className="rounded-xl bg-neutral-50 border border-neutral-200 p-5">
                    <div className="text-[#0e4a83] font-display font-bold text-2xl mb-1">Live</div>
                    <div className="text-neutral-500 text-sm">Real-time connections, not recordings or simulations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALUES ───────────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#0e4a83] text-xs font-semibold tracking-widest uppercase mb-4">
                What we believe
              </p>
              <h2 className="display-md text-neutral-900 mb-4">
                The principles we build everything on.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <div key={i} className="card p-7 flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="text-[#0e4a83]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-neutral-900 text-lg mb-2">
                        {value.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed">
                        {value.body}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── TEAM ─────────────────────────────────────────────────────── */}
        <section className="section-padding bg-white border-t border-neutral-100">
          <div className="container-site">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#0e4a83] text-xs font-semibold tracking-widest uppercase mb-4">
                The team
              </p>
              <h2 className="display-md text-neutral-900 mb-4">
                Small team. Deep expertise.
              </h2>
              <p className="body-md text-neutral-500">
                Banyan is a lean, intentional team — which means every person is close to the
                work and every relationship with a school or district gets genuine attention.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <div key={i} className="card p-7 flex items-start gap-6">
                  {/* Photo / Initials placeholder */}
                  <div className="shrink-0">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={72}
                        height={72}
                        className="w-18 h-18 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-white text-lg"
                        style={{ background: 'linear-gradient(135deg, #0e4a83, #1ca59d)' }}
                      >
                        {member.initials}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="font-display font-semibold text-neutral-900 text-lg leading-tight mb-0.5">
                      {member.name}
                    </div>
                    <div className="text-[#0e4a83] text-sm font-medium mb-3">
                      {member.title}
                    </div>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="display-md text-neutral-900 mb-4">
                Ready to bring the world to your students?
              </h2>
              <p className="body-lg text-neutral-500 mb-8 max-w-xl mx-auto">
                Whether you&apos;re looking for a single virtual field trip or a year-long
                partnership, we&apos;d love to talk about what Banyan can build with your school
                or district.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn btn-primary btn-lg">
                  Talk to us
                  <ArrowRight size={18} />
                </Link>
                <Link href="/programs" className="btn btn-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100">
                  Explore programs
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
