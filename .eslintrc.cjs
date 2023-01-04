/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "vue/multi-word-component-names": 0,
    "react/jsx-uses-react": 0,
    "react/react-in-jsx-scope": 0,
    "no-debugger": 0,
    "vue/no-reserved-component-names": 0
  },
  globals: {
    defineOptions: "writable",
    defineModel: "writable",
    defineRender: "writable"
  }
};
