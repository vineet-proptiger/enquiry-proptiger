import './lnt-theme.css'

import Script from 'next/script'
import { CITY_DISPLAY } from '../../lib/lnt-island-cove-mahim/config'

export const metadata = {
  title: "L&T Island Cove Mahim | Luxury 2/3 BHK Apartments — Price Starting ₹3.50 Cr Onwards",
  description:
    "L&T Island Cove Mahim — Premium 2/3 BHK residences with 87% open space. Price starting @ ₹3.50 Cr** onwards. 170 available units. 6.29 acres, 7 towers, 50+ amenities.",
  alternates: {
    canonical: "https://enquiry.proptiger.com/lnt-island-cove-mahim",
  },
  openGraph: {
    title: "L&T Island Cove Mahim | Luxury 2/3 BHK Apartments",
    description:
      "L&T Island Cove Mahim — Premium 2/3 BHK residences with 87% open space. Price starting @ ₹3.50 Cr** onwards.",
    url: "https://enquiry.proptiger.com/lnt-island-cove-mahim",
    siteName: "PropTiger Enquiry",
    locale: "en_IN",
    type: "website",
  },
}

export default function LntIslandCoveMahimLayout({ children }) {
  return (
    <>
      <Script id="gtag-lnt-island" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </>
  )
}
