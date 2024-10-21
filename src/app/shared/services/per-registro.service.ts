import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseModel } from "app/shared/models/IResponseModel";
import { API_SYS_PER_REGISTRO_PERSONA, ENDPOINT_SYS_PER_REGISTRO_PERSONA } from "environments/enviroment.config";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PerRegistroService {
    constructor(private _http: HttpClient) {}

    getByPaginationByPersona(): Observable<ResponseModel> {
        const url = `${API_SYS_PER_REGISTRO_PERSONA}${ENDPOINT_SYS_PER_REGISTRO_PERSONA.getByPagination}`;
        return this._http.get<ResponseModel>(url);
    }
}
