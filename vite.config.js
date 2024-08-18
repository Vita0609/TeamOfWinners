import glob from 'glob';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },

          assetFileNames: ({ name }) => {
            if (name) {
              const relativePath = name.includes('src/')
                ? name.split('src/')[1]
                : name;
              return `assets/${relativePath}`;
            }
            return 'assets/[name][extname]';
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
      assetsDir: 'assets',
    },
    resolve: {
      alias: {
        '@img': resolve(__dirname, 'src/img'),
      },
    },
    plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
  };
});
