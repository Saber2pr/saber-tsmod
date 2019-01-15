/**
 * Success
 * @exports
 */
export declare namespace Success {
    namespace Task {
        const initSuccessfully: () => void;
    }
}
/**
 * Error
 * @exports
 */
export declare namespace Fail {
    namespace Task {
        const initFail: (type: "<Package name> cannot be null!" | "package.json is exist!") => void;
    }
    namespace Package {
        namespace Existed {
            /**
             * script
             * @param scriptName
             */
            const script: (scriptName: "start" | "dev") => void;
            /**
             * devDependencie
             * @param devDependenceName
             */
            const devDependencie: (devDependenceName: "typescript" | "webpack") => void;
        }
    }
}
