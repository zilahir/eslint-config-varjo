module.exports = {
	indent: ["error", "tab"],
	"no-tabs": "off",
	"object-curly-newline": "off",
	"object-curly-spacing": [
		"error",
		"always",
		{
			objectsInObjects: false,
		},
	],
	"no-console": [
		"error",
		{
			allow: ["error"],
		},
	],

	"semi": [2, "never"],
	"arrow-parens": [1, "as-needed"],
	"unicorn/prevent-abbreviations": 0,
	"unicorn/filename-case": 1,
	"unicorn/no-nested-ternary": 1,
	"unicorn/no-for-loop": 2,
	"unicorn/consistent-function-scoping": 2,
	"unicorn/filename-case": [
		"error",
		{
			"case": "camelCase"
		}
	],

	// Import order
	"import/order": [
		"error",
		{
			groups: [
				["builtin", "external"],
			],
			"newlines-between": "always",
		},
	],
};