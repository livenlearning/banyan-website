// ============================================================
// BANYAN GLOBAL LEARNING — Design Tokens
// Place at: src/lib/tokens.ts
//
// Use these in:
//   - className generators (cn(), clsx(), cva())
//   - Inline styles where Tailwind classes won't reach
//   - Component variant maps
//   - Animation configs
// ============================================================

// ── COLORS ──────────────────────────────────────────────────

export const colors = {
  blue: {
    50:  '#eff5fb',
    100: '#d9e8f5',
    200: '#aecde9',
    300: '#7aabd8',
    400: '#4586c3',
    500: '#2068aa',
    600: '#0e4a83', // ← BRAND
    700: '#0b3b69',
    800: '#082c50',
    900: '#051e36',
    950: '#030f1e',
  },
  gold: {
    50:  '#fdf6e3',
    100: '#f9e9bb',
    200: '#f3d489',
    300: '#edbc4e',
    400: '#e5a025', // ← BASE
    500: '#c9861a',
    600: '#a86c14',
    700: '#83520f',
    800: '#5e3c0b',
    900: '#3c2608',
  },
  teal: {
    50:  '#e8f8f6',
    100: '#c3ede9',
    200: '#85d9d2',
    300: '#44c1b9',
    400: '#1ca59d', // ← BASE
    500: '#0d8a7d',
    600: '#0a6e64',
    700: '#07524b',
    800: '#053832',
    900: '#031e1b',
  },
  neutral: {
    50:  '#f8f9fa',
    100: '#f1f3f5',
    200: '#e9ecef',
    300: '#dee2e6',
    400: '#ced4da',
    500: '#adb5bd',
    600: '#868e96',
    700: '#495057',
    800: '#343a40',
    900: '#212529',
    950: '#0d1117',
  },
} as const

export type ColorFamily = keyof typeof colors
export type ColorShade  = keyof typeof colors.blue


// ── SEMANTIC COLOR ALIASES ───────────────────────────────────

export const semantic = {
  text:        colors.neutral[900],
  textMuted:   colors.neutral[600],
  textSubtle:  colors.neutral[400],
  background:  '#ffffff',
  bgSubtle:    colors.neutral[50],
  border:      colors.neutral[200],
  borderLight: colors.neutral[100],
} as const


// ── PRODUCT PALETTE ──────────────────────────────────────────
// One source of truth for product color identities.
// Import this anywhere you need to color-code by product.

export const products = {
  gll: {
    id:      'gll',
    name:    'Global Learning Live',
    color:   colors.teal[400],   // #1ca59d
    colorDark: colors.teal[600], // #0a6e64
    gradient: 'linear-gradient(135deg, #1ca59d 0%, #07524b 100%)',
    badgeClass:  'badge-teal',
    btnClass:    'btn-teal',
    heroClass:   'hero-gll',
    price:   '~$1,000 / cycle',
  },
  aipd: {
    id:      'aipd',
    name:    'AI Professional Development',
    color:   colors.blue[600],   // #0e4a83
    colorDark: colors.blue[900], // #051e36
    gradient: 'linear-gradient(135deg, #2068aa 0%, #030f1e 100%)',
    badgeClass:  'badge-blue',
    btnClass:    'btn-primary',
    heroClass:   'hero-aipd',
    price:   'From $25,000',
  },
  ll: {
    id:      'll',
    name:    'Learning Live',
    color:   colors.gold[400],   // #e5a025
    colorDark: colors.gold[600], // #a86c14
    gradient: 'linear-gradient(135deg, #edbc4e 0%, #5e3c0b 100%)',
    badgeClass:  'badge-gold',
    btnClass:    'btn-gold',
    heroClass:   'hero-ll',
    price:   'Exclusive partnership',
  },
  vft: {
    id:      'vft',
    name:    'Virtual Field Trips',
    color:   colors.blue[400],   // #4586c3
    colorDark: colors.blue[600], // #0e4a83
    gradient: 'linear-gradient(135deg, #4586c3 0%, #051e36 100%)',
    badgeClass:  'badge-neutral',
    btnClass:    'btn-outline',
    heroClass:   'hero-main',
    price:   '$300 / session',
  },
} as const

export type ProductId = keyof typeof products


// ── TYPOGRAPHY ───────────────────────────────────────────────

export const fonts = {
  display: 'var(--font-display)',
  body:    'var(--font-body)',
} as const

export const fontSizes = {
  xs:        '0.75rem',
  sm:        '0.875rem',
  base:      '1rem',
  lg:        '1.125rem',
  xl:        '1.25rem',
  '2xl':     '1.5rem',
  '3xl':     '1.875rem',
  '4xl':     '2.25rem',
  '5xl':     '3rem',
  '6xl':     '3.75rem',
  '7xl':     '4.5rem',
} as const

export const lineHeights = {
  none:   '1',
  tight:  '1.1',
  snug:   '1.25',
  normal: '1.5',
  relaxed: '1.65',
  loose:  '1.75',
} as const


// ── SPACING ─────────────────────────────────────────────────

export const spacing = {
  containerMax:     '1280px',
  containerPadding: '32px',
  containerPaddingMobile: '20px',
  sectionY:         '96px',
  sectionYMobile:   '64px',
  cardGap:          '24px',
} as const


// ── BORDER RADIUS ────────────────────────────────────────────

export const radius = {
  sm:   '4px',
  md:   '8px',
  lg:   '12px',
  xl:   '16px',
  '2xl': '24px',
  full: '9999px',
} as const


// ── SHADOWS ──────────────────────────────────────────────────

export const shadows = {
  xs:  '0 1px 2px rgba(0,0,0,0.06)',
  sm:  '0 1px 3px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.05)',
  md:  '0 4px 6px rgba(0,0,0,0.05), 0 10px 25px rgba(0,0,0,0.08)',
  lg:  '0 20px 40px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)',
} as const


// ── ANIMATION ────────────────────────────────────────────────
// Consistent durations and easings for Framer Motion

export const motion = {
  duration: {
    fast:   0.15,
    normal: 0.25,
    slow:   0.4,
    page:   0.6,
  },
  ease: {
    default:  [0.4, 0, 0.2, 1],    // cubic-bezier ease-in-out
    enter:    [0, 0, 0.2, 1],       // ease-out (items entering)
    exit:     [0.4, 0, 1, 1],       // ease-in (items leaving)
    spring:   { type: 'spring', stiffness: 300, damping: 30 },
  },
} as const


// ── SITE METADATA ────────────────────────────────────────────

export const site = {
  name:      'Banyan Global Learning',
  tagline:   'The world, inside your classroom.',
  url:       'https://banyangloballearning.com',
  email:     'info@banyangloballearning.com',
  twitter:   '@banyanglobal',
  founded:   2009,
  currentYear: new Date().getFullYear(),
} as const


// ── NAVIGATION ───────────────────────────────────────────────

export const navigation = {
  main: [
    { label: 'Programs',     href: '/programs' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About',        href: '/about' },
    { label: 'Contact',      href: '/contact' },
  ],
  programs: [
    { label: 'Global Learning Live', href: '/programs/global-learning-live', product: 'gll' as ProductId },
    { label: 'AI Professional Development', href: '/programs/ai-pd', product: 'aipd' as ProductId },
    { label: 'Learning Live', href: '/programs/learning-live', product: 'll' as ProductId },
    { label: 'Virtual Field Trips', href: '/programs/virtual-field-trips', product: 'vft' as ProductId },
  ],
} as const
