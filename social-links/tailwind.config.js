module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			transitionProperty: {
				height: "height",
			},
			zIndex: {
				negetive: "-1",
				1: "1",
			},
			rotate: {
				20: "20deg",
				50: "50deg",
				80: "80deg",
			},
			transitionTimingFunction: {
				ease: "cubic-bezier(0.25, 0.1, 0.16, 1)",
			},
			backgroundImage: {
				newsorange: "url('../public/newsorange.png')",
				newsblue: "url('../public/newsblue.png')",
				newspurple: "url('../public/newspurple.png')",
				newsteal: "url('../public/newsteal.png')",
			},
			plugins: [],
		},
	},
};
