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
  extends: ['eslint:recommended', 'plugin:vue/recommended', '@vue/airbnb'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // recommended by Vetur
    'vue/html-self-closing': 'off',

    'max-len': [
      'off',
      {
        code: 120,
      },
    ],

    // 句末不需要分号
    semi: ['error', 'never'], //never always
    // 尽可能的使用单引号
    quotes: ['error', 'single'], //single double

    // add parens ony when required in arrow function
    'arrow-parens': ['error', 'as-needed'],

    // add new line above comment
    'lines-around-comment': [
      'off',
      {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],

    // 强制使用一致的换行符风"\n" (LF) 和 "\r\n"(CRLF)
    'linebreak-style': 'off',

    // 要求 require() 出现在顶层模块作用域中
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
