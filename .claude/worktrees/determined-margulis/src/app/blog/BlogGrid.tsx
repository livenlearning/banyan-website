'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Calendar } from 'lucide-react'
import type { PostSummary } from '@/sanity/queries'
import { getPostUrl } from '@/lib/postCategories'

// ── Category mapping ──────────────────────────────────────────────────────────
// Posts whose Sanity categories overlap these sets are shown in each tab.
// Posts with none of the below categories (e.g. news/sel) appear under All only.

const AI_CATEGORIES = new Set(['ai-in-education', 'teacher-pd'])
const VL_CATEGORIES = new Set(['global-learning', 'virtual-field-trips', 'online-learning'])

type Tab = 'all' | 'ai' | 'virtual-learning'

const TABS: { id: Tab; label: string }[] = [
  { id: 'all',              label: 'All'               },
  { id: 'ai',               label: 'AI in Education'   },
  { id: 'virtual-learning', label: 'Virtual Learning'  },
]

const CATEGORY_LABELS: Record<string, string> = {
  'ai-in-education':    'AI in Education',
  'global-learning':    'Global Learning',
  'digital-citizenship':'Digital Citizenship',
  'virtual-field-trips':'Virtual Field Trips',
  'sel':                'SEL',
  'teacher-pd':         'Teacher PD',
  'online-learning':    'Online Learning',
  'news':               'News',
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

// Keywords matched against the post slug (derived from the original WP title)
const AI_SLUG_KEYWORDS =
  /\bai\b|artificial.intell|chatgpt|machine.learn|edtech|ed.tech|prompt|automation|technology|robot|algorithm|data.driven|professional.dev|teacher.pd/i

const VL_SLUG_KEYWORDS =
  /virtual|global.learn|field.trip|fieldtrip|international|cultural|exchange|taiwan|taipei|online.learn|distance.learn|learning.live|classroom.connect|world.classroom/i

function postBelongsTo(post: PostSummary, tab: Tab): boolean {
  if (tab === 'all') return true

  const cats = post.categories ?? []
  const searchText = post.slug + ' ' + post.title

  if (tab === 'ai') {
    // Prefer Sanity category tag; fall back to slug/title keywords
    return cats.some(c => AI_CATEGORIES.has(c)) || AI_SLUG_KEYWORDS.test(searchText)
  }
  if (tab === 'virtual-learning') {
    return cats.some(c => VL_CATEGORIES.has(c)) || VL_SLUG_KEYWORDS.test(searchText)
  }
  return false
}

export default function BlogGrid({ posts }: { posts: PostSummary[] }) {
  const [activeTab, setActiveTab] = useState<Tab>('all')

  const filtered = posts.filter(p => postBelongsTo(p, activeTab))

  // Counts for each tab
  const counts: Record<Tab, number> = {
    all:               posts.length,
    ai:               posts.filter(p => postBelongsTo(p, 'ai')).length,
    'virtual-learning':posts.filter(p => postBelongsTo(p, 'virtual-learning')).length,
  }

  return (
    <>
      {/* ── Filter tabs ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map(tab => {
          const active = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={[
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all',
                active
                  ? 'bg-[#0e4a83] text-white shadow-sm'
                  : 'bg-white text-neutral-600 border border-neutral-200 hover:border-[#0e4a83] hover:text-[#0e4a83]',
              ].join(' ')}
            >
              {tab.label}
              <span className={[
                'text-xs font-normal px-1.5 py-0.5 rounded-full',
                active ? 'bg-white/20 text-white' : 'bg-neutral-100 text-neutral-400',
              ].join(' ')}>
                {counts[tab.id]}
              </span>
            </button>
          )
        })}
      </div>

      {/* ── Post grid ───────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-neutral-400">
          No posts in this category yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(post => (
            <article key={post._id} className="card flex flex-col">
              <div className="p-6 pb-0">
                {post.categories?.length > 0 && (
                  <span className="badge badge-blue mb-3 inline-block text-xs">
                    {CATEGORY_LABELS[post.categories[0]] ?? post.categories[0]}
                  </span>
                )}
                <h2 className="font-display font-semibold text-neutral-900 text-lg leading-snug mb-3 hover:text-[#0e4a83] transition-colors">
                  <Link href={getPostUrl(post.slug)}>
                    {post.title}
                  </Link>
                </h2>
                {post.excerpt && (
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>

              <div className="p-6 pt-4 mt-auto flex items-center justify-between border-t border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.publishedAt)}
                </div>
                <Link
                  href={getPostUrl(post.slug)}
                  className="text-[#0e4a83] text-xs font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
