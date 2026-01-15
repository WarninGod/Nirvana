import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Output directory
        outDir: 'dist',
        // Generate source maps for production debugging
        sourcemap: false,
        // Chunk size warning limit (500kb)
        chunkSizeWarningLimit: 500,
        // Manual chunk splitting for optimal caching
        rollupOptions: {
          output: {
            manualChunks: {
              // Vendor chunk for React ecosystem
              'vendor-react': ['react', 'react-dom'],
              // Animation library chunk
              'vendor-motion': ['framer-motion'],
              // Utility libraries
              'vendor-utils': ['clsx', 'tailwind-merge', '@dr.pogodin/react-helmet'],
              // Icons library
              'vendor-icons': ['lucide-react'],
            },
            // Naming pattern for chunks
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
        },
        // Minification settings
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log in production
            drop_debugger: true,
          },
        },
      },
    };
});
