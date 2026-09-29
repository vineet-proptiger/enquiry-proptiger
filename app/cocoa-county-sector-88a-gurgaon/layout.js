import './cocoa-theme.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Open_Sans, Montserrat, Cormorant_Garamond, Poppins } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/cocoa-county-sector-88a-gurgaon/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://cocoacountysector88a.co.in'),
  title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
  description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
  alternates: {
    canonical: 'https://cocoacountysector88a.co.in/new-launch',
  },
  openGraph: {
    title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
    description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
    url: 'https://cocoacountysector88a.co.in/new-launch',
    siteName: 'Cocoa County',
    images: [
      {
        url: '/images/cocoa-county-sector-88a-gurgaon/hero/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Cocoa County Sector 88A Gurgaon',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cocoa County Sector 88A | Luxury 3 & 4 BHK Gurgaon',
    description: "Cocoa County in Sector 88A, Dwarka Expressway, Gurgaon offers luxury 3 & 4 BHK homes with world-class amenities by County Group. Enquire now for brochure!",
    images: ['/images/cocoa-county-sector-88a-gurgaon/hero/banner1.webp'],
  },
  icons: {
    icon: '/images/cocoa-county-sector-88a-gurgaon/favicon/fav.webp',
  },
}

import SmoothScroll from '../../components/cocoa-county-sector-88a-gurgaon/SmoothScroll'

export default function RootLayout({ children }) {  
  return (
    <div className='nested-layout-wrapper'>
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <div>
        <Script
          id="json-ld-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Cocoa County Sector 88A",
              "url": "https://cocoacountysector88a.co.in/new-launch",
              "logo": "https://cocoacountysector88a.co.in/images/cocoa-county-sector-88a-gurgaon/logo/Logo.webp",
              "image": "https://cocoacountysector88a.co.in/images/cocoa-county-sector-88a-gurgaon/hero/banner1.webp",
              "description": "Cocoa County, Gurgaon's premium residential development in Sector 88A offering 3/4 BHK luxury residences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sector 88A, Dwarka Expressway",
                "addressLocality": "Gurgaon",
                "addressRegion": "Haryana",
                "postalCode": "122505",
                "addressCountry": "IN"
              },
              "telephone": "+919718344024",
              "priceRange": "₹ 4 Crore Onwards",
              "sameAs": [
                "https://cocoacountysector88a.co.in/new-launch"
              ]
            })
          }}
        />
      </div>
      <div className={`${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} ${poppins.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`} 
        </Script>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </div>
    </div>
  )
}
