import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from 'vite-plugin-crx'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest: './extension/manifest.json' })],
  build: { outDir: 'dist', emptyOutDir: true }
})
