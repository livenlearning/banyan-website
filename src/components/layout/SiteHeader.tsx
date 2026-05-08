'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown, Globe, Cpu, BookOpen, MapPin } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// SiteHeader — sticky nav with Programs dropdown + mobile drawer
// Place at: src/components/layout/SiteHeader.tsx
// ─────────────────────────────────────────────────────────────────────────────

const programs = [
  {
    href: '/programs/global-learning-live',
    icon: Globe,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    name: 'Global Learning Live',
    sub: 'Live international cohort program',
    badge: 'Enrolling',
    badgeClass: 'bg-teal-100 text-teal-700',
  },
  {
    href: '/programs/ai-pd',
    icon: Cpu,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    name: 'AI Professional Development',
    sub: 'District-wide AI literacy for educators',
    badge: null,
    badgeClass: '',
  },
  {
    href: '/programs/learning-live',
    icon: BookOpen,
    iconBg: 'bg-gold-50',
    iconColor: 'text-gold-600',
    name: 'Learning Live',
    sub: '17-year Taipei partnership',
    badge: null,
    badgeClass: '',
  },
  {
    href: '/programs/virtual-field-trips',
    icon: MapPin,
    iconBg: 'bg-neutral-100',
    iconColor: 'text-neutral-500',
    name: 'Virtual Field Trips',
    sub: 'Expert-guided single sessions',
    badge: null,
    badgeClass: '',
  },
]

const topLinks = [
  { label: 'Blog', href: '/blog' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)
  const [mobilePrograms, setMobilePrograms] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProgramsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="container-site flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo-horizontal.svg"
            alt="Banyan Global Learning"
            width={180}
            height={36}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">

          {/* Programs dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              className="nav-link flex items-center gap-1"
              onClick={() => setProgramsOpen(!programsOpen)}
              aria-expanded={programsOpen}
              aria-haspopup="true"
            >
              Programs
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown panel */}
            {programsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white rounded-xl shadow-xl border border-neutral-200 overflow-hidden">
                {/* All programs link */}
                <div className="px-4 pt-4 pb-2">
                  <Link
                    href="/programs"
                    className="text-xs font-semibold text-blue-600 uppercase tracking-wider hover:text-blue-700"
                    onClick={() => setProgramsOpen(false)}
                  >
                    All programs →
                  </Link>
                </div>
                <div className="p-2">
                  {programs.map((prog) => {
                    const Icon = prog.icon
                    return (
                      <Link
                        key={prog.href}
                        href={prog.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group"
                        onClick={() => setProgramsOpen(false)}
                      >
                        <div className={`w-8 h-8 rounded-lg ${prog.iconBg} flex items-center justify-center shrink-0 mt-0.5`}>
                          <Icon className={prog.iconColor} size={15} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-neutral-800 group-hover:text-blue-600 transition-colors">
                              {prog.name}
                            </span>
                            {prog.badge && (
                              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${prog.badgeClass}`}>
                                {prog.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-neutral-500 mt-0.5">{prog.sub}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Other nav links */}
          {topLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact?program=gll" className="btn btn-teal btn-sm">
            Enroll a classroom
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-neutral-600 hover:text-blue-600 hover:bg-neutral-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <nav className="container-site py-4 flex flex-col gap-1" aria-label="Mobile navigation">

            {/* Programs accordion */}
            <button
              className="flex items-center justify-between py-3 text-[15px] font-medium text-neutral-700 hover:text-blue-600 border-b border-neutral-100 transition-colors w-full"
              onClick={() => setMobilePrograms(!mobilePrograms)}
            >
              Programs
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${mobilePrograms ? 'rotate-180' : ''}`}
              />
            </button>

            {mobilePrograms && (
              <div className="pb-2 pl-2">
                <Link
                  href="/programs"
                  className="block py-2.5 text-sm font-semibold text-blue-600"
                  onClick={() => setMobileOpen(false)}
                >
                  All programs
                </Link>
                {programs.map((prog) => (
                  <Link
                    key={prog.href}
                    href={prog.href}
                    className="block py-2.5 text-sm text-neutral-600 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {prog.name}
                  </Link>
                ))}
              </div>
            )}

            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3 text-[15px] font-medium text-neutral-700 hover:text-blue-600 border-b border-neutral-100 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <Link
                href="/contact?program=gll"
                className="btn btn-teal btn-md w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Enroll a classroom
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
