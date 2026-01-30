import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // For GitHub Pages - change to '/' for custom domain
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@data': '/src/data',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils'
    }
  }
})
