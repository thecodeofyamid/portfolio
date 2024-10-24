/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'deep-blue': '#1E3A8A',
				'mustard-yellow': '#F6C453',
				'emerald-green': '#2C7A7B',
				'gray-light': '#D1D5DB',
				'lime-green': '#A3E635',
			},
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				libre: ['Libre Baskerville', 'serif'],
			},
		},
	},
	plugins: [],
};