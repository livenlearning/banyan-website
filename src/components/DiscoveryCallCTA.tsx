'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Lock } from 'lucide-react'

const CALENDLY_URL = 'https://calendar.app.google/NWah669nz6aGRCLt7'
const SNAPSHOT_URL = '/programs/ai-pd/snapshot'

// Reads localStorage flag set by the Snapshot page after Tally form submit.
// SSR-safe: initial state is null until useEffect runs on the client.
export default function DiscoveryCallCTA() {
  const [snapshotComplete, setSnapshotComplete] = useState<boolean | null>(null)

  useEffect(() => {
    setSnapshotComplete(
      typeof window !== 'undefined' &&
        window.localStorage.getItem('snapshot_completed') === 'true'
    )
  }, [])

  // Initial render (SSR + first paint): neutral placeholder to avoid hydration mismatch.
  if (snapshotComplete === null) {
    return (
      <div className="btn btn-lg w-full justify-center border border-neutral-700 text-neutral-500 cursor-default">
        <Calendar size={17} />
        Book Discovery Call
      </div>
    )
  }

  if (snapshotComplete) {
    return (
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg w-full justify-center"
      >
        <Calendar size={17} />
        Book Discovery Call
        <ArrowRight size={17} />
      </a>
    )
  }

  return (
    <Link
      href={SNAPSHOT_URL}
      className="btn btn-lg w-full justify-center border border-blue-700 text-blue-300 hover:bg-blue-900/30"
    >
      <Lock size={15} />
      Take the Snapshot first
    </Link>
  )
}
