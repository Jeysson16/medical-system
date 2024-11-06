import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { ShadowTitleComponent } from "@components/shadow-title/shadow-title.component";

@Component({
    selector: "bu-cont-body",
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule, ShadowTitleComponent, MatButtonModule, MatIconModule],
    template: `
        <div class="flex flex-col flex-auto min-w-0 color-fondo" [ngClass]="{ 'm-4': applyMargin }">
            <div class="grid grid-cols-2">
                <div class="flex items-center">
                    <button mat-mini-fab class="btn-back mr-2" (click)="eventClick()" *ngIf="canBack">
                        <mat-icon class="iconColor">keyboard_backspace</mat-icon>
                    </button>
                    <div class="flex flex-col">
                        <p class="inter-title">
                            {{ titleBody }}
                        </p>
                        <bu-shadow-title *ngIf="subtitleBody" [title]="subtitleBody"></bu-shadow-title>
                    </div>
                </div>
                <div class="place-self-end">
                    <ng-content select="[elementos]"></ng-content>
                </div>
            </div>
            <ng-content></ng-content>
        </div>
    `,
    styles: `
            .btn-back {
                background-color: rgb(101, 117, 140) !important;
            }
        `
})
export class BuContBodyComponent {
    @Input() titleBody: string;
    @Input() subtitleBody: string;
    @Input() canBack: boolean;
    @Input() applyMargin: boolean = true;
    @Output() eventAction: EventEmitter<void> = new EventEmitter<void>();

    eventClick(): void {
        this.eventAction.emit();
    }
}
