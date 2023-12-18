module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true,
    mocha: true,
  },
  extends: ["standard", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2022, // or a higher version that your project supports
  },
};
