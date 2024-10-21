import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { ListaPermisoModuloService } from "@services/seguridad/lista-permiso-modulo.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ListaPermisoModuloResolver  {
    constructor(private _route: Router, private _listaPermisoModuloService: ListaPermisoModuloService, private _snackBarService: SnackbarService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._listaPermisoModuloService.getById(route.params["id"]).pipe(
            catchError((error: HttpErrorResponse) => {
                this._route.navigate(["/administracion", "gestion-usuarios", "lista-permisos"]);
                return of(null);
            })
        );
    }
}
