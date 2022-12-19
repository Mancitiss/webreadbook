/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1',
      },
    ],
  },
};

module.exports = nextConfig;
