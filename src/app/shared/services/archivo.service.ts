import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseFile } from "@shared/interfaces/IResponeFile";
import { ResponseModel } from "@shared/models/IResponseModel";
import { API_ARCHIVOS } from "environments/enviroment.config";

import { Observable, delay } from "rxjs";
@Injectable({
    providedIn: "root"
})
export class ArchivoService {
    constructor(private _http: HttpClient) {}

    insertFile(request: FormData): Observable<ResponseModel> {
        const url = `${API_ARCHIVOS}`;
        return this._http.post<ResponseModel>(url, request);
    }

    getFileById(id: string): Observable<ResponseFile> {
        const url = `${API_ARCHIVOS}/${id}`;
        return this._http.get<ResponseFile>(url);
    }
}
