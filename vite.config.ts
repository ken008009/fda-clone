import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/' : '/',
  plugins: [
    vue(),
    {
      name: 'rewrite-static-paths',
      enforce: 'post',
      apply: 'build',
      renderChunk(code) {
        return {
          code: code.replace(/(['"])\/static\//g, '$1/static/'),
          map: null
        }
      },
      transformIndexHtml(html) {
        return html.replace(/(['"])\/static\//g, '$1/static/')
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0'
  }
}))
