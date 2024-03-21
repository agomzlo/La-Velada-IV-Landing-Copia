import animations from '@agomzlo11/tailwindcss-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary':'#333',
				'secondary':'#ddd', 
			}
		},
	},
	plugins: [animations],
}
