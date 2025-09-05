// eslint.config.mjs
import { fileURLToPath } from "url";
import { dirname } from "path";

import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    // إعدادات عامة لجميع الملفات
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
    },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      // إضافة أي قواعد أخرى هنا
    },
  },
  {
    // إعدادات خاصة بملفات TypeScript
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // قواعد خاصة بالـ TS فقط
    },
  },
];
