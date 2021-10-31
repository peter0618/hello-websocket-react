module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
};
