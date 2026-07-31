import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /optima-rajarhat

Sitemap: https://enquiry.proptiger.com/optima-rajarhat/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
