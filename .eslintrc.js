module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': 0, // Disables prettier
    'react-native/no-unused-styles': 1,
    'no-duplicate-imports': 1,
    'no-console': 'error',
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react/no-unused-prop-types': 2,
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation'],
        skipUndeclared: true,
      },
    ],
  },
};
