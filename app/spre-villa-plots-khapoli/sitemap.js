import { SITE_URL } from '../../lib/spre-villa-plots-khapoli/config'

const BASE_URL = 'https://enquiry.proptiger.com/spre-villa-plots-khapoli'

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
