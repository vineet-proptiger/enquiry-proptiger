// ═══════════════════════════════════════════════════════════════
//  CENTRAL IMAGE CONFIG — SPRE Villa Plots Khopoli
// ═══════════════════════════════════════════════════════════════

export const BASE = '/images/spre-villa-plots-khapoli'

// ── Hero ──────────────────────────────────────────────────────
export const heroImages = {
  banner1: `${BASE}/hero/banner1.webp`,
  banner2: `${BASE}/hero/banner2.webp`,
  banner3: `${BASE}/hero/banner3.webp`,
  banner4: `${BASE}/hero/banner4.webp`,
}

export const heroSlides = [
  { id: 1, name: 'Waterfall Villa', shortName: 'Waterfall', img: `${BASE}/hero/banner1.webp` },
  { id: 2, name: 'Plotted Community', shortName: 'Plotted', img: `${BASE}/hero/banner2.webp` },
  { id: 3, name: 'Forest Villa', shortName: 'Forest', img: `${BASE}/hero/banner3.webp` },
  { id: 4, name: 'Hillside Villa', shortName: 'Hillside', img: `${BASE}/hero/banner4.webp` },
]

// ── Logo ──────────────────────────────────────────────────────
export const logoImages = {
  main: `${BASE}/logo/logo.png`,
  alt: `${BASE}/logo/logo.png`,
}

// ── Overview ──────────────────────────────────────────────────
export const overviewImage = `${BASE}/about/about.webp`

// ── Highlights ────────────────────────────────────────────────
// Kept for backward compatibility if ever needed
export const highlightImages = [
  { img: `${BASE}/amenities/a1.webp`, icon: '🏙️', text: 'Highlight 1' },
  { img: `${BASE}/amenities/a2.webp`, icon: '🏊', text: 'Highlight 2' },
]

// ── Gallery ───────────────────────────────────────────────────
export const galleryImages = [
  {
    id: 1,
    src: `${BASE}/gallery/g1.webp`,
    title: 'Master Aerial View',
    category: 'Community Overview',
    alt: 'SPRE Villa Plots — Master Aerial View',
  },
  {
    id: 2,
    src: `${BASE}/gallery/g2.webp`,
    title: 'Retreat Centre & Promenade',
    category: 'Club & Architecture',
    alt: 'SPRE Villa Plots — Retreat Centre & Promenade',
  },
  {
    id: 3,
    src: `${BASE}/gallery/g3.webp`,
    title: 'Grand Entrance & Nature Boulevard',
    category: 'Grand Arrival',
    alt: 'SPRE Villa Plots — Grand Entrance',
  },
  {
    id: 4,
    src: `${BASE}/gallery/g4.webp`,
    title: 'Forest Greens & Open Vistas',
    category: 'Natural Setting',
    alt: 'SPRE Villa Plots — Forest Greens',
  },
  {
    id: 5,
    src: `${BASE}/gallery/g5.webp`,
    title: 'Villa Enclave & Private Hamlets',
    category: 'Plotted Community',
    alt: 'SPRE Villa Plots — Villa Enclave',
  },
]

// ── Amenities ─────────────────────────────────────────────────
export const amenityImages = [
  { img: `${BASE}/amenities/a5.webp`, label: 'Wellness District' },
  { img: `${BASE}/amenities/a3.webp`, label: '25,000 Sq. Ft. Retreat Centre' },
  { img: `${BASE}/amenities/a2.webp`, label: 'Sports Zones' },
  { img: `${BASE}/amenities/a4.webp`, label: 'Education Spaces' },
  { img: `${BASE}/amenities/a6.webp`, label: 'Residential Plots' },
  { img: `${BASE}/amenities/a1.webp`, label: 'Private Hamlets' },
  { img: `${BASE}/amenities/yoga-pavilion.webp`, label: 'Row Houses' },
  { img: `${BASE}/amenities/security.webp`, label: 'Nature Trails & Waterways' },
]

// ── Master Plan ───────────────────────────────────────────────
export const masterplanImages = {
  masterPlan: `${BASE}/masterplan/masterplan.webp`,
  floorPlans: [
    { src: `${BASE}/masterplan/2bhk.webp`, label: 'Residential Plot', size: '1,750 Sq. Ft. / 194 Sq. Yards' },
    { src: `${BASE}/masterplan/3bhk.webp`, label: 'Residential Plot', size: '4,500 Sq. Ft. / 500 Sq. Yards' },
    { src: `${BASE}/masterplan/4.5bhk.webp`, label: 'Residential Plot', size: '19,800 Sq. Ft. / 2,200 Sq. Yards' },
  ]
}

// ── Enquiry ───────────────────────────────────────────────────
export const enquiryImages = {
  banner: `${BASE}/Enquiry/enquiry.webp`,
}

// ── Location ──────────────────────────────────────────────────
export const locationMap = `${BASE}/location/location.webp`

// ── Virtual Tour ──────────────────────────────────────────────
export const virtualTourImage = `${BASE}/gallery/g1.webp`

// ── Popup ─────────────────────────────────────────────────────
export const popupImage = enquiryImages.banner

// ── Favicon ───────────────────────────────────────────────────
export const faviconImage = `${BASE}/favicon/fav.webp`
