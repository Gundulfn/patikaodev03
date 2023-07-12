export class Utility {

    // Returns a list which matches all query params
    static filterListByQueryParams(list: any[], queryParams: any): any | undefined {
        return list.filter(element => {
            for (const key in queryParams) {
                if (!element.hasOwnProperty(key) || element[key] !== queryParams[key]) {
                    return false;
                }
            }
            return true;
        });
    }
}