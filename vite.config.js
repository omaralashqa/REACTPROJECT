import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-react-components/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
     AutoImport({
      imports: ['react'], 
    }),
       Components({
      dirs: ['src/components'], // يقرأ كل المكونات هنا تلقائيًا
      extensions: ['jsx', 'tsx'],
    }),
  ],
})
