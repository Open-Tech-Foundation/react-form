export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  rootDir: '__tests__',
  setupFiles: ['<rootDir>/jest.setup.js'],
  testMatch: [ "**/__tests__/**/*.spec.[jt]s?(x)"]
};
