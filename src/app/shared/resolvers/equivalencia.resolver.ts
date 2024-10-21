import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { EquivalenciaService } from "@services/equivalencia.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable, of, catchError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EquivalenciaResolver  {
    constructor(private _equivalenciaService: EquivalenciaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._equivalenciaService.getById(route.params["id"]).pipe(catchError(error => of(null)));
    }
}
