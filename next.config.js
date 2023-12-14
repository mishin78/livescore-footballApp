/** @type {import('next').NextConfig} */
const nextConfig = {} 

module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'crests.football-data.org',
        },
      ],
    },
  }

module.exports = nextConfig
