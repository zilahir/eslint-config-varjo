const baseRules = {
	"indent": 0,
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
	"arrow-parens": [1, "as-needed"],

	// react
	"react/jsx-indent": ["error", "tab"],
	"react/jsx-indent-props": ["error", "tab"],
	"react/jsx-props-no-spreading": 0,

	// typescript-eslint
	"@typescript-eslint/indent": ["error", "tab"],

	// unicorn
	"unicorn/no-null": 0,
	"unicorn/prevent-abbreviations": 0,
	"unicorn/filename-case": [
		"error",
		{
			"case": "camelCase",
			"ignore": [
				"^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*\\.tsx$",
				"^[a-z]+(?:[A-Z][a-z0-9]+)*\\.test\\.ts$",
				"^[A-Z][a-z0-9]+(?:[A-Z][a-z0-9]+)*\\.test\\.ts$"
			]
		}
	],
	"unicorn/no-nested-ternary": 1,
	// "unicorn/no-for-loop": 2, 					// seems like unicorn turn on this rule by default
	// "unicorn/consistent-function-scoping": 2, 	// seems like unicorn turn on this rule by default

	//jsdoc
	"jsdoc/require-param-description": 0,

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
