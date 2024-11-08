import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatDivider } from "@angular/material/divider";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";

@Component({
    selector: "ec-vital-signs",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatDivider, TranslocoPipe],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <div class="flex flex-col md:flex-row gap-2">
                <!-- Capsule Status Section -->
                <div class="flex-1">
                    <h3 class="text-lg font-semibold">{{ "vitalSigns.capsuleStatus" | transloco }}:</h3>
                    <span>{{ capsuleCode }}</span>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-center space-x-2">
                            <span>📶</span><span>{{ "vitalSigns.signal" | transloco }}: {{ signalStrength }}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <span>🔋</span><span>{{ "vitalSigns.battery" | transloco }}: {{ battery }}%</span>
                        </div>
                    </div>
                </div>

                <!-- Custom Divider (No Grid, Just Flex) -->
                <div class="hidden md:block border-l-2 border-gray-300 dark:border-gray-600 mx-4"></div>

                <!-- Patient Vital Signs Section -->
                <div class="flex-1 mt-4 md:mt-0">
                    <h3 class="text-lg font-semibold">{{ "vitalSigns.patientVitalSigns" | transloco }}:</h3>
                    <div class="mt-2 space-y-2">
                        <div class="flex items-center space-x-2">
                            <span>🌡️</span><span>{{ "vitalSigns.temperature" | transloco }}: {{ temperature }}°C</span>
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
