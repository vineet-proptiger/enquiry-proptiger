import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /shriram-codename-pudhiya

Sitemap: https://enquiry.proptiger.com/shriram-codename-pudhiya/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
