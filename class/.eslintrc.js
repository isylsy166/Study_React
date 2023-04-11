module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: [
      "plugin:react/recommended",
      "standard-with-typescript",
      "prettier",
   ],
   overrides: [],
   parserOptions: {
      project: "./class/tsconfig.json",
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["react"],
   settings: {
      react: {
         version: "detect",
      },
   },
   rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
   },
};
