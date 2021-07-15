const baseRules = require('../base/index')

module.exports = {
    extends: [
        "plugin:jsx-a11y/recommended",
		"airbnb",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/recommended",
		"plugin:unicorn/recommended",
		"plugin:jsdoc/recommended",
		"plugin:react-hooks/recommended"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    rules: {
        ...baseRules,
    },
}