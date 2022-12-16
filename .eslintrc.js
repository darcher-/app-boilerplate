/*eslint no-restricted-imports: ["error", "fs"]*/
module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
    node: true,
    serviceworker: true,
    worker: true,
  },
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'react-app',
    'react-app/jest',
  ],
  ignorePatterns: ['**/*.test.*', '**/*.spec.*', '**/*.config.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'babel', 'prettier', 'react', 'unicorn'],
  //   rules: {
  //     'import/extensions': [
  //       'error',
  //       'ignorePackages',
  //       {
  //         js: 'never',
  //         jsx: 'never',
  //         ts: 'never',
  //         tsx: 'never',
  //       },
  //     ],
  //     indent: 'error',
  //     'no-console': 0,
  //     'no-debugger': 'off',
  //     'no-multi-spaces': 'error',
  //     'no-multiple-empty-lines': 'error',
  //     'no-use-before-define': 'error',
  //     'no-var': 'error',
  //     'prefer-const': 'error',
  //     'react/jsx-filename-extension': [
  //       'error',
  //       {
  //         extensions: ['.jsx', '.tsx'],
  //       },
  //     ],
  //     semi: 'error',
  //     '@typescript-eslint/semi': 'error',
  //     'space-in-parens': 'error',
  //     '@typescript-eslint/space-in-parens': 'error',
  //   },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
