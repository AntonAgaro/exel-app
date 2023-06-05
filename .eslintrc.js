module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env'],
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'require-jsdoc': 'off',
  },
  extends: ['eslint:recommended', 'google'],
};
