import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Routes } from "@angular/router";
import { PatientsHistoryService } from "@services/patients-history.service";
import { catchError, throwError } from "rxjs";
import { PatientsHistoryComponent } from "./patients-history/patients-history.component";
import { PatientsService } from "@services/patients-list.service";
import { PatientsListComponent } from "./patients-list/patients-list.component";
import { PatientsDetailsComponent } from "./patients-list/details/details.component";
import { PatientsViewListComponent } from "./patients-list/list/list.component";

/**
 * Contact resolver
 *
 * @param route
 * @param state
 */
const contactResolver = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const contactsService = inject(PatientsService);
    const router = inject(Router);

    return contactsService.getContactById(route.paramMap.get("id")).pipe(
        // Error here means the requested contact is not available
        catchError(error => {
            // Log the error
            console.error(error);

            // Get the parent url
            const parentUrl = state.url.split("/").slice(0, -1).join("/");

            // Navigate to there
            router.navigateByUrl(parentUrl);

            // Throw an error
            return throwError(error);
        })
    );
};

/**
 * Can deactivate contacts details
 *
 * @param component
 * @param currentRoute
 * @param currentState
 * @param nextState
 */
const canDeactivateContactsDetails = (
    component: PatientsDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
) => {
    // Get the next route
    let nextRoute: ActivatedRouteSnapshot = nextState.root;
    while (nextRoute.firstChild) {
        nextRoute = nextRoute.firstChild;
    }

    // If the next state doesn't contain '/contacts'
    // it means we are navigating away from the
    // contacts app
    if (!nextState.url.includes("/lista")) {
        // Let it navigate
        return true;
    }

    // If we are navigating to another contact...
    if (nextRoute.paramMap.get("id")) {
        // Just navigate
        return true;
    }

    // Otherwise, close the drawer first, and then navigate
    return component.closeDrawer().then(() => true);
};

export default [
    {
        path: "lista",
        component: PatientsListComponent,
        resolve: {
            tags: () => inject(PatientsService).getTags()
        },
        children: [
            {
                path: "",
                component: PatientsViewListComponent,
                resolve: {
                    contacts: () => inject(PatientsService).getContacts(),
                    countries: () => inject(PatientsService).getCountries()
                },
                children: [
                    {
                        path: ":id",
                        component: PatientsDetailsComponent,
                        resolve: {
                            contact: contactResolver,
                            countries: () => inject(PatientsService).getCountries()
                        },
                        canDeactivate: [canDeactivateContactsDetails]
                    }
                ]
            }
        ]
    },
    {
        path: "historia",
        component: PatientsHistoryComponent,
        resolve: {
            activities: () => inject(PatientsHistoryService).getActivities()
        }
    }
] as Routes;
