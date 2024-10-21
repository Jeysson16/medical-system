import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { VacanteService } from "@services/vacante.service";
import { WFFasesService } from "@services/wf-fases.service";
import { WorkFlowService } from "@services/workflow.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError, forkJoin } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class VacanteResolver  {
    constructor(private _snackBarService: SnackbarService, private _route: Router, private _vacanteService: VacanteService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ResponseModel> {
        return this._vacanteService.getById(route.params["id"]).pipe(catchError(error => of(null)));
    }
}
