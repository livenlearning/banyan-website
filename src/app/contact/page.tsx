import type { Metadata } from 'next'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import ContactForm from '@/components/ContactForm'
import { Mail, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Banyan Global Learning',
  description:
    'Get in touch with Banyan Global Learning. Whether you\'re exploring a program, requesting a proposal, or just want to learn more — we\'d love to hear from you.',
  alternates: { canonical: 'https://banyangloballearning.com/contact' },
  openGraph: {
    title: 'Contact — Banyan Global Learning',
    description: 'Reach out to explore programs, request a proposal, or ask a question.',
    url: 'https://banyangloballearning.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — Banyan Global Learning',
    description: 'Reach out to explore programs, request a proposal, or ask a question.',
  },
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section className="hero-main py-16 lg:py-24">
          <div className="container-site">
            <div className="max-w-2xl">
              <span className="section-label text-blue-200 mb-4 block">Contact us</span>
              <h1 className="display-xl text-white mb-4">
                Let&apos;s talk about{' '}
                <span className="text-gradient-gold">what we can build together.</span>
              </h1>
              <p className="body-lg text-blue-100 max-w-xl">
                Whether you&apos;re exploring a single virtual field trip or a district-wide AI
                governance engagement — we&apos;re happy to have the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* ── CONTACT FORM + SIDEBAR ────────────────────────────────────── */}
        <section className="section-padding bg-neutral-50 border-t border-neutral-100">
          <div className="container-site">
            <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">

              {/* ── FORM ─────────────────────────────────────────────── */}
              <div>
                <h2 className="font-display font-semibold text-neutral-900 text-2xl mb-2">
                  Send us a message
                </h2>
                <p className="text-neutral-500 text-sm mb-8">
                  Tell us what you&apos;re looking for and we&apos;ll get back to you within one business day.
                </p>
                <ContactForm />
              </div>

              {/* ── SIDEBAR ──────────────────────────────────────────── */}
              <div className="space-y-6 lg:pt-12">

                {/* Contact details */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-7 space-y-5">
                  <h3 className="font-display font-semibold text-neutral-900 text-lg">
                    Contact details
                  </h3>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="text-[#0e4a83]" size={15} />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <a
                        href="mailto:info@banyangloballearning.com"
                        className="text-[#0e4a83] text-sm hover:underline"
                      >
                        info@banyangloballearning.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="text-[#0e4a83]" size={15} />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        Response time
                      </div>
                      <div className="text-neutral-700 text-sm">Within one business day</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="text-[#0e4a83]" size={15} />
                    </div>
                    <div>
                      <div className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-0.5">
                        Based in
                      </div>
                      <div className="text-neutral-700 text-sm">United States · Serving schools worldwide</div>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="bg-white rounded-2xl border border-neutral-200 p-7">
                  <h3 className="font-display font-semibold text-neutral-900 text-lg mb-4">
                    What happens next
                  </h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: '1',
                        title: 'We read your message',
                        body: 'Every inquiry goes directly to our team — not a CRM queue.',
                      },
                      {
                        step: '2',
                        title: 'We reach out within a day',
                        body: "We'll respond with questions or to schedule a short call.",
                      },
                      {
                        step: '3',
                        title: 'We scope together',
                        body: "Whether it's a single program or a full engagement, we start by understanding what you actually need.",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
                          style={{ background: '#0e4a83' }}
                        >
                          {item.step}
                        </div>
                        <div>
                          <div className="font-semibold text-neutral-800 text-sm mb-0.5">
                            {item.title}
                          </div>
                          <div className="text-neutral-500 text-xs leading-relaxed">
                            {item.body}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* AI PD specific note */}
                <div
                  className="rounded-2xl p-6 border border-blue-200"
                  style={{ background: 'linear-gradient(135deg, #eff6ff, #f0fdfa)' }}
                >
                  <div className="text-[#0e4a83] text-xs font-semibold uppercase tracking-wider mb-2">
                    AI Governance inquiry?
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    All AI Governance engagements begin with a complimentary 90-minute Readiness
                    Workshop. Select &ldquo;AI Governance Readiness Workshop&rdquo; from the dropdown —
                    no obligation, no pitch until we know the fit is right.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  )
}
