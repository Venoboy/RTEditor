module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  rules: {
    'react/no-set-state': 'off',
    'react/prop-types': 'off',
    'no-console': 'off',
  },
  settings: {
    'react': {
      "version": "detect",
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
    // allowImportExportEverywhere: true,
  },
  plugins: [
    'react'
  ]
};
