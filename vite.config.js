import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  getEnvVariables  from '../helpers/getEnvVariables';
const {PORT} = getEnvVariables()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces
    port: parseInt(PORT) || 3000, // Usa el puerto proporcionado o un valor predeterminado
  },
  build: {
    outDir: 'dist', // Carpeta donde se generan los archivos de producción
  },
  plugins: [react()],
})
