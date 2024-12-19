import { NgClass, NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { TRANSLOCO_SCOPE, TranslocoPipe } from "@jsverse/transloco";
import { DateTime } from "luxon";
@Component({
    selector: "ec-anomalies",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor, NgClass, TranslocoPipe],
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
            <!-- Contenedor flexible para título -->
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-semibold">{{ title | transloco }}</h2>
            </div>

            <!-- Contenido de las anomalías con overflow en x -->
            <div class="overflow-x-auto mt-4">
                <div class="flex gap-4 min-w-max">
                    <div *ngFor="let anomaly of anomalies; let i = index; trackBy: trackByIndex" class="space-y-2">
                        <!-- Imagen con altura limitada -->
                        <img [src]="'/assets/images/ui/components/placeholder' + (i + 3) + '.jpg'" [alt]="'Anomaly ' + anomaly.risk" class="w-32 h-32 rounded-lg object-contain" />
                        <div class="flex flex-col items-center">
                            <span [ngClass]="getBadgeClass(anomaly.risk)" class="text-sm">
                                {{ "anomalies.risks." + anomaly.risk | transloco }}
                            </span>
                            <span class="text-sm text-gray-500">{{ formatTime(anomaly.time) }}</span>
                        </div>
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
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") },
        { risk: 0, time: DateTime.fromFormat("11:02 AM", "hh:mm a") },
        { risk: 2, time: DateTime.fromFormat("10:23 AM", "hh:mm a") }
    ];

    getBadgeClass(risk: number) {
        return risk === 2 ? "text-red-500" : risk === 1 ? "text-yellow-500" : "text-gray-500";
    }

    formatTime(date: DateTime) {
        return date.toFormat("hh:mm a"); // Muestra solo la hora en formato de 12 horas
    }

    trackByIndex(index: number, item: any): number {
        return index;
    }
}
