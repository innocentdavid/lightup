/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['storage.earlybird.im', 'uploads-ssl.webflow.com', 'assets.website-files.com']
  }
}

module.exports = nextConfig
