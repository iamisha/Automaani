// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://automaani.com/',
  plugins: [react()],
  server: {
    port: 3000,
  },
});
