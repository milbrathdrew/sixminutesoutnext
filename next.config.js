/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sixminutesoutnext',
  assetPrefix: '/sixminutesoutnext/',
}

module.exports = nextConfig 