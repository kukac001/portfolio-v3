/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			fontFamily: {
				nintendo: ["Nintendo DS BIOS"],
			},
			animation: {
				text: "text 5s ease infinite",
			},
			keyframes: {
				text: {
					"0%, 100%": {
						"background-size": "200% 200%",
						"background-position": "left center",
					},
					"50%": {
						"background-size": "200% 200%",
						"background-position": "right center",
					},
				},
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				dekstop: "#83B799",
				white: "#ffffff",
				green: "#74ee15",
				purple: "#f000ff",
				orange: "#ffac00",
				black: "#000000",
			},
		},
		plugins: [],
	},
};
