module.exports = {
    extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "prettier"],
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {},
        }
    },
    env: {
        "browser": true,
        "jest": true
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "import/no-extraneous-dependencies": [2, { devDependencies: ["**/test.tsx", "**/test.ts"] }],
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "import/extensions": 0,
        "import/no-default-export": 0,
        "import/prefer-default-export": 0,
        "semi": [2, "never"],
        "comma-dangle": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "space-in-parens": ["error", "always"],
        "new-cap": 0,
        "react/jsx-boolean-value": 0,
        "import/no-cycle": 0,
        "@typescript-eslint/class-name-casing": 0,
        "class-methods-use-this": 0,
        "consistent-return": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "max-len": ["error", { "code": 200 }],
        "arrow-body-style": 0,
        "react/button-has-type": 0,
        "react/prop-types": 0,
        "no-restricted-syntax": 0,
        "no-else-return": 0,
        "@typescript-eslint/no-var-requires": 0,
        "no-prototype-builtins": 0,
        "@typescript-eslint/no-this-alias": 0,
        "prefer-object-spread": 0,
        "@typescript-eslint/camelcase": 0,
        "react/jsx-props-no-spreading": 0,
        "react/no-array-index-key": 0,
        "no-useless-catch": 0,
        "@typescript-eslint/interface-name-prefix": 0,
        "jsx-a11y/label-has-associated-control": 0,
        "no-nested-ternary": 0
    },
    globals: {
        "React": "writable"
    }
}
