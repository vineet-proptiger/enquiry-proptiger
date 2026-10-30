// ═══════════════════════════════════════════════════════════════
//  CENTRAL IMAGE CONFIG — UK Celestique Garden
// ═══════════════════════════════════════════════════════════════

export const BASE = '/images/uk-celestique-garden'

// ── Hero ──────────────────────────────────────────────────────
export const heroImages = {
  banner1: `${BASE}/hero/banner1.webp`,
  banner2: `${BASE}/hero/banner2.webp`,
  banner3: `${BASE}/hero/banner3.webp`,
  banner4: `${BASE}/hero/banner4.webp`,
}

export const heroSlides = [
  { id: 1, name: 'Elevation', shortName: 'Elevation', img: `${BASE}/hero/banner1.webp` },
  { id: 2, name: 'Landscape', shortName: 'Landscape', img: `${BASE}/hero/banner2.webp` },
  { id: 3, name: 'Swimming Pool', shortName: 'Pool', img: `${BASE}/hero/banner3.webp` },
  { id: 4, name: 'Gymnasium', shortName: 'Gymnasium', img: `${BASE}/hero/banner4.webp` },
]

// ── Logo ──────────────────────────────────────────────────────
export const logoImages = {
  main: `${BASE}/logo/logo.svg`,
  alt: `${BASE}/logo/logo.svg`,
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
    category: 'Apartments Overview',
    alt: 'UK Celestique Garden — Master Aerial View',
  },
  {
    id: 2,
    src: `${BASE}/gallery/g2.webp`,
    title: 'Grand Clubhouse & Promenade',
    category: 'Club & Architecture',
    alt: 'UK Celestique Garden — Grand Clubhouse & Promenade',
  },
  {
    id: 3,
    src: `${BASE}/gallery/g3.webp`,
    title: 'Grand Entrance Lobby',
    category: 'Grand Arrival',
    alt: 'UK Celestique Garden — Grand Entrance',
  },
  {
    id: 4,
    src: `${BASE}/gallery/g4.webp`,
    title: 'Living & Dining Area',
    category: 'Luxury Apartments',
    alt: 'UK Celestique Garden — Living and Dining Area',
  },
  {
    id: 5,
    src: `${BASE}/gallery/g5.webp`,
    title: 'Master Bedroom Suite',
    category: 'Luxury Apartments',
    alt: 'UK Celestique Garden — Master Bedroom Suite',
  },
]

// ── Amenities ─────────────────────────────────────────────────
export const amenityImages = [
  { img: `${BASE}/amenities/a5.webp`, label: 'Clubhouses' },
  { img: `${BASE}/amenities/a3.webp`, label: 'Swimming Pool' },
  { img: `${BASE}/amenities/a2.webp`, label: 'Fitness & Sports' },
  { img: `${BASE}/amenities/a4.webp`, label: 'Multipurpose Sports Court' },
  { img: `${BASE}/amenities/a6.webp`, label: 'Work & Social Spaces' },
  { img: `${BASE}/amenities/a1.webp`, label: 'Family & Outdoor' },
  { img: `${BASE}/amenities/yoga-pavilion.webp`, label: 'Reading Lounge & Co-Working' },
  { img: `${BASE}/amenities/security.webp`, label: 'Green & Sustainable Features' },
]

// ── Master Plan ───────────────────────────────────────────────
export const masterplanImages = {
  masterPlan: `${BASE}/masterplan/masterplan.webp`,
  floorPlans: [
    { src: `${BASE}/masterplan/2bhk.webp`, label: '1 BHK Residences', size: 'On Request' },
    { src: `${BASE}/masterplan/2bhk.webp`, label: '2 BHK Residences', size: 'On Request' },
    { src: `${BASE}/masterplan/3bhk.webp`, label: '3 BHK Residences', size: 'On Request' },
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
