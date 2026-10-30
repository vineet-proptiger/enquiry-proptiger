import './uk-celestique.css'
import Script from 'next/script'
import { CITY_DISPLAY, SITE_URL } from '../../lib/uk-celestique-garden/config'

export const metadata = {
  metadataBase: new URL('https://enquiry.proptiger.com'),
  title: 'UK Celestique Garden Goregaon East | 1, 2 & 3 BHK Luxury Apartments Mumbai',
  description:
    'UK Celestique Garden in Goregaon East, Mumbai by UK Realty offers premium 1, 2 & 3 BHK luxury residences with private decks overlooking lush Aarey landscape. Starting @ ₹1.05 Cr*. New Launch.',
  alternates: {
    canonical: 'https://enquiry.proptiger.com/uk-celestique-garden',
  },
  openGraph: {
    title: 'UK Celestique Garden Goregaon East | 1, 2 & 3 BHK Luxury Apartments Mumbai',
    description:
      'UK Celestique Garden in Goregaon East, Mumbai by UK Realty offers premium 1, 2 & 3 BHK luxury residences with private decks overlooking lush Aarey landscape. Starting @ ₹1.05 Cr*. New Launch.',
    url: 'https://enquiry.proptiger.com/uk-celestique-garden',
    siteName: 'PropTiger Enquiry',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Celestique Garden Goregaon East | 1, 2 & 3 BHK Luxury Apartments Mumbai',
    description:
      'UK Celestique Garden in Goregaon East, Mumbai by UK Realty offers premium 1, 2 & 3 BHK luxury residences with private decks overlooking lush Aarey landscape. Starting @ ₹1.05 Cr*. New Launch.',
  },
  icons: {
    icon: [
      { url: '/images/uk-celestique-garden/favicon/fav.webp', type: 'image/webp' },
      { url: '/images/uk-celestique-garden/favicon/fav.png', type: 'image/png' },
    ],
    shortcut: '/images/uk-celestique-garden/favicon/fav.webp',
    apple: '/images/uk-celestique-garden/favicon/fav.webp',
  },
}

export default function UkCelestiqueGardenLayout({ children }) {
  return (
    <div className="uk-celestique-garden font-sans text-dark antialiased">
      <link rel="icon" href="/images/uk-celestique-garden/favicon/fav.webp" type="image/webp" />
      <link rel="shortcut icon" href="/images/uk-celestique-garden/favicon/fav.webp" type="image/webp" />
      <link rel="apple-touch-icon" href="/images/uk-celestique-garden/favicon/fav.webp" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <Script id="gtag-uk-celestique" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </div>
  )
}
