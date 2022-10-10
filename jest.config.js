const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  testEnvironment: "jest-environment-jsdom",
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/layouts/(.*)$": "<rootDir>/src/layouts/$1",
    "^@/pages/(.*)$": "<rootDir>/src/pages/$1"
  },
  slowTestThreshold: 5,
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{tsx,ts}",
    "!<rootDir>/src/styles/**",
    "!<rootDir>/src/pages/_app.tsx",
    "!<rootDir>/src/pages/_document.tsx",
    "!<rootDir>/node_modules/**",
    "!<rootDir>/**/__tests__/**",
    "!<rootDir>/**/*.d.ts"
  ],
  clearMocks: true
  // collectCoverage: true
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
