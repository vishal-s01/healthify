module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    'src/locales',
    'src/types',
    'src/store/index.ts',
    'src/utils/constant.ts',
    'src/utils/dates.ts',
    'src/utils/validations.ts',
  ],
};
