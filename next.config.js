/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ["api.rsantos.dev", "localhost", "rsantos.dev"],
  },
};

module.exports = nextConfig;
