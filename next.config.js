/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // No basePath needed for root domain deployment
  trailingSlash: true,
}

module.exports = nextConfig 