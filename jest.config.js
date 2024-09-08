module.exports = {
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
};
