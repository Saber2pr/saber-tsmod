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
        config = "config"
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
        git = "git"
    }
}
/**
 * Log
 */
export declare namespace TerminalLog {
    const Hello: string;
    namespace Help {
        const create: string;
        const config: string;
    }
    namespace Status {
        const modulePath: (path: string) => string;
    }
}