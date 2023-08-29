import path from 'path'
import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => {
						return ['client-only', 'nuxt-link'].includes(tag)
					},
				},
			},
		}),
		tsconfigPaths(),
	],
	test: {
		globals: true,
		environment: 'jsdom',
		css: {
			modules: { classNameStrategy: 'non-scoped' },
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'),
			'~': path.resolve(__dirname, './'),
		},
	},
})
