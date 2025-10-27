import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: false,
      pwaAssets: { disabled: false, config: true },
      manifest: {
        name: 'kutambula-marketplace',
        short_name: 'kutambula-marketplace',
        description:
          'Um marketplace para empresas e startups publicarem produtos e serviços pode ser uma plataforma poderosa',
        theme_color: '#ffffff',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },
      devOptions: {
        enabled: false,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
  ],

  // 👇 Fallback apenas no modo dev
  server: {
    fs: { allow: ['.'] },
    middlewareMode: false,
  },
  // O fallback é automático em dev se usar react-router-dom (BrowserRouter)
})
