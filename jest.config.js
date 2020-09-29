module.exports = {
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },
  moduleFileExtensions: ['js'],
  testResultsProcessor: 'jest-sonar-reporter',
  testMatch: ['<rootDir>/__test__/**/*.test.js']
}
