import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Usuario } from "@shared/interfaces/IUsuario";
import { Parameter } from "@shared/models/http/Parameter";
import { RecursoConfig } from "@shared/apis/apiConf";

@Injectable({
    providedIn: "root"
})
export class HttpRequestService<T> {
    user: Usuario = JSON.parse(localStorage.getItem("user"));

    protected _http = inject(HttpClient);

    constructor(private _api: string, private _endpoint: RecursoConfig) {}

    getAll(param: Parameter): Observable<ResponseModel> {
        let url: string = `${this._api}${this._endpoint.getByPagination}`;
        let params: HttpParams = new HttpParams();
        const pathsJoin = param.pathVariables.join("/");
        if (pathsJoin) url += `/${pathsJoin}`;

        param.queryParams.forEach(query => {
            params = params.append(query.clave, query.valor);
        });

        return this._http.get<ResponseModel>(url, { params });
    }

    create(request: T): Observable<ResponseModel> {
        const url = `${this._api}${this._endpoint.create}`;
        return this._http.post<ResponseModel>(url, request);
    }

    update(request: T): Observable<ResponseModel> {
        const url = `${this._api}${this._endpoint.update}`;
        return this._http.put<ResponseModel>(url, request);
    }

    delete(param: Parameter): Observable<ResponseModel> {
        let url = `${this._api}${this._endpoint.delete}`;

        let params: HttpParams = new HttpParams();
        const pathsJoin = param.pathVariables.join("/");
        if (pathsJoin) url += `/${pathsJoin}`;

        param.queryParams.forEach(query => {
            params = params.append(query.clave, query.valor);
        });

        return this._http.delete<ResponseModel>(url, { params });
    }
}
