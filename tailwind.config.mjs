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

				'gradient-head': "linear-gradient(180deg, rgba(190,190,190,0.8)  0%, rgba(243,243,243) 100%), url('/img-header-portfolio-mathildedecoux.png')",
			},
			fontFamily: {
				'league-script': 'League Script, cursive',
				'ephesis': 'Ephesis, cursive;',
				'quicksand': 'Quicksand, sans-serif;',
			},
			colors: {
				'moutarde-light' : 'var(--moutarde-light)',
				'moutarde-dark' : 'var(--moutarde-dark)',
				'yellow-light' : 'var(--yellow-light)',
				'yellow-dark' : 'var(--yellow-dark)',
				'beige-light' : 'var(--beige-light)',
				'beige-dark' : 'var(--beige-dark)',
				'green-light-800' : 'var(--green-light-800)',
				'green-light-200' : 'var(--green-light-200)',
				'green-dark-800' : 'var(--green-dark-800)',
				'green-dark-200' : 'var(--green-dark-200)',
				'blue-light' : 'var(--blue-light)',
				'blue-dark' : 'var(--blue-dark)',
				'white-light' : 'var(--white-light)',
			},
		},
	},
	plugins: [],
}
