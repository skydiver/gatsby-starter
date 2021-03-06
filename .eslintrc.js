module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  extends: ["standard"],
  plugins: ["standard", "react"],
  rules: {
    "no-var": "error", // optional, recommended when using es6+
    "no-unused-vars": 1, // recommended
    "arrow-spacing": ["error", { before: true, after: true }], // recommended
    indent: ["error", 2],
    "comma-dangle": [
      "error",
      {
        objects: "only-multiline",
        arrays: "only-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],

    // Martín M.
    quotes: ["error", "single"],

    // options to emulate prettier setup
    semi: ["error", "always"],
    "eol-last": ["error", "never"],
    "max-len": ["error", { code: 80 }],
    "template-curly-spacing": ["error", "always"],
    "arrow-parens": ["error", "as-needed"],

    // standard.js
    "space-before-function-paren": [
      "error",
      {
        named: "always",
        anonymous: "always",
        asyncArrow: "always",
      },
    ],

    // standard plugin - options
    "standard/object-curly-even-spacing": ["error", "either"],
    "standard/array-bracket-even-spacing": ["error", "either"],
    "standard/computed-property-even-spacing": ["error", "even"],
    "standard/no-callback-literal": ["error", ["cb", "callback"]],

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}