declare const Pinyin: {
    compare: typeof compare;
    compareAll: typeof compareAll;
    sort: (obj: any, key: any) => any;
    search: (str: any, search: any) => boolean;
    getFilterArr: (arr: any, search: any, key?: string) => any;
    getFilterArrAll: (arr: any, search: any) => any;
};
declare function compare(val1: any, val2: any): number | undefined;
declare function compareAll(val1: any, val2: any): any;
export default Pinyin;
