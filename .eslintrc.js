module.exports = {
    env: {
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'airbnb',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
      fetch: false,
      __DEV__: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
    ],
    rules: {
      'no-nested-ternary': 'off',
      'no-use-before-define': 'off',
      'no-plusplus': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        { functions: true, classes: true, variables: false },
      ],
      'no-console': ['warn'],
      'spaced-comment': [
        'error',
        'always',
        { markers: ['/'] },
      ],
      'import/prefer-default-export': 'off',
      'class-methods-use-this': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      // TypeScript
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-function-return-type':
        'off',
      '@typescript-eslint/no-unused-expressions': 'error',
  
      // React
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': [
        'warn',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      'react/prop-types': 'off',
      'react/require-default-props': [1, { ignoreFunctionalComponents: true }],
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-underscore-dangle': 'off',
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error', { ignoreTypeValueShadow: true }],
    },
    overrides: [
      {
        files: ['./src/assets/**/*.@(js|ts)'],
        rules: {
          'global-require': 'off',
        },
      },
      {
        files: ['./src/**/*SVG.@(js|jsx|ts|tsx)'],
        rules: {
          '@typescript-eslint/ban-ts-comment': 'off',
        },
      },
  
    ],
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
      },
    },
  };
  