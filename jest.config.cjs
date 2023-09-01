module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { isolateModules: true }, '@swc/jest'],
    // '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  testMatch: ['**/__tests__/*.(ts|tsx)', '**/__test__/*.(ts|tsx)'],
  testPathIgnorePatterns: ['/node_modules/', 'example/', 'dist/'],
  setupFilesAfterEnv: ['<rootDir>/.configs/jest.setup.js'],
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/src/$1',
  },
};
