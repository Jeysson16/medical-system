import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { AdmSolicitudService } from "@services/adm-solicitud.service";
import { Usuario } from "@shared/interfaces/IUsuario";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable, of, catchError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AutoServicioEstudiantilResolver  {
    user: Usuario = JSON.parse(localStorage.getItem("user"));
    constructor(private _admSolicitudService: AdmSolicitudService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._admSolicitudService.getAll(this.user.cPerCodigo).pipe(catchError(error => of(null)));
    }
}
