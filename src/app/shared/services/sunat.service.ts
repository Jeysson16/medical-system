import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseModel } from "@shared/models/IResponseModel";
import { environment } from "environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SunatService {
    constructor(private _http: HttpClient) {}

    obtenerInformacionEntidad(ruc: string): Observable<ResponseModel> {
        const url = `${environment.urlSunat}/api/GetRuc?code=${environment.codigoSunat}&ruc=${ruc}`;
        return this._http.get<ResponseModel>(url);
    }
}
