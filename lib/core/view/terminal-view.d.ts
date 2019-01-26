/**
 * Options
 */
export declare namespace Options {
    /**
     * Params
     *
     * @enum {number}
     */
    enum Params {
        init = "init",
        create = "create",
        config = "config",
        egg = "saber2pr"
    }
    /**
     * ConfigItems
     *
     * @export
     * @enum {number}
     */
    enum ConfigItems {
        ts = "ts",
        webpack = "webpack",
        git = "git",
        rollup = "rollup"
    }
}
/**
 * Log
 */
export declare namespace TerminalLog {
    const Hello: string;
    namespace Select {
        const config = "\n    config webpack or rollup?(No): \n      1. webpack\n      2. rollup\n    [select(1|2)]:";
    }
    namespace Help {
        const create: string;
        const config: string;
    }
    namespace Status {
        const modulePath: (path: string) => string;
    }
}
