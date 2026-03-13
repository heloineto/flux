import type { NextConfig } from 'next';
import withSerwistInit from '@serwist/next';

const withSerwist = withSerwistInit({
  swSrc: 'app/sw.ts',
  swDest: 'public/sw.js',
  disable: process.env.NODE_ENV !== 'production',
});

const nextConfig: NextConfig = {
  rewrites: async () => {
    return [
      {
        source: '/flux-host/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/flux-host/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: '/(partido|uf)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
  experimental: {
    optimizePackageImports: [
      '@mantine/core',
      '@mantine/hooks',
      '@phosphor-icons/react',
    ],
  },
};

export default withSerwist(nextConfig);
