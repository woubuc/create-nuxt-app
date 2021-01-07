const colors = require('tailwindcss/colors');

module.exports = {
	theme: {
		extend: {},
	},

	variants: {
		extend: {
			cursor: ['disabled'],
			outline: ['focus-visible'],
			margin: ['hover', 'focus', 'focus-visible'],
			padding: ['hover', 'focus', 'focus-visible'],
			textColor: ['disabled', 'focus-visible'],
			backgroundColor: ['disabled', 'focus-visible'],
			ringColor: ['focus-visible'],
			ringWidth: ['focus-visible'],
			borderRadius: ['focus-visible'],
			transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
		},
	},
};
