import { SITE_URL } from '../../lib/spre-villa-plots-khapoli/config'

const BASE_URL = 'https://enquiry.proptiger.com/spre-villa-plots-khapoli'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
