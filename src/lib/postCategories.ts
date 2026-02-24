// Canonical category for each migrated WordPress post slug.
// 'ai'               → /blog/ai/<slug>
// 'virtual-learning' → /blog/virtual-learning/<slug>
// undefined          → /blog/<slug>  (general / uncategorized)

export type PostCategory = 'ai' | 'virtual-learning'

export const POST_CATEGORIES: Record<string, PostCategory> = {
  // ── AI in Education ──────────────────────────────────────────────────────
  'disruptive-technologies-in-the-classroom':             'ai',
  'from-chalkboards-to-ai-the-evolution-of-educational-tools': 'ai',
  'ai-education-catalyst-for-cultural-transformation':    'ai',
  'ai-in-education':                                      'ai',
  'generative-ai-in-education':                           'ai',
  'integrating-technology-in-education':                  'ai',
  'ai-accessibility':                                     'ai',
  'impact-of-technology-on-education':                    'ai',
  'problems-with-ai-in-education':                        'ai',
  'ai-essay-writer':                                      'ai',
  'ai-and-creativity':                                    'ai',
  'the-inspired-student-technology-in-music-education':   'ai',
  'technological-integration':                            'ai',
  'ai-prompts-for-teachers':                              'ai',
  'ai-professional-development-for-teachers':             'ai',
  'transformative-ai':                                    'ai',
  'benefits-of-ai-in-education':                          'ai',
  'ai-policy':                                            'ai',
  'ai-implementation':                                    'ai',
  'ai-in-the-classroom':                                  'ai',

  // ── Virtual Learning ─────────────────────────────────────────────────────
  'thinking-through-the-transition-to-online-learning':           'virtual-learning',
  '5-ways-teachers-can-rock-this-distance-learning-thing':        'virtual-learning',
  'expression-through-puppetry-dance-online-learning-club-starts-9-16': 'virtual-learning',
  'will-online-learning-be-permanent':                            'virtual-learning',
  'our-favorite-tools-for-online-learning':                       'virtual-learning',
  'learning-live-2021-graduation':                                'virtual-learning',
  'have-you-ever-been-to-brazil':                                 'virtual-learning',
  'live-virtual-field-trip-highlights-itacare-brazil':            'virtual-learning',
  'award-for-outstanding-live-virtual-programs':                  'virtual-learning',
  'shark-tank-project-based-learning-over-video-conferencing':    'virtual-learning',
  '10-reasons-why-virtual-field-trips-benefit-students':          'virtual-learning',
  'strategies-for-effective-online-learning-k12-education':       'virtual-learning',
  'personalized-online-learning':                                 'virtual-learning',
  'synchronous-online-learning':                                  'virtual-learning',
  'isolation-in-online-schools':                                  'virtual-learning',
  'executive-function-in-online-education':                       'virtual-learning',
  'distance-learning':                                            'virtual-learning',
  'virtual-school':                                               'virtual-learning',
  'relationships-in-online-learning':                             'virtual-learning',
  'virtual-education':                                            'virtual-learning',
  'the-global-soundtrack-enhancing-online-learning-with-music-listening': 'virtual-learning',
  'global-citizenship':                                           'virtual-learning',
  'global-competence':                                            'virtual-learning',
  'global-awareness':                                             'virtual-learning',
  'virtual-teaching':                                             'virtual-learning',
}

/** Returns the canonical public URL for a blog post. */
export function getPostUrl(slug: string): string {
  const cat = POST_CATEGORIES[slug]
  return cat ? `/blog/${cat}/${slug}` : `/blog/${slug}`
}
