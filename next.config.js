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
      {
        source: '/uk-celestique-garden/images/:path*',
        destination: '/images/uk-celestique-garden/:path*',
      },
      {
        source: '/uk-celestique-garden/favicon/:path*',
        destination: '/images/uk-celestique-garden/favicon/:path*',
      },
      {
        source: '/spre-villa-plots-khapoli/images/:path*',
        destination: '/images/spre-villa-plots-khapoli/:path*',
      },
      {
        source: '/spre-villa-plots-khapoli/favicon/:path*',
        destination: '/images/spre-villa-plots-khapoli/favicon/:path*',
      },
    ]
  },
}
module.exports = nextConfig
