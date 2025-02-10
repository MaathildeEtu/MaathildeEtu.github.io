/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				// 'gradient-head': "linear-gradient(180deg, rgba(196,223,216,0.8) 0%, rgba(243,243,243) 100%), url('/img-header-portfolio-mathildedecoux.png')",
				// 'gradient-head': "linear-gradient(180deg, rgba(196,223,216,0.8) 0%, rgba(243,243,243) 100%), url('/img-header-portfolio-mathildedecoux.png')",
				// 'gradient-head': "linear-gradient(180deg, rgba(0,115,104,1) 0%, rgba(243,243,243) 100%)",
				// 'gradient-head': "linear-gradient(180deg, rgba(177,208,229,1) 0%, rgba(243,243,243) 100%)",

				//'gradient-head': "linear-gradient(180deg, rgba(190,190,190,0.8)  0%, rgba(243,243,243) 100%), url('/img-header-portfolio-mathildedecoux.png')",


				// Image de Fond - Ordinateur à droite
				// 'fond-index' : "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 100%), url('/img-background-right-mathilde-decoux-portfolio.png')",
				// Image de Fond - Ordinateur à gauche
				'fond-index' : "linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.8) 100%), url('/img-background-left-mathilde-decoux-portfolio.png')",
			},
			fontFamily: {
				'league-script': 'League Script, cursive',
				'ephesis': 'Ephesis, cursive;',
				'quicksand': 'Quicksand, sans-serif;',
				'gliker': 'gliker, sans-serif',
				'avenir': 'avenir, sans-serif',
			},
			colors: {
				// Green
				'green-light':'#c4d2ba',
				'green-base':'#8fb871', // Base Green - Primary 
				'green-dark':'#669942',
				// Yellow
				'yellow-light':'#ffdd97',
				'yellow-base':'#fbc75b', // Base Yellow - Secondary
				'yellow-dark':'#feb627',
				// Blue 
				'blue-light':'#B1D0E5',
				'blue-dark':'#94AEBF',
				'blue-base':'#242551', // Base Blue - Texte 
			},
		},
	},
	plugins: [],
}
