import { NgClass, NgFor, NgIf, SlicePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { TRANSLOCO_LOADER, TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";
import { DateTime } from "luxon";

@Component({
    selector: "ec-anomalies",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor, NgIf, NgClass, MatIcon, MatButton, TranslocoPipe, SlicePipe],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <!-- Contenedor flexible para título y botón -->
            <div class="flex justify-between items-center">
                <!-- Título alineado a la izquierda -->
                <h2 class="text-lg font-semibold">{{ title | transloco }}</h2>

                <!-- Botón alineado a la derecha con un icono -->
                <button class="flex items-center text-primary" (click)="redirectToAllAnomalies()">
                    {{ "anomalies.viewAll" | transloco }}
                    <mat-icon class="text-current mr-2">chevron_right</mat-icon>
                </button>
            </div>

            <!-- Contenido de las anomalías en un grid -->
            <div class="grid grid-cols-5 gap-4 mt-4">
                <div *ngFor="let anomaly of anomalies | slice : 0 : 5" class="space-y-2">
                    <!-- Limita la altura máxima de las imágenes -->
                    <img src="/assets/images/ui/components/placeholder.svg" alt="Anomaly" class="w-full max-h-30 h-auto rounded-lg object-contain" />
                    <div class="flex justify-between items-center">
                        <span [ngClass]="getBadgeClass(anomaly.risk)">
                            {{ "anomalies.risks." + anomaly.risk | transloco }}
                        </span>
                        <span class="text-sm text-gray-500">{{ formatTime(anomaly.time) }}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: ``,
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-anomalies", alias: "anomalies" }
        }
    ]
})
export class EcAnomaliesComponent {
    @Input() title: string;
    @Input() anomalies: { risk: number; time: DateTime }[] = [
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 1, time: DateTime.fromFormat("10:45 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
    ];

    getBadgeClass(risk: number) {
        return risk === 2 ? "text-red-500" : risk === 1 ? "text-yellow-500" : "text-gray-500";
    }

    formatTime(date: DateTime) {
        return date.toFormat("hh:mm a"); // Muestra solo la hora en formato de 12 horas
    }

    redirectToAllAnomalies() {
        // Implementa la redirección a la página de todas las anomalías
        // Puedes usar el router de Angular para navegar a la página deseada.
        console.log("Redirigiendo a todas las anomalías...");
    }
}
