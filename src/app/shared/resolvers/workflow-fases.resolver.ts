import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { SysGestorEstructuraService } from "@services/sys-gestor-estructura.service";
import { WFFasesService } from "@services/wf-fases.service";
import { WorkFlowService } from "@services/workflow.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError, forkJoin } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class WorkFlowFasesResolver  {
    constructor(private _snackBarService: SnackbarService, private _route: Router, private _workFlowService: WorkFlowService, private _wfFasesService: WFFasesService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<[ResponseModel, ResponseModel]> {
        const id = route.params["id"];
        return forkJoin([this._workFlowService.getById(id), this._wfFasesService.getAllDetails(id)]).pipe(
            catchError((error: HttpErrorResponse) => {
                this._snackBarService.openFromComponent({
                    mensaje: "No se pudo cargar las fases, porfavor intente de nuevo.",
                    tipo: "error"
                });
                this._route.navigate(["workflow", "registro"]);
                return of(null);
            })
        );
    }
}
