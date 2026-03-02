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
				name: 'Kutambula',
				short_name: 'Kutambula',
				description: 'Kutambula é um marketplace que unifica compradores e vendedores, oferecendo uma plataforma segura',
				theme_color: '#F28F38',
				background_color: '#ffffff',
				display: 'standalone',
				start_url: '/',
				scope: '/',
				icons: [
					{
						src: '/favicon-16x16.png',
						sizes: '16x16',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/favicon-32x32.png',
						sizes: '32x32',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/android-chrome-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any'
					},
					{
						src: '/apple-touch-icon.png',
						sizes: '180x180',
						type: 'image/png',
						purpose: 'any'
					}
				]
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
