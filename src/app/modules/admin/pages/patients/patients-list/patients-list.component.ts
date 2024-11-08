import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { TRANSLOCO_SCOPE } from "@jsverse/transloco";

@Component({
    selector: "patients",
    templateUrl: "./patients-list.component.html",
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "interfaces/patients/list-patients", alias: "patients" }
        }
    ]
})
export class PatientsListComponent {
    /**
     * Constructor
     */
    constructor() {}
}
