import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';



export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { displayName: true, fileName: false }]
        ]
      }
    })
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})