import { SITE_URL } from '../../lib/adani-shantigram-township/config'

export default function robots() {
  const baseUrl = SITE_URL || 'https://adanishantigramtownship.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
