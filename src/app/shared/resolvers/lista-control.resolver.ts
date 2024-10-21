import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { ListaControlService } from "@services/lista-control.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable, of, catchError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ListaControlResolver  {
    constructor(private _listaControlService: ListaControlService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._listaControlService.getById(route.params["id"]).pipe(catchError(error => of(null)));
    }
}
