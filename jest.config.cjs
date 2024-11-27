module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@headlessui/react|react-icons)"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
