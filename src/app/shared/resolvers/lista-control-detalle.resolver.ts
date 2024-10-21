import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable, of, catchError, map } from "rxjs";

import { ListaDetalleService } from "@services/lista-detalle.service";
import { ResponseModel } from "@shared/models/IResponseModel";

@Injectable({
    providedIn: "root"
})
export class ListaControlDetalleResolver  {
    constructor(private _listaDetalleService: ListaDetalleService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._listaDetalleService.getAll(route.params["id"]).pipe(
            map(res => {
                const r = res.lstItem.map(element => {
                    element.nombreCortoElemento = "";
                    if (element.dLisCtlFechaVence) element.dLisCtlFechaVence = new Date(element.dLisCtlFechaVence);
                    return element;
                });
                res.lstItem = r;
                return res;
            }),
            catchError(error => of(null))
        );
    }
}
