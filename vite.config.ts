// import path from "path"
// import react from "@vitejs/plugin-react"
// import { defineConfig } from "vite"
// // import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
// })
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // Permitir conexiones externas al contenedor
    port: 5173,
    watch: {
      usePolling: true, // Necesario en Windows/Docker para detectar cambios de archivos
    },
  },
})
