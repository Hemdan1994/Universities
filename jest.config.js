export default {
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: 'jsdom', // Set the test environment here
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    '^../../src/components/DeleteModal/modal.css$': '<rootDir>/__mocks__/modal.css',
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // Include TypeScript extensions
};
