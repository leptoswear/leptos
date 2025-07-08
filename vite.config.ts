import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 Adicione isso se estiver no domínio principal (ex: leptoswear.com.br)
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
