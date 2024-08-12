import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // GitHub Pages URL yolunu burada belirtin
  plugins: [react()],
});
