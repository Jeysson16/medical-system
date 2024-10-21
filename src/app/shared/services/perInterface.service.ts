import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "@shared/interfaces/IUsuario";
import { ResponseModel } from "app/shared/models/IResponseModel";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

const api = `${environment.urlBase}/api/PerInterface`;

@Injectable({
    providedIn: "root"
})
export class PerInterfaceService {
    user: Usuario = JSON.parse(localStorage.getItem("user"));
    constructor(private _http: HttpClient) {}

    getByPagination(clase: string | number): Observable<ResponseModel> {
        const url = `${api}/GetByPagination/${clase}/${this.user.cPerJuridica}`;
        return this._http.get<ResponseModel>(url);
    }

    obtenerPaises(): Observable<ResponseModel> {
        const url = `${api}/GetPaises`;
        return this._http.get<ResponseModel>(url);
    }

    obtenerEstablecimientos(cPerJurCodigo: string, cPerCodigo: string): Observable<ResponseModel> {
        const url = `${api}/GetByEstablecimiento/${cPerJurCodigo}/${cPerCodigo}`;
        return this._http.get<ResponseModel>(url);
    }
}
