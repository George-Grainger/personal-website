const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-UK', 'fr'],
    defaultLocale: 'en-UK'
  }
  // experimental: {
  //   outputStandalone: true
  // },
};

module.exports = withBundleAnalyzer(nextConfig);
