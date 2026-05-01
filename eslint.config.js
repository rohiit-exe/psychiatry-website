import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react: reactPlugin,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "warn",
    },
  },
];
