import './adani-theams.css'
import { Poppins, Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../../lib/adani-shantigram-township/config'
import localFont from 'next/font/local'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

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
  metadataBase: new URL('https://enquiry.proptiger.com'),
  title: 'Adani Shantigram Township | Luxury 3, 4 ,5 & 6 BHK Apartments in Ahmedabad',
  description: 'Adani Shantigram Township offers luxury 3, 4 ,5 & 6 BHK residences in Shantigram, Ahmedabad. A visionary township by Adani Realty spanning 600 acres. Enquire for details!',
  alternates: {
    canonical: '/adani-shantigram-township',
  },
  openGraph: {
    title: 'Adani Shantigram Township | Luxury 3, 4 ,5 & 6 BHK Apartments in Ahmedabad',
    description: 'Adani Shantigram Township offers luxury 3, 4 ,5 & 6 BHK residences in Shantigram, Ahmedabad. A visionary township by Adani Realty spanning 600 acres. Enquire for details!',
    url: 'https://enquiry.proptiger.com/adani-shantigram-township',
    siteName: 'Adani Shantigram Township',
    images: [
      {
        url: '/adani-shantigram-township/images/home/banner1.webp',
        width: 1200,
        height: 630,
        alt: 'Adani Shantigram Township Ahmedabad',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adani Shantigram Township | Luxury 3, 4 ,5 & 6 BHK Apartments in Ahmedabad',
    description: 'Adani Shantigram Township offers luxury 3, 4 ,5 & 6 BHK residences in Shantigram, Ahmedabad. A visionary township by Adani Realty spanning 600 acres. Enquire for details!',
    images: ['/adani-shantigram-township/images/home/banner1.webp'],
  },
  icons: {
    icon: '/adani-shantigram-township/images/home/logo.png',
    shortcut: '/adani-shantigram-township/images/home/logo.png',
  },
}

export default function AdaniLayout({ children }) {
  return (
    <div className="nested-layout-wrapper">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <div className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init-adani">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </div>
    </div>
  )
}
