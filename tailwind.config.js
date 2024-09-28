/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
		content: [
			"./src/**/*.{js,ts,jsx,tsx,mdx}",
			"./index.html",
		],
	theme: {
		extend: {
			scale: {
				130: '1.3',
				140: '1.4',
				160: '1.6',
				170: '1.7',
				200: '2',
				250: '2.5',
				300: '3',
				350: '3.5',
				400: '4',
				500: '5',
			},
			height: {
				"0.2": "0.7px",
				"25%": "25%",
				"50%": "50%",
				"75%": "75%",
			},
			width: {
				"25%": "25%",
				"50%": "50%",
				"75%": "75%",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
				"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"tools-bg" : "url('../assets/graphics/tools-bg-image.png')",
			},
			backgroundColor: {
				"background" : "#14181B",
				"primary" : "#F3A203",
				"secondary" : "#212428",
				"footer" : "#141416",
				"nav-mobile" : "#252222",
				"yellow-circle": "#FFCE21"
			},
			colors:{
				"border-navbar" : "#252525",
				"primary" : "#F3A203",
				"secondary" : "#212428",
				"third" : "#FF972F",
				"input" : "#42494E",
				"pagination-inactive" : "#99B2C6",
				"yellow-circle": "#FFCE21",
				"blog-detail-adverb-grey": "#676A7D"
			},
			animation: {
				'spin-slow' : 'spin 3s linear infinite',
			},
			gridTemplateColumns: {
				'fit-content': 'auto',
			},
			flex: {
				'1': '1 1 0%',
				'2': '2 2 0%',
			}
		},
	},
	plugins: [],
}

