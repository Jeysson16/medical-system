import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HomeListComponent } from "./home-list/home-list.component";

@Component({
    selector: "app-home-container",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HomeListComponent],
    template: `<ui-home-list class="w-full"></ui-home-list>`,
    styleUrl: "./home-container.component.scss"
})
export class HomeContainerComponent {}
