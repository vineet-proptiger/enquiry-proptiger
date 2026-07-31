import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /lnt-island-cove-mahim

Sitemap: https://enquiry.proptiger.com/lnt-island-cove-mahim/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
