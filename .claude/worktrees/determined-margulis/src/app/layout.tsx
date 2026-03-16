import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

// ── FONTS ────────────────────────────────────────────────────────────────────
// Plus Jakarta Sans → headings, display text, hero copy
// Inter             → body text, UI labels, navigation, captions

const displayFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display-var',  // different name avoids conflict with Tailwind @theme token
  display: 'swap',
})

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body-var',     // same here
  display: 'swap',
})

// ── METADATA ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: 'Banyan Global Learning — The world, inside your classroom.',
    template: '%s | Banyan Global Learning',
  },
  description:
    'Live, expert-led programs that connect K–12 classrooms to the world. ' +
    'Global Learning Live, AI Professional Development, Learning Live, and Virtual Field Trips.',
  metadataBase: new URL('https://banyangloballearning.com'),
  openGraph: {
    siteName: 'Banyan Global Learning',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@banyanglobal',
  },
}

// ── ROOT LAYOUT ───────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      // next/font injects --font-display-var and --font-body-var on <html>
    >
      <body className="font-body text-base text-neutral-900 bg-white antialiased">
        {children}
      </body>
    </html>
  )
}
