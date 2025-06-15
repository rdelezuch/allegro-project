import tailwindcss from "@tailwindcss/vite";
import fs from 'fs'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@vite-pwa/nuxt'],
  pwa: {
    manifest: {
      name: 'Allegro Project',
      short_name: 'AllegroApp',
      description: 'Przykładowa aplikacja Allegro PWA',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: "module",
    }
  },
  css: [
      '~/assets/css/main.css',
      '~/assets/css/style.css'
  ],
  vite: {
    server: {
      https: {
        key: fs.readFileSync('./certs/localhost-key.pem'),
        cert: fs.readFileSync('./certs/localhost.pem')
      }
    },
    plugins: [
      tailwindcss(),
    ],
  },
})
