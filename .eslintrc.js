module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 6,
    project: './tsconfig.json',
    "jsx": true
  },
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"],
      "aspects": ["invalidHref", "preferButton"]
    }]
  },
};
