import { SITE_URL } from '../../lib/uk-celestique-garden/config'

const BASE_URL = 'https://enquiry.proptiger.com/uk-celestique-garden'

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
