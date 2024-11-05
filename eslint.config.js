import { FlatCompat } from "@eslint/eslintrc-compatible";
const compat = new FlatCompat();

export default compat.extend([
  {
    plugins: {
      jest: pluginJest,
    },
    extends: ["plugin:jest/recommended", "plugin:react/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },
  },
]);
