import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ReporteVentasService {
    constructor(private _http: HttpClient) {}

    configurarPeticion(url:string,httpParams:HttpParams): Observable<ResponseModel> {
        return this._http.get<any>(`${url}`, { params: httpParams });
    }
}
