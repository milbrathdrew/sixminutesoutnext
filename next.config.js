/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'development' ? '.next' : 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
}

module.exports = nextConfig 