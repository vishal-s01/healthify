module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:jest/recommended', 'prettier'],
  ignorePatterns: ['coverage/'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'prettier/prettier': 0,
    'comma-dangle': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-boolean-value': 0,
  },
};
