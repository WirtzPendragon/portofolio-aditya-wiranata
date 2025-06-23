/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/storage/**',
      },
      // Untuk production nanti
      {
        protocol: 'https',
        hostname: 'domain-anda.com',
        pathname: '/storage/**',
      },
    ],
  },
}

module.exports = nextConfig