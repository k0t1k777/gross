module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
