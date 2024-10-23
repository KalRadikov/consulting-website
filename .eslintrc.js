module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'template-curly-spacing': 'off',
    indent: 'off',
    'no-unused-vars': 'warn',
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
