export default {
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
      "\\.(css|less|scss|sass)$": "identity-obj-proxy",
      '^../../src/components/DeleteModal/modal.css$': '<rootDir>/__mocks__/modal.css',
    },
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
  };
  