module.exports = {
<<<<<<< HEAD
    ...require("@mendix/pluggable-widgets-tools/test-config/jest.enzyme-free.config.js"),
=======
    ...require("@mendix/pluggable-widgets-tools/test-config/jest.config"),
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    /** Prevent usage of "jest-react-hooks-shallow" as it breaks useResetEvent hook. */
    setupFilesAfterEnv: undefined,
    /**
     * `nanoevents` package is ESM module and because ESM is not supported by Jest yet
     * we mark `nanoevents` as a module that should be transformed by ts-jest.
     */
    transformIgnorePatterns: ["node_modules/(?!nanoevents)/"]
};
