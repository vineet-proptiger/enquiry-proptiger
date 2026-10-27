/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) config.cache = false
    return config
  },
  async rewrites() {
    return [
      {
        source: '/adani-shantigram-township/images/:path*',
        destination: '/images/adani-shantigram-township/:path*',
      },
      {
        source: '/adani-shantigram-township/masterplan/:path*',
        destination: '/images/adani-shantigram-township/masterplan/:path*',
      },
      {
        source: '/adani-shantigram-township/home/:path*',
        destination: '/images/adani-shantigram-township/home/:path*',
      },
    ]
  },
}
module.exports = nextConfig
