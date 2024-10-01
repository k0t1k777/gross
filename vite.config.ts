import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import envCompatible from 'vite-plugin-env-compatible';

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), envCompatible()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `@import "./src/styles/variables.scss";
        @import "./src/styles/mixins.scss"; `,
      },
    },
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})