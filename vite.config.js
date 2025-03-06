import { defineConfig } from 'vite';
import { NodePackageImporter } from 'sass';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        importer: new NodePackageImporter(),
      },
    },
  },
});

