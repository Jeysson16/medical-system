import { Injectable, inject } from "@angular/core";
import { RequestOption } from "../interfaces/IRequestOption";
import { Observable } from "rxjs";
import { HttpRequestService } from "./http-request.service";
import { ResponseModel } from "@shared/models/IResponseModel";

@Injectable({
    providedIn: "root"
})
export class HttpGenericService<T> {
    Rspnse: ResponseModel<any[]>;

    protected _httpRequest = inject(HttpRequestService);
    constructor(private _url) {}

    get<T>(request: RequestOption): Observable<ResponseModel<T>> {
        request.url = `${this._url}/${request.resource ?? "getAll"}`;
        request.method = "GET";

        return this._httpRequest.callHttpParameters(request);
    }

    getById(request: RequestOption): Observable<ResponseModel<T>> {
        request.url = `${this._url}`;
        request.method = "GET";

        return this._httpRequest.callHttpParameters(request);
    }

    create(request: RequestOption): Observable<ResponseModel<T>> {
        request.method = "POST";
        request.url = `${this._url}/${request.resource ?? "insert"}`;

        return this._httpRequest.http(request);
    }

    update(request: RequestOption): Observable<ResponseModel<T>> {
        request.method = "PUT";
        request.url = `${this._url}/${request.resource ?? "update"}`;

        return this._httpRequest.http(request);
    }

    delete(request: RequestOption): Observable<ResponseModel<T>> {
        request.method = "DELETE";
        request.url = `${this._url}/${request.resource ?? "delete"}`;

        return this._httpRequest.callHttpParameters(request);
    }

    post(request: RequestOption): Observable<ResponseModel<T>> {
        request.method = "POST";
        request.url = `${this._url}/${request.resource}`;

        return this._httpRequest.callHttpParameters(request);
    }
}
