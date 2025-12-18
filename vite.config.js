import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // -----------------------------------------------------------------------
  // IMPORTANTE:
  // 1. Para trabajar en tu PC (npm run dev): Deja la línea de abajo COMENTADA (con //).
  // 2. Para subir a GitHub (npm run deploy): Quítale las // para activarla.
  // -----------------------------------------------------------------------
  
  base: "/TFI-HotelEnricar/",
})