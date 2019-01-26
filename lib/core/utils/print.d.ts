/**
 * Success
 * @exports
 */
export declare namespace Success {
    namespace Task {
        const successfully: (taskName: string, message?: string) => void;
        const createSuccessfully: (filePath: string) => void;
    }
}
/**
 * Error
 * @exports
 */
export declare namespace Fail {
    namespace Find {
        const noTsmodFile: () => void;
    }
    namespace Task {
        const initFail: (type: string) => void;
        const configFail: (type: string) => void;
        const createFail: (name: string) => void;
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
            const devDependencie: (devDependenceName: "typescript" | "webpack" | "rollup" | "rollup-plugin-commonjs") => void;
        }
    }
}
