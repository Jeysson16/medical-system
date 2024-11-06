import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "shadow-title",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./shadow-title.component.html",
    styleUrl: "./shadow-title.component.scss"
})
export class ShadowTitleComponent {
    @Input() title: string;
    @Input() canBack: boolean;
    @Input() color: string;
    @Output() eventAction: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.title = "";
    }

    ngOnInit(): void {}

    eventClick(): void {
        this.eventAction.emit();
    }
}
