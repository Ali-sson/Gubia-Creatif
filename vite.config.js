import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ghPages()
  ],
  base: '/Gubia-Creatif/',
})
