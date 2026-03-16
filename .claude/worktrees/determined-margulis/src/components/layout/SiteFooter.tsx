import Link from 'next/link'
import Image from 'next/image'

// ─────────────────────────────────────────────────────────────────────────────
// SiteFooter
// Place at: src/components/layout/SiteFooter.tsx
// ─────────────────────────────────────────────────────────────────────────────

const programs = [
  { label: 'Global Learning Live', href: '/programs/global-learning-live' },
  { label: 'AI Professional Development', href: '/programs/ai-pd' },
  { label: 'Learning Live', href: '/programs/learning-live' },
  { label: 'Virtual Field Trips', href: '/programs/virtual-field-trips' },
]

const company = [
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-neutral-400">
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-14">

          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5">
              {/* White version of logo — add logo-white.svg to /public/ */}
              <Image
                src="/logo-horizontal-white.svg"
                alt="Banyan Global Learning"
                width={180}
                height={36}
              />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-400">
              Live, expert-led programs connecting K–12 classrooms to the world
              since 2009.
            </p>
            <p className="mt-4 text-sm">
              <a
                href="mailto:info@banyangloballearning.com"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                info@banyangloballearning.com
              </a>
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-neutral-500 mb-4">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-[0.1em] uppercase text-neutral-500 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Banyan Global Learning. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600">
            Founded 2009 · Seattle, WA
          </p>
        </div>
      </div>
    </footer>
  )
}
