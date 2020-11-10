module.exports = {
    env: {
        node: true,
    },
    extends: [
        "eslint:recommended",
        "standard",
        "prettier",
        "plugin:security/recommended",
    ],
    plugins: ["security"],
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {},
}
