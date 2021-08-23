const baseRules = require('../base/index')

module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    extends: [
        "airbnb-typescript",
        "plugin:jest/recommended",
        "plugin:unicorn/recommended",
        "plugin:jsdoc/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        "@typescript-eslint"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
        project: "./tsconfig.json"
    },
    settings: {
        "import/resolver": {
            typescript: {
                extensions: [".js", ".ts", ".tsx", "jsx"]
            }
        }
    },
    rules: {
        ...baseRules,
    },
}
