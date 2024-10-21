import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { ListaPermisoModuloService } from "@services/seguridad/lista-permiso-modulo.service";
import { SysGestorEstructuraService } from "@services/sys-gestor-estructura.service";
import { SysGestorFileService } from "@services/sys-gestor-file.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError, forkJoin } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class SysGestorEstructuraResolver  {
    constructor(private _route: Router, private _sysGestorFileService: SysGestorFileService, private _sysGestorEstructuraService: SysGestorEstructuraService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<[ResponseModel, ResponseModel]> {
        const id = route.params["id"];
        return forkJoin([this._sysGestorFileService.getById(id), this._sysGestorEstructuraService.getAll(id)]).pipe(
            catchError((error: HttpErrorResponse) => {
                this._route.navigate(["gestion-documentos", "estructura"]);
                return of(null);
            })
        );
    }
}
