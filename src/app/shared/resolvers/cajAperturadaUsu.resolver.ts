import { Injectable } from "@angular/core";
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { ToastService } from "@services/toast.service";
import { MVCajaAperturaService } from "@services/ventas/mv-caja-apertura.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class CajAperturadaUsu  {
    constructor(private _cajAperturaService: MVCajaAperturaService, private router: Router, private _toastService: ToastService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseModel> {
        return this._cajAperturaService.getByDate().pipe(
            map(response => {
                if (!response.item) {
                    this.router.navigate(["/ventas/facturacion"]);
                    this._toastService.showToastLarge({ icon: "warning", text: "No tienes una caja aperturada" });
                }
                return response;
            })
        );
    }
}
