import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { ResponseModel } from "@shared/models/IResponseModel";
import { ConstanteService } from "@shared/services/constante.service";
import { Observable, zip } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class TiposDeDocumentosResolver  {
    constructor(private constanteService: ConstanteService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel[]> {
        return zip(this.constanteService.getAll(4117), this.constanteService.getAll(1174));
    }
}
