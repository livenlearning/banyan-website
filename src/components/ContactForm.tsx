'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

// ── Service options (kept in sync with the AI PD page's CTA hrefs) ────────────
const SERVICE_OPTIONS = [
  { value: '', label: 'What can we help with?' },
  { value: 'readiness-workshop', label: 'AI Governance Readiness Workshop (free)' },
  { value: 'governance-audit', label: 'AI Governance Audit ($15K–$25K)' },
  { value: 'implementation-blueprint', label: 'AI Implementation Blueprint ($25K–$50K)' },
  { value: 'advisory-retainer', label: 'Strategic Advisory Retainer' },
  { value: 'self-assessment', label: 'Request the 5-Layer Self-Assessment Tool' },
  { value: 'global-learning-live', label: 'Global Learning Live' },
  { value: 'virtual-field-trips', label: 'Virtual Field Trips' },
  { value: 'learning-live', label: 'Learning Live' },
  { value: 'other', label: 'Something else' },
]

// ────────────────────────────────────────────────────────────────────────────
// Replace YOUR_FORMSPREE_ID below with the ID from your Formspree dashboard.
// 1. Create a free account at https://formspree.io
// 2. Create a new form — choose "New form" and set the destination to travis@banyangloballearning.com
// 3. Copy the form ID (looks like "xpwrdabc") and paste it here.
// ────────────────────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID'

function ContactFormInner() {
  const searchParams = useSearchParams()

  const [fields, setFields] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Pre-populate service from URL query param (e.g. ?service=governance-audit)
  useEffect(() => {
    const serviceParam = searchParams.get('service') ?? searchParams.get('resource') ?? ''
    if (serviceParam) {
      setFields((prev) => ({ ...prev, service: serviceParam }))
    }
  }, [searchParams])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    // Guard: warn in development if the ID hasn't been set
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      console.warn('ContactForm: Replace YOUR_FORMSPREE_ID with your real Formspree form ID.')
      // Still allow submission attempt so the UI can be tested
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          organization: fields.organization || '(not provided)',
          service: SERVICE_OPTIONS.find((o) => o.value === fields.service)?.label ?? fields.service,
          message: fields.message,
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', organization: '', service: '', message: '' })
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMessage(data?.error ?? 'Something went wrong. Please try emailing us directly.')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Could not send your message. Please email us at info@banyangloballearning.com.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-2xl border border-neutral-200 shadow-sm">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle2 className="text-green-500" size={28} />
        </div>
        <h3 className="font-display font-semibold text-neutral-900 text-xl mb-3">
          Message received!
        </h3>
        <p className="text-neutral-500 text-sm max-w-sm">
          Thanks for reaching out. We&apos;ll get back to you at <strong>{fields.email || 'your email'}</strong> within one business day.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e4a83] focus:border-transparent transition"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder="jane@yourdistrict.org"
            className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e4a83] focus:border-transparent transition"
          />
        </div>
      </div>

      {/* Organization */}
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-neutral-700 mb-1.5">
          School or district
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          value={fields.organization}
          onChange={handleChange}
          placeholder="Kennewick School District"
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e4a83] focus:border-transparent transition"
        />
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          value={fields.service}
          onChange={handleChange}
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-[#0e4a83] focus:border-transparent transition bg-white"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your school or district and what you're looking for..."
          className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0e4a83] focus:border-transparent transition resize-none"
        />
      </div>

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="shrink-0 mt-0.5" size={16} />
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary btn-lg w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Sending…
          </>
        ) : (
          <>
            Send message
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="text-neutral-400 text-xs text-center">
        We typically respond within one business day.
      </p>
    </form>
  )
}

// Wrap in Suspense because useSearchParams requires it in Next.js App Router
export default function ContactForm() {
  return (
    <Suspense fallback={
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-8 h-96 flex items-center justify-center">
        <Loader2 className="animate-spin text-neutral-300" size={28} />
      </div>
    }>
      <ContactFormInner />
    </Suspense>
  )
}
