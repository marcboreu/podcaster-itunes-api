const { defaults } = require('jest-config');

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testMatch: [
      '**/__tests__/**/*.+(ts|tsx|js)',
      '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/index.tsx', '!src/index.ts'],
    coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
    coverageReporters: ['lcov', 'text-summary'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
  