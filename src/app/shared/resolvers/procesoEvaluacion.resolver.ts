import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { ProcesoEvaluacionService } from "@services/proceso-evaluacion.service";
import { VacanteService } from "@services/vacante.service";
import { WFFasesService } from "@services/wf-fases.service";
import { WorkFlowService } from "@services/workflow.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError, forkJoin } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProcesoEvaluacionResolver  {
    constructor(private _snackBarService: SnackbarService, private _route: Router, private _procesoService: ProcesoEvaluacionService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ResponseModel> {
        return this._procesoService.getById(route.params["id"]).pipe(catchError(error => of(null)));
    }
}
