declare type TaskName_init = 'package.json' | 'README.md' | 'index.html' | '.gitignore';
declare type TaskName_config = 'tsconfig' | 'webpack' | 'gitignore' | 'tsmod';
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
    namespace Task {
        const initFail: (type: "<Package name> cannot be null!" | "package.json is exist!" | "README.md is existed!") => void;
        const configFail: (type: ".gitignore is existed!" | "tsconfig.json is existed!" | "webpack.config.js is existed!" | "index.html is existed!" | "tsmod.json is existed!") => void;
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
