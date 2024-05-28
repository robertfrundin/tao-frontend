import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: 'tonconnect-manifest.json',
  },
  resolve: {
    alias: {
      components: "/src/components",
      // {find: 'components', replacement: path.resolve(__dirname, '/src/components')},
    },
  },
})
