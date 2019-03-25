module.exports = {
  parser:'babel-eslint',
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx",] }],//在JS文件中允许存在JSX语法
    "global-require":"off",//image指定source时要用require语句
    "indent":["error",4],//缩进规则为4个空格
    "react/jsx-indent":["error",4],//缩进规则为4个空格
    "react/jsx-indent-props":["error",4],//缩进规则为4个空格
    "react/prop-types":["error",{"ignore":["tintColor","navigation"]}],
    "react/no-multi-comp":["error",{"ignoreStateless":true}],
    "react/prefer-stateless-function":["error",{"ignorePureComponents":true}],
    "max-len" : ["error", {code : 150}],
    "import/no-unresolved": [2, { ignore: ['\.img$'] }],
  },
};
