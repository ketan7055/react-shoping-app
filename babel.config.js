module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      // Use Expo's Babel preset
      'babel-preset-expo',
    ],
    plugins: [],
  };
};


