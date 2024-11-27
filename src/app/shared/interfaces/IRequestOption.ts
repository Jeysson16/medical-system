export class RequestOption {
    static endpoint: string;

    url: string | any;
    resource: string;
    request: any;
    type: string = "JSON";
    json: boolean = true;
    method: MethodHttp;
    excludeLoader: string = "0";
    pathVariables: (string | number | boolean)[] = [];
    queryParams: { key: string; value: string | number }[] = [];
}

type MethodHttp = "GET" | "POST" | "PUT" | "DELETE";
