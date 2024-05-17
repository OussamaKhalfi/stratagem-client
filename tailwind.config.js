/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/App.tsx',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#319795',
					light: '#81E6D9',
					dark: '#234E52',
				},
				secondary: {
					DEFAULT: '#4A5568',
					light: '#A0AEC0',
					dark: '#2D3748',
				},
				warning: {
					DEFAULT: '#D69E2E',
					light: '#F6E05E',
					dark: '#B7791F',
				},
				danger: {
					DEFAULT: '#E53E3E',
					light: '#FC8181',
					dark: '#C53030',
				},
				success: {
					DEFAULT: '#38A169',
					light: '#68D391',
					dark: '#2F855A',
				},
				info: {
					DEFAULT: '#3182CE',
					light: '#63B3ED',
					dark: '#2B6CB0',
				},
			},
		},
	},
	plugins: [],
};
