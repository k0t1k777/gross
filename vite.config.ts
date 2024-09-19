import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
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