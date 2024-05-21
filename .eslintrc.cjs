module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@stylistic/js',
    "no-relative-import-paths"
  ],
  rules: {
    "no-relative-import-paths/no-relative-import-paths": [
      "warn",
      { "allowSameFolder": true }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/no-multiple-empty-lines': ['error', {max: 1}],
    '@stylistic/js/eol-last': ["error", "always"]
  },
}
