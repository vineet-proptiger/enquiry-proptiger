import './optima-theme.css'

import Script from 'next/script'
import { CITY_DISPLAY } from '../../lib/optima-rajarhat/config'

export const metadata = {
  title: 'Srijan Optima Rajarhat | Affordable 2 & 3 BHK Flats — Price Starting ₹65 Lacs*',
  description:
    'Srijan Optima — Premium 2 & 3 BHK affordable residences on Rajarhat Main Road, Kolkata. 11.3 acres township with 70% open green spaces. Price starting ₹65 Lakhs* onwards. By Srijan Realty.',
}

export default function OptimaRajarhatLayout({ children }) {
  return (
    <>
      <Script id="gtag-optima" strategy="beforeInteractive">{`
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      `}</Script>
      {children}
    </>
  )
}
