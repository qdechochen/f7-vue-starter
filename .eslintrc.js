module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    /*
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'import/no-mutable-exports': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-unused-vars': 1,
    'max-len': 0,
    "function-paren-newline": ["error", "consistent"],
    "arrow-parens": ["error", "always"],
    "camelcase": 0,
    "no-mixed-operators": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    */
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
