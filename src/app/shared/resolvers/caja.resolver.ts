import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { CajaService } from "@services/ventas/caja.service";
import { Usuario } from "@shared/interfaces/IUsuario";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable, of, catchError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CajaResolver  {
    constructor(private cajaService: CajaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        return this.cajaService.listarCajasPagination(user.cPerJuridica, 0, route.params.id).pipe(catchError(error => of(null)));
    }
}
