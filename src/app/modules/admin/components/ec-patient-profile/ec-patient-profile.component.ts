import { Component, Input } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";

@Component({
    selector: "ec-patient-profile",
    standalone: true,
    imports: [TranslocoPipe, MatIcon],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <h2 class="text-lg font-semibold">{{ "patientProfile.title" | transloco }}</h2>
            <div class="space-y-2 mt-4">
                <div class="flex justify-between">
                    <span class="font-medium">{{ "patientProfile.name" | transloco }}:</span>
                    <span>{{ patientName }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="font-medium">{{ "patientProfile.age" | transloco }}:</span>
                    <span>{{ patientAge }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="font-medium">{{ "patientProfile.gender" | transloco }}:</span>
                    <span>{{ patientGender }}</span>
                </div>
                <div class="flex justify-between items-center">
                    @if(patientMedicalHistory === true){
                    <span class="font-medium">{{ "patientProfile.medicalHistory" | transloco }}:</span>
                    <button class="flex items-center text-primary-600 hover:underline focus:outline-none">
                        <span>{{ "patientProfile.viewHistory" | transloco }}</span>
                        <mat-icon class="text-primary">chevron_right</mat-icon>
                    </button>
                    }
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./ec-patient-profile.component.scss"],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-patient-profile", alias: "patientProfile" }
        }
    ]
})
export class EcPatientProfileComponent {
    @Input() patientName: string = "Jeysson Sánchez"; // Nombre del paciente
    @Input() patientAge: number = 19; // Edad del paciente
    @Input() patientGender: string = "Masculino"; // Género del paciente
    @Input() patientMedicalHistory: boolean | null = true; // Historia médica del paciente
}
