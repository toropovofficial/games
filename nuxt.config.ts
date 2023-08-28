// https://nuxt.com/docs/api/configuration/nuxt-config

console.log(`
------------------------------
PRODUCT: ${process.env.PRODUCT}
------------------------------
`)
export default defineNuxtConfig({
	devtools: { enabled: true },
	runtimeConfig: {
		// The private keys which are only available server-side
		apiSecret: '123',
		// Keys within public are also exposed client-side
		public: {
			testVar: 'test',
		},
	},
	build: {
		transpile: ['vuetify'],
	},
	components: ['~/components'],
	css: [
		'@/assets/styles/main.scss',
		'vuetify/lib/styles/main.sass',
		// `@/products/stellare2/assets/styles/vars.css`,
	],
})
