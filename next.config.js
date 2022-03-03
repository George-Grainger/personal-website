const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
  // experimental: {
  //   outputStandalone: true
  // }
};

module.exports = withBundleAnalyzer({ nextConfig });
