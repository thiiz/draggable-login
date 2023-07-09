/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
