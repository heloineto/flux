import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['proxy.ts', 'scripts/**', 'e2e/**'],
  ignore: ['packages/**'],
  exclude: ['exports', 'types'],
};

export default config;
