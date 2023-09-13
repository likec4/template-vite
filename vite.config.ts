import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import watchAndRun from 'vite-plugin-watch-and-run'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      react(),
      watchAndRun([
        {
          name: 'likec4',
          watch: resolve(__dirname, 'src/**/*.c4'),
          run: 'npm run generate',
          delay: 300
        }
      ])
    ]
})
