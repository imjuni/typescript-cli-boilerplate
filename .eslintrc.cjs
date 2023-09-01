module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.eslint.json'],
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ['coverage/**', 'dist/**', '__test__/**', '__tests__/**'],
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'max-len': [
      'error',
      {
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreTrailingComments: true,
        code: 120,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_.+$',
        argsIgnorePattern: '^_.+$',
      },
    ],
    'import/extensions': ['off'],
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    // static function use this: void
    '@typescript-eslint/no-invalid-void-type': ['error', { allowAsThisParameter: true }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['off'],
  },
  overrides: [
    {
      files: ['jest.config.cjs'],
      rules: {
        'import/no-extraneous-dependencies': ['off'],
        '@typescript-eslint/no-unsafe-call': ['off'],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-unsafe-argument': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        '@typescript-eslint/no-unsafe-member-access': ['off'],
      },
    },
    {
      files: ['logger.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/no-unsafe-argument': ['off'],
        '@typescript-eslint/no-non-null-assertion': ['off'],
        '@typescript-eslint/no-unsafe-call': ['off'],
        '@typescript-eslint/no-unsafe-assignment': ['off'],
      },
    },
    {
      files: ['**/__tests__/*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': ['off'],
        'no-console': ['off'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'tsconfig.eslint.json',
      },
    },
  },
};
