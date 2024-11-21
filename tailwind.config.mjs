/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'head': "linear-gradient(180deg, rgba(196,223,216,0.8) 0%, rgba(243,243,243) 100%), url('/img-header-portfolio-mathildedecoux.png')",
				'gradient-head-green-light': "linear-gradient(180deg, rgba(196,223,216,0.8) 0%, rgba(243,243,243) 100%)",
				'gradient-head-green-dark': "linear-gradient(180deg, rgba(0,115,104,1) 0%, rgba(243,243,243) 100%)",
				'gradient-head-blue-light': "linear-gradient(180deg, rgba(177,208,229,1) 0%, rgba(243,243,243) 100%)",
			},
			fontFamily: {
				'league-script': 'League Script, cursive',
				'ephesis': 'Ephesis, cursive;',
			},
			colors: {
				'moutarde-light' : '#D9A324',
				'moutarde-dark' : '#B5881E',
				'yellow-light' : '#FBC966',
				'yellow-dark' : '#D0B577',
				'beige-light' : '#F9D98E',
				'beige-dark' : '#D0B577',
				'green-light-800' : '#007368',
				'green-light-200' : '#C4DFD8',
				'green-dark-800' : '#006057',
				'green-dark-200' : '#A4BAB4',
				'blue-light' : '#B1D0E5',
				'blue-dark' : '#94AEBF',
				'white-light' : 'rgba(243,243,243)',
			},
		},
	},
	plugins: [],
}
