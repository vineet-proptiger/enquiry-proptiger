import { NextResponse } from 'next/server'

export async function GET() {
  const content = `User-agent: *
Allow: /raghava-halo-kondapur

Sitemap: https://enquiry.proptiger.com/raghava-halo-kondapur/sitemap.xml
`

  return new NextResponse(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
