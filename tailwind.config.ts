import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{jsx,tsx}',
		'./src/components/**/*.{jsx,tsx}',
		'./src/pages/**/*.{jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			fontFamily: {
				'custom': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
export default config
