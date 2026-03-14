import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['source.config.ts', 'app/**', 'content/**'],
  exclude: ['exports', 'types'],
  ignoreDependencies: [
    '@next/eslint-plugin-next',
    'postcss-preset-mantine',
    'postcss-simple-vars',
    'shiki',
  ],
};

export default config;
