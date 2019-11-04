module.exports = {
  extends: ['airbnb', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  globals: {
    document: false,
    window: false,
  },
}
