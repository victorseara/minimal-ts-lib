import { globSync } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const outDir = path.resolve(__dirname, 'dist');
const ignoreFiles = ['**/*.test.ts', '**/*.spec.ts', '**/*.d.ts'];

export default defineConfig({
  plugins: [dts({ outDir, exclude: ignoreFiles })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      input: Object.fromEntries(
        globSync('src/**/*.{ts,tsx}', { ignore: ignoreFiles }).map((file) => [
          path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length),
          ),
          fileURLToPath(new URL(file, import.meta.url)),
        ]),
      ),
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        dir: outDir,
      },
    },
  },
});
