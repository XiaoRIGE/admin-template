module.exports = {
  root: true,
  env: {
    node: true,
  },
  /**
   * eslint:recommended 引入eslint的核心功能，并且报告一些常见的共同错误
   * plugin:vue/recommended
   * @vue/airbnb https://github.com/vuejs/eslint-config-airbnb/tree/main/packages/eslint-config-airbnb#readme
   */
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    'prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // // 要求 require() 出现在顶层模块作用域中
    'global-require': 'off',

    'no-param-reassign': [
      'off',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
  },
}
