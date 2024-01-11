/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testing-luckito-backend.rnssol.com',
        pathname: '/api/**',
      },
    ],
  },
};

module.exports = nextConfig;
