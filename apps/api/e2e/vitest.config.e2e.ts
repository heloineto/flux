import { resolve } from 'node:path';
import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    root: resolve(__dirname, '../'),
    globalSetup: [resolve(__dirname, 'global-setup.ts')],
  },
  plugins: [swc.vite()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@packages': resolve(__dirname, '../packages'),
    },
  },
});
