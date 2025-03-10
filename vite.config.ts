import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/EliteCrow/", // Change this to the correct deployment subpath
});
