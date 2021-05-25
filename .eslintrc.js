module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "indent": ["off", 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": [0 ,"error", "windows"],
    'space-before-function-paren': 0,
    'arrow-parens': 'off',
    "global-require": 0,
    'max-len' : ["error", {code : 300}],
    "no-unused-vars": 'off'
  },
};
