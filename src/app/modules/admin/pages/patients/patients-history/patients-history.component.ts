import { AsyncPipe, DatePipe, NgFor, NgIf, TitleCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormField } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { RouterLink } from "@angular/router";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";
import { PatientsHistoryService } from "@services/patients-history.service";
import { HistoryActivity } from "@shared/models/IHistoryActivity";
import { DateTime } from "luxon";
import { Observable } from "rxjs";

@Component({
    selector: "history",
    templateUrl: "./patients-history.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgIf, NgFor, MatIconModule, MatButtonModule, MatFormField, MatInputModule, ReactiveFormsModule, RouterLink, AsyncPipe, TitleCasePipe, DatePipe, TranslocoPipe],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "interfaces/patients/patients-history", alias: "patientHistory" }
        }
    ]
})
export class PatientsHistoryComponent implements OnInit {
    activities$: Observable<HistoryActivity[]>;
    searchInputControl = new FormControl("");

    /**
     * Constructor
     */
    constructor(public _historyService: PatientsHistoryService) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the activities
        this.activities$ = this._historyService.activities;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Returns whether the given dates are different days
     *
     * @param current
     * @param compare
     */
    isSameDay(current: string, compare: string): boolean {
        return DateTime.fromISO(current).hasSame(DateTime.fromISO(compare), "day");
    }

    /**
     * Get the relative format of the given date
     *
     * @param date
     */
    getRelativeFormat(date: string): string {
        return DateTime.fromISO(date).toRelativeCalendar();
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }
}
