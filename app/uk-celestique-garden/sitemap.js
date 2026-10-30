import { SITE_URL } from '../../lib/uk-celestique-garden/config'

const BASE_URL = 'https://enquiry.proptiger.com/uk-celestique-garden'

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
