/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#FEBFBB",
				secondary: "#73FF71",
				tertiary: "#F1FF9F",
				headingColor: "rgba(0, 0, 0, 0.4)",
				paragraph: "rgb(122, 122, 122)",
			},
			fontFamily: {
				grotesk: ["Space Grotesk", "sans-serif"],
				DMSans: ["DM Sans", "sans-serif"],
			},
			opacity: {
				100: "1",
			},
			boxShadow: {
				box: "5px 5px 0px 0px",
				circle: "2px 2px 0px 0px"
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "767px",
			md: "1025px",
			lg: "1400px",
			xl: "1700px",
		},
	},
	plugins: [],
};

