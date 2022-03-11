module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react", "react-hooks",
    ],
    "rules": {
        // "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        // "react-hooks/exhaustive-deps": "warn"
        "react/prop-types": "off"
    }
}
