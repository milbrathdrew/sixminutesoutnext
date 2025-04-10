/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  outDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
}

module.exports = nextConfig 