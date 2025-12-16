import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: false, // don't automatically open the browser
    port: 3000, // specify the port
  },
  build: {
    outDir: 'build', // specify the output directory
  }
});