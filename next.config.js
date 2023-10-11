/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        hostname: 'mancitiss.duckdns.org',
      },
    ],
  },
};

module.exports = nextConfig;
