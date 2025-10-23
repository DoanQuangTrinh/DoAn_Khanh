module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // parser cho TypeScript
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended", // rule TS
  ],
  rules: {
    // Tắt hoàn toàn cảnh báo react/no-unescaped-entities
    "react/no-unescaped-entities": "off",

    // Có thể thêm các rule khác nếu cần
  },
};
