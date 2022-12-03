/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ // пути для подключения стилей
		'./pages/**/*.{js,jsx,ts,tsx,html}',
		'./components/**/*.{js,jsx,ts,tsx,html}',
		'./src/**/*.{js,jsx,ts,tsx,html}',
	],
	theme: {
		fontFamily: {
			primary: 'Poppins',
			body: 'monospace',
		},
		container: {
			padding: {
				DEFAULT: '1rem',
				lg: '3rem',
			},
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		extend: {
			content: {
				about: 'url("/src/assets/img/outline-text/about.svg")',
				portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
				services: 'url("/src/assets/img/outline-text/services.svg")',
				testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
				contact: 'url("/src/assets/img/outline-text/contact.svg")',
			},
			colors: {
				primary: '#050402',
				secondary: '#1C1D24',
				tertiary: '#131419',
				accent: {
					DEFAULT: '#ac6b34',
					hover: '#925a2b',
				},
				paragraph: '#878e99',
			},
		},
	},
	plugins: [],
}
