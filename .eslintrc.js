module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': [2, { props: false }],
    // 'import/prefer-default-export': off,
  },
  settings: {
    resolver: {
      node: {
        paths: ['src'],
      },
    },
  },
};
