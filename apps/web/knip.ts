import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['app/**/*.{ts,tsx}', 'steiger.config.ts', 'scripts/**', 'e2e/**'],
  ignore: ['packages/**', 'src/shared/api/orval/**'],
  exclude: ['exports', 'types'],
  ignoreDependencies: [
    '@hookform/resolvers',
    'motion',
    '@cspell/dict-es-es',
    '@cspell/dict-pt-br',
    '@eslint/eslintrc',
    '@next/eslint-plugin-next',
    '@vitest/coverage-v8',
    'rimraf',
  ],
};

export default config;
