import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Keep this!
import tailwindcss from '@tailwindcss/vite' // Add this

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Keep React
    tailwindcss(), // Add Tailwind here
  ],
})