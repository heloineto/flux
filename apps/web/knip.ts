import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['proxy.ts'],
  ignore: ['packages/**'],
  exclude: ['exports', 'types'],
};

export default config;
