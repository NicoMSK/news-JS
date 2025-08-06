declare class Loader {
    constructor(baseLink: any, options: any);
    getResp({ endpoint, options }: {
        endpoint: any;
        options?: {} | undefined;
    }, callback?: () => void): void;
    errorHandler(res: any): any;
    makeUrl(options: any, endpoint: any): string;
    load(method: any, endpoint: any, callback: any, options?: {}): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map