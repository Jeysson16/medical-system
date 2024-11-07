import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ShadowTitleComponent } from "@components/ec-shadow-title/shadow-title.component";

@Component({
    selector: "ec-cont-body",
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, ShadowTitleComponent, MatButtonModule, MatIconModule],
    templateUrl: "./container-body.component.html",
    styleUrl: "./container-body.component.scss"
})
export class ContBodyComponent {
    @Input() titleBody: string;
    @Input() subtitleBody: string;
    @Input() canBack: boolean;
    @Input() applyMargin: boolean = true;
    @Output() eventAction: EventEmitter<void> = new EventEmitter<void>();
    //configSystem: ConfigSystem;

    constructor(/* private _configSystemService: ConfigSystemService */) {}

    ngOnInit(): void {
        /* this._configSystemService._configSystem$.subscribe(
            (config: ConfigSystem) => {
                this.configSystem = config;
            }
        ); */
    }

    eventClick(): void {
        this.eventAction.emit();
    }
}
