// ═══════════════════════════════════════════════════════════════
//  CENTRAL IMAGE CONFIG — Adani Shantigram Township
// ═══════════════════════════════════════════════════════════════

export const BASE = '/adani-shantigram-township/images/home'

// ── Hero ──────────────────────────────────────────────────────
export const heroImages = {
  banner: `${BASE}/home.webp`,
  banner1: `${BASE}/banner1.webp`,
  banner2: `${BASE}/banner2.webp`,
  banner3: `${BASE}/banner3.webp`,
  banner4: `${BASE}/banner4.webp`,
}

export const heroSlides = [
  { id: 1, name: 'Elevation', shortName: 'Elevation', img: `${BASE}/banner1.webp` },
  { id: 2, name: 'Swimming Pool', shortName: 'Swimming Pool', img: `${BASE}/banner2.webp` },
  { id: 3, name: 'Green Landscape', shortName: 'Landscape', img: `${BASE}/banner3.webp` },
  { id: 4, name: 'Kids Play Area', shortName: 'Kids Play Area', img: `${BASE}/banner4.webp` },
]

// ── Logo ──────────────────────────────────────────────────────
export const logoImages = {
  main: `${BASE}/logo.png`,
  webp: `${BASE}/logo.webp`,
  alt: `${BASE}/logo.png`,
}

// ── Overview ──────────────────────────────────────────────────
export const overviewImage = `${BASE}/overview.webp`

// ── Contact ───────────────────────────────────────────────────
export const contactImage = `${BASE}/contact.png`

// ── Highlights ────────────────────────────────────────────────
export const highlightImages = [
  { img: `${BASE}/banner1.webp`, icon: '🏙️', text: 'Township Living' },
  { img: `${BASE}/banner2.webp`, icon: '🏊', text: 'Clubhouse & Pool' },
]

// ── Master Plan ───────────────────────────────────────────────
export const masterplanImages = {
  masterPlan: '/adani-shantigram-township/masterplan/masterplan.webp',
  bhk2: '/adani-shantigram-township/masterplan/2bhk.webp',
  bhk3: '/adani-shantigram-township/masterplan/3bhk.webp',
  bhk45: '/adani-shantigram-township/masterplan/4.5bhk.webp',
  floorPlans: [
    { src: '/adani-shantigram-township/masterplan/2bhk.webp', label: '3 BHK' },
    { src: '/adani-shantigram-township/masterplan/3bhk.webp', label: '4 BHK' },
    { src: '/adani-shantigram-township/masterplan/4.5bhk.webp', label: '5 BHK' },
    { src: '/adani-shantigram-township/masterplan/4.5bhk.webp', label: '6 BHK' },
  ],
}

// ── Enquiry / Popup ───────────────────────────────────────────
export const enquiryImages = {
  banner: `${BASE}/banner1.webp`,
}
export const popupImage = enquiryImages.banner
