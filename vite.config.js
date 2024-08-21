import fg from 'fast-glob';
import { defineConfig } from 'vite';
import FullReload from 'vite-plugin-full-reload';
import injectHTML from 'vite-plugin-html-inject';
import htmlMinifier from 'vite-plugin-html-minifier';

export default defineConfig(({ command }) => {
  return {
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: 'src',
    build: {
      sourcemap: true,
      rollupOptions: {
        input: fg.sync('./src/*.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'commonHelpers.js',
        },
      },
      outDir: '../dist',
    },
    plugins: [
      injectHTML(),
      FullReload(['./src/**/**.html']),
      htmlMinifier({
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
        collapseWhitespace: true,
      }),
    ],
  };
});
