module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  rules: {
    // Customize rules here
    "react/prop-types": "off", // Disable prop-types check as we're using TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off", // Allow implicit return types for React components
    "prettier/prettier": ["error", { endOfLine: "auto" }], // Ensure code is formatted according to Prettier rules
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the version of React
    },
  },
};
