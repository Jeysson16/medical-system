import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";

@Component({
    selector: "ec-vital-signs",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [TranslocoPipe, MatIcon, MatSuffix, RouterLink],
    template: `
        <!-- Visualization Button -->
        <div class="flex justify-end mb-4 px-10">
            <button
                [routerLink]="'/tiempo-real/reproduccion'"
                routerLinkActive="router-link-active"
                class="flex items-center bg-primary text-white px-4 py-2 rounded-full w-full shadow hover:bg-primary-700 transition">
                <mat-icon class="mr-2 text-white" matSuffix [svgIcon]="'heroicons_solid:play'"></mat-icon>
                <span>Visualización de las imagenes</span>
            </button>
        </div>

        <!-- Card Section -->
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <div class="flex flex-col md:flex-row gap-2">
                <!-- Capsule Status Section -->
                <div class="flex-1">
                    <h3 class="text-lg font-semibold">{{ "vitalSigns.capsuleStatus" | transloco }}:</h3>
                    <span>{{ capsuleCode }}</span>
                    <div class="mt-2 flex space-x-2">
                        <div class="flex items-stretch justify-between space-x-2">
                            <span>📶</span><span>{{ "vitalSigns.signal" | transloco }}: {{ signalStrength }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span>🔋</span><span>{{ "vitalSigns.battery" | transloco }}: {{ battery }}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./ec-vital-signs.component.scss"],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-vital-signs", alias: "vitalSigns" }
        }
    ]
})
export class EcVitalSignsComponent {
    @Input() capsuleCode: string = "EI-04981-0995";
    @Input() signalStrength: string = "Moderado";
    @Input() progress: number = 0;
    @Input() battery: number = 100;
    @Input() temperature: number = 37.0;
}
