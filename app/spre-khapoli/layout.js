import './spre.css'
import Script from 'next/script'
import { CITY_DISPLAY, SITE_URL } from '../../lib/spre-villa-plots-khapoli/config'

export const metadata = {
  metadataBase: new URL('https://enquiry.proptiger.com'),
  title: 'SPRE Villa Plots Khopoli | Luxury Residential Plots',
  description:
    'SPRE Villa Plots at Khopoli offers exclusive residential villa plots with modern lifestyle amenities. New Launch.',
  alternates: {
    canonical: 'https://enquiry.proptiger.com/spre-villa-plots-khapoli',
  },
  openGraph: {
    title: 'SPRE Villa Plots Khopoli | Luxury Residential Plots',
    description:
      'SPRE Villa Plots at Khopoli offers exclusive residential villa plots with modern lifestyle amenities. New Launch.',
    url: 'https://enquiry.proptiger.com/spre-villa-plots-khapoli',
    siteName: 'PropTiger Enquiry',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SPRE Villa Plots Khopoli | Luxury Residential Plots',
    description:
      'SPRE Villa Plots at Khopoli offers exclusive residential villa plots with modern lifestyle amenities. New Launch.',
  },
  icons: {
    icon: [
      { url: '/images/spre-villa-plots-khapoli/favicon/fav.webp', type: 'image/webp' },
      { url: '/images/spre-villa-plots-khapoli/favicon/fav.png', type: 'image/png' },
    ],
    shortcut: '/images/spre-villa-plots-khapoli/favicon/fav.webp',
    apple: '/images/spre-villa-plots-khapoli/favicon/fav.webp',
  },
}

export default function SpreVillaPlotsKhapoliLayout({ children }) {
  return (
    <div className="spre-villa-plots-khapoli font-sans text-dark antialiased">
      <link rel="icon" href="/images/spre-villa-plots-khapoli/favicon/fav.webp" type="image/webp" />
      <link rel="shortcut icon" href="/images/spre-villa-plots-khapoli/favicon/fav.webp" type="image/webp" />
      <link rel="apple-touch-icon" href="/images/spre-villa-plots-khapoli/favicon/fav.webp" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <Script id="gtag-spre-villa" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </div>
  )
}
