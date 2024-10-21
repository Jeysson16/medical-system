import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { CONST_COD_TIPO_DOCUMENTO, CONST_COD_VINCULO } from "@config/persona.config";
import { CONST_IMPUESTO_GRAL_VENTA, CONST_MONEDA_CONTABLE, CONST_ORIGEN_CAPITAL, CONST_REGIMEN_RENTA, CONST_REMUNERACION } from "@config/sys-per-jur-configuracion";
import { PersonaService } from "@services/persona.service";
import { ModuloService } from "@services/seguridad/modulo.service";
import { SysPerJurConfiguracionService } from "@services/sys-per-jur-configuracion.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { ConstanteService } from "@shared/services/constante.service";
import { SnackbarService } from "@shared/services/snackbar.service";
import { Observable, of, catchError, zip, switchMap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ConfiguracionEmpresaResolver  {
    constructor(
        private _route: Router,
        private _personaService: PersonaService,
        private _sysPerJurConfiguracionService: SysPerJurConfiguracionService,
        private _constanteService: ConstanteService,
        private _moduloService: ModuloService,
        private _snackBarService: SnackbarService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ResponseModel[]> {
        return this._personaService.getByInformationEmpresas().pipe(
            switchMap(result =>
                zip(
                    of(result),
                    this._constanteService.getAll(CONST_ORIGEN_CAPITAL),
                    this._constanteService.getAll(CONST_MONEDA_CONTABLE),
                    this._constanteService.getAll(CONST_REGIMEN_RENTA),
                    this._constanteService.getAll(CONST_IMPUESTO_GRAL_VENTA),
                    this._sysPerJurConfiguracionService.getItem(),
                    this._constanteService.getAll(CONST_REMUNERACION),
                    this._moduloService.getAll(),
                    this._constanteService.getAll(CONST_COD_TIPO_DOCUMENTO),
                    this._constanteService.getAll(CONST_COD_VINCULO)
                )
            ),
            catchError((error: HttpErrorResponse) => {
                this._route.navigate(["administracion", "panel"]);
                this._snackBarService.infoMessage("Ocurrio un error al traer la configuración de la empresa, por favor ingrese nuevamente.", "error");
                return of(null);
            })
        );
    }
}
