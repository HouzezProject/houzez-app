/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_S3_IMAGE_SERVICE_HOST],
  }
}

module.exports = nextConfig
