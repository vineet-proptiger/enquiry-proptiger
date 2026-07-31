import './raghava-theme.css'

import Script from 'next/script'
import { CITY_DISPLAY } from '../../lib/raghava/config'

export const metadata = {
  title: 'Raghava Halo Hyderabad | Thoughtfully Planned 3 BHK High-Rise Living — From ₹1.7 Cr*',
  description:
    'Raghava Halo — Thoughtfully planned high-rise living in Hyderabad. Three 52-storey towers across 5.5 acres with 90,000 sq.ft. Wellness Clubhouse. Premium 3 BHK residences (1,800–2,455 sq.ft.) built around effortless everyday luxury. Launch price from ₹1.7 Cr*. By Raghava Projects.',
  alternates: {
    canonical: 'https://enquiry.proptiger.com/raghava-halo-kondapur',
  },
  openGraph: {
    title: 'Raghava Halo Hyderabad | Thoughtfully Planned 3 BHK High-Rise Living',
    description:
      'Raghava Halo — Thoughtfully planned high-rise living in Hyderabad. Three 52-storey towers across 5.5 acres with 90,000 sq.ft. Wellness Clubhouse.',
    url: 'https://enquiry.proptiger.com/raghava-halo-kondapur',
    siteName: 'PropTiger Enquiry',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RaghavaLayout({ children }) {
  return (
    <div>
      <Script id="gtag-raghava" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </div>
  )
}
