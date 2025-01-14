import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill'
import rollupNodePolyFill from 'rollup-plugin-polyfill-node'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: 'tonconnect-manifest.json',
    rollupOptions: {
      plugins: [
        rollupNodePolyFill()
      ]
    }
  },
  define: {
    global: 'globalThis'
  },
  resolve: {
    alias: {
      components: "/src/components",
      'src': path.resolve(__dirname, './src'),
      // {find: 'components', replacement: path.resolve(__dirname, '/src/components')},
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis'
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        })
      ]
    }
  }
})
