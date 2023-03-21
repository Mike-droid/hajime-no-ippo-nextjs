/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hajime-no-ippo-api.onrender.com',
      'static.wikia.nocookie.net',
      'pm1.narvii.com',
      'cdn-us.anidb.net',
    ],
  },
}

module.exports = nextConfig
