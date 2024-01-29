import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
// vue.config.js
// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: [
//           require('tailwindcss'),
//           require('autoprefixer'),
//         ],
//       },
//     },
//   },
// };
