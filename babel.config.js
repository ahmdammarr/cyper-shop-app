module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo','@babel/preset-typescript'],
    plugins: ['react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['src'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
      },
    ],
  ],
  };
};
