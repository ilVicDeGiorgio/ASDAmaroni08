import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  sassOptions: {
    prependData: `@import "./styles/global.scss";`,
  },

  images: {
    domains: [
      '1000marche.net',
      'upload.wikimedia.org',
      'www.maestridelcalcio.com',
      'www.logofantacalcio.it',
    ],
  },
});
