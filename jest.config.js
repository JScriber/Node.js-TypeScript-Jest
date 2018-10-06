module.exports = {
    transform: {
        '^.+\.ts$': 'ts-jest'
    },
    moduleFileExtensions: [
        'ts', 'js'
    ],
    testMatch: [
        '**/test/**/*.test.ts'
    ],
    verbose: false,
    testEnvironment: 'node'
}
