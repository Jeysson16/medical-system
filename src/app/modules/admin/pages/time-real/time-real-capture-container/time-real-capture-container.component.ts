import { Component } from "@angular/core";
import { TimeRealCaptureListComponent } from "./time-real-capture-list/time-real-capture-list.component";

@Component({
    selector: "app-time-real-capture-container",
    standalone: true,
    imports: [TimeRealCaptureListComponent],
    template: `<ui-time-real-capture-list class="w-full"></ui-time-real-capture-list>`,
    styleUrl: "./time-real-capture-container.component.scss"
})
export class TimeRealCaptureContainerComponent {}
