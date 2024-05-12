import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      exclude: ['node_modules', 'test', 'dist', '**/index.ts'],
      include: ['src'],
      provider: 'v8',
    },
  },
});
