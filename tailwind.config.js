/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#003262",
				secondary: "#00B9E8",
				text: "#545454",
			},
			keyframes: {
				bottomToUp: {
					"0%": { opacity: "0", transform: "translateY(100px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				bottomToUp: "bottomToUp 1s ease-out forwards",
			},
		},
	},
	plugins: [],
};

