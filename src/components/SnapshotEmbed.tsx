'use client'

import { useEffect } from 'react'
import Script from 'next/script'

// Embeds the Tally 5-Layer AI Readiness Snapshot survey.
// Listens for Tally's postMessage event on submission and sets a localStorage flag
// that the discovery-call CTA on /programs/ai-pd checks before unlocking.
const TALLY_FORM_ID = 'EkvZE4'
const TALLY_EMBED_URL = `https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`

interface TallyMessage {
  event?: string
  type?: string
  payload?: { formId?: string }
}

export default function SnapshotEmbed() {
  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // Only trust messages from tally.so
      if (typeof event.origin !== 'string' || !event.origin.includes('tally.so')) return

      let data: TallyMessage | null = null
      if (typeof event.data === 'string') {
        try { data = JSON.parse(event.data) as TallyMessage } catch { data = null }
      } else if (event.data && typeof event.data === 'object') {
        data = event.data as TallyMessage
      }
      if (!data) return

      // Tally fires several event names depending on form version; match defensively.
      const eventName = (data.event ?? data.type ?? '').toString().toLowerCase()
      if (eventName.includes('formsubmitted') || eventName === 'tally.formsubmitted') {
        try {
          window.localStorage.setItem('snapshot_completed', 'true')
        } catch {
          // localStorage may be blocked in some browsers; ignore.
        }
        // Optional GA event
        if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
          ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'snapshot_submitted', {
            form_id: TALLY_FORM_ID,
          })
        }
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <>
      {/* Tally embed script enables dynamic iframe height */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      <iframe
        src={TALLY_EMBED_URL}
        title="5-Layer AI Readiness Snapshot"
        width="100%"
        height="500"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        className="w-full bg-transparent"
        style={{ border: 0 }}
      />
    </>
  )
}
