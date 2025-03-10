import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
  plugins: [react()],
  
  // Set base path for deployment (update this if deploying to a subdirectory)
  base: "/EliteCrow/",

  server: {
    port: 3000,      // Change to your preferred port
    open: true,      // Automatically opens browser on dev server start
    cors: true,      // Enable CORS for API requests
  },

  build: {
    outDir: 'dist',  // Output directory for the production build
    sourcemap: true, // Generate sourcemaps for debugging
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
  },

  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude specific dependencies from optimization
  },

  resolve: {
    alias: {
      '@': '/src', // Use '@' as an alias for the 'src' directory
    },
  },

  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'], // Include assets in build
});
