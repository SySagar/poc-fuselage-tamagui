import { defineConfig } from 'vite'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tamaguiPlugin(),
    process.env.NODE_ENV === 'production' ? tamaguiExtractPlugin() : null,
  ],
})
