import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    }),
    tsconfigPaths(),
    {
      name: 'og-middleware',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url === '/api/og') {
            try {
              const { generateOgImage } = await import('./src/components/og-image.tsx');
              const image = await generateOgImage();
              res.setHeader('Content-Type', 'image/png');
              res.setHeader('Cache-Control', 'public, max-age=86400');
              res.end(image);
            } catch (e) {
              console.error(e);
              res.statusCode = 500;
              res.end('Failed to generate image');
            }
          } else {
            next();
          }
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  },
  css: {
    postcss: './postcss.config.js',
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsx: 'automatic',
  },
});