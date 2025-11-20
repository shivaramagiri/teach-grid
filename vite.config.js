import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/teach-grid/",
  plugins: [react(), ghPages()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  }
})
