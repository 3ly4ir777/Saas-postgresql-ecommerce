import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // <-- Cambiamos node por vercel

export default defineConfig({
  output: 'server',
  // Cambiamos a vercel() para que sea 100% compatible con la nube de Vercel
  adapter: vercel(), 
  
  integrations: [
    tailwind({ nesting: true }), 
    react()
  ],

  vite: {
    ssr: {
      noExternal: ['auth0'],
    },
    optimizeDeps: {
      exclude: ['auth0'],
    },
  },

});