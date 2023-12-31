/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "quotes": [2, "double", { "avoidEscape": true }],
    "semi": [2, "always"],
    "jsx-quotes": ["error", "prefer-double"]
  },
};
