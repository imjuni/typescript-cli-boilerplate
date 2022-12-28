module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['__test__/*', '__tests__/*', 'dist/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    '@typescript-eslint/indent': 'off',
    'max-len': ['error', { code: 120 }],
    'import/no-unresolved': 'off',

    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/extensions.md
    // ESM project always need extension .js
    'import/extensions': ['error', 'always'],

    'import/order': ['off'],

    'prettier/prettier': 'error',
  },
  settings: {
    // 'import/resolver': {
    //   typescript: {
    //     alwaysTryTypes: true,
    //   },
    // },
  },
};
