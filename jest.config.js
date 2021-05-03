module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleNameMapper: {
    "\\.(css|scss|less)$": "<rootDir>/src/styleMock.js",
  },
};
