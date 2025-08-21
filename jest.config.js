module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|react-redux" +
      "|@react-native" +
      "|expo" +
      "|expo-modules-core" +
      "|expo-router" +
      "|react-native-reanimated" +
      ")/)",
  ],
};
