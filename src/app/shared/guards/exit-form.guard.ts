import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface ComponentCanDeactivate {
    canDeactivate: () => Observable<boolean> | boolean;
}

@Injectable({
    providedIn: "root"
})
export class ExitFormGuard  {
    canDeactivate(
        component: ComponentCanDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> {
        return component.canDeactivate() ? true : confirm("Es posible que los cambios que implementaste no se puedan guardar");
    }
}
