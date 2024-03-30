import { defineConfig } from 'vite'
import { tamaguiExtractPlugin, tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react';
import config from './src/tamagui.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tamaguiPlugin(config),
    process.env.NODE_ENV === 'production' ? tamaguiExtractPlugin(config) : null,
  ],
})
