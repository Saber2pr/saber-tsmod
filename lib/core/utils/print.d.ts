type TaskName_init = 'package.json' | 'README.md' | 'index.html' | '.gitignore';
type TaskName_config = 'tsconfig' | 'webpack' | 'gitignore';
/**
 * Success
 * @exports
 */
export declare namespace Success {
    namespace Task {
        const initSuccessfully: (taskName: TaskName_init, message?: string) => void;
        const configSuccessfully: (taskName: TaskName_config, message?: string) => void;
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
        const initFail: (type: "<Package name> cannot be null!" | "package.json is exist!" | "README.md is existed!") => void;
        const configFail: (type: ".gitignore is existed!" | "tsconfig.json is existed!" | "webpack.config.js is existed!" | "index.html is existed!") => void;
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
            const devDependencie: (devDependenceName: "webpack" | "typescript") => void;
        }
    }
}
export {};
