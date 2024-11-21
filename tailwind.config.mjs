/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'head': "linear-gradient(180deg, rgba(196,223,216,0.8) 0%, rgba(243,243,243,1) 100%), url('/img-header-portfolio-mathildedecoux.png')",
			},
		},
	},
	plugins: [],
}
