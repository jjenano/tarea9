module.exports = {
  globals: {
    'ts-jest': {
      skipBabel: true
    }
  },
  moduleFileExtensions: ['js'],
  testResultsProcessor: 'jest-junit',
  testMatch: ['<rootDir>/__test__/**/*.test.js']
}
