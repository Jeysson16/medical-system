import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HistoryActivity } from "@shared/models/IHistoryActivity";
import { BehaviorSubject, Observable, tap } from "rxjs";

@Injectable({ providedIn: "root" })
export class PatientsHistoryService {
    // Private
    private _activities: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for activities
     */
    get activities(): Observable<any> {
        return this._activities.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get activities
     */
    getActivities(): Observable<any> {
        return this._httpClient.get<HistoryActivity[]>("api/pages/activities").pipe(
            tap((response: HistoryActivity[]) => {
                this._activities.next(response);
            })
        );
    }
}
