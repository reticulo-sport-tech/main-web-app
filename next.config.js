/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  transpilePackages: ['lucide-react'],
}

module.exports = nextConfig