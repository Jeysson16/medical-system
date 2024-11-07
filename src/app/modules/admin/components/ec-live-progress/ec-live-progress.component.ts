import { Component, OnInit, OnDestroy, ChangeDetectorRef, ChangeDetectionStrategy, inject } from "@angular/core";
import { NgStyle } from "@angular/common";
import { TRANSLOCO_SCOPE, TranslocoPipe, TranslocoService } from "@jsverse/transloco";

@Component({
    selector: "ec-live-progress",
    standalone: true,
    imports: [NgStyle, TranslocoPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-4 relative">
            <div class="flex justify-between items-start">
                <h2 class="text-lg font-semibold">{{ "liveProgressTracker.title" | transloco }}</h2>

                <!-- Tiempo transcurrido en la esquina superior derecha -->
                <div class="text-sm font-medium text-gray-600 dark:text-gray-300">
                    <span>{{ "liveProgressTracker.timeElapsed" | transloco }}</span
                    ><span>{{ elapsedTime }}</span>
                </div>
            </div>
            <div class="space-y-4 mt-4">
                <!-- Etapas del Sistema Digestivo -->
                <div class="flex justify-between items-center">
                    <span>{{ "liveProgressTracker.organs.esophagus" | transloco }}</span>
                    <span>{{ "liveProgressTracker.organs.stomach" | transloco }}</span>
                    <span>{{ "liveProgressTracker.organs.smallIntestine" | transloco }}</span>
                    <span>{{ "liveProgressTracker.organs.largeIntestine" | transloco }}</span>
                </div>

                <!-- Barra de Progreso -->
                <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2 relative">
                    <!-- Progreso de la Cápsula -->
                    <div class="bg-primary-500 h-2.5 rounded-full transition-all ease-in-out duration-300" [ngStyle]="{ width: roundedProgress + '%' }"></div>
                </div>

                <!-- Información sobre el progreso y Tiempo estimado de finalización (en una fila) -->
                <div class="flex justify-between items-center mt-2 text-center">
                    <div>
                        <span class="font-medium">{{ "liveProgressTracker.currentLocation" | transloco }} </span><span>{{ currentLocation | transloco }}</span>
                    </div>
                    <div>
                        <span class="font-medium">{{ "liveProgressTracker.estimatedCompletion" | transloco }}</span
                        ><span>{{ estimatedTime }}</span>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ["./ec-live-progress.component.scss"],
    providers: [
        {
            provide: TRANSLOCO_SCOPE,
            useValue: { scope: "components/ec-live-progress", alias: "liveProgressTracker" }
        }
    ]
})
export class EcLiveProgressComponent implements OnInit, OnDestroy {
    progress = 0; // Progreso en porcentaje
    currentLocation = "Esophagus"; // Ubicación actual de la cápsula
    private timer: any; // Temporizador para actualizar el progreso cada cierto tiempo
    private timeElapsed = 0; // Tiempo transcurrido en segundos

    // Lista de las etapas del sistema digestivo
    stages = [
        { name: "liveProgressTracker.organs.esophagus", threshold: 20 },
        { name: "liveProgressTracker.organs.stomach", threshold: 40 },
        { name: "liveProgressTracker.organs.smallIntestine", threshold: 70 },
        { name: "liveProgressTracker.organs.largeIntestine", threshold: 100 }
    ];
    private _cdRef = inject(ChangeDetectorRef);

    // Iniciar el temporizador al cargar el componente
    ngOnInit(): void {
        this.startProgressTimer();
    }

    // Detener el temporizador cuando el componente sea destruido
    ngOnDestroy(): void {
        if (this.timer) {
            clearInterval(this.timer);
        }
    }

    // Función para iniciar el temporizador
    startProgressTimer() {
        // Calculamos el incremento necesario para que llegue a 100% en 9 minutos (540 segundos)
        const progressIncrement = 100 / 540;

        // Cada segundo, el progreso aumentará para completar el 100% en 9 minutos
        this.timer = setInterval(() => {
            if (this.progress < 100) {
                this.progress = Math.min(this.progress + progressIncrement, 100); // Incrementar el progreso de manera uniforme cada segundo
                this.timeElapsed += 1; // Incrementar el tiempo transcurrido en 1 segundo
                this.updateLocation();

                // Marcar el componente para detectar los cambios
                this._cdRef.markForCheck();
            } else {
                clearInterval(this.timer); // Detener el temporizador cuando el progreso llegue a 100%
            }
        }, 1000); // 1000 ms = 1 segundo
    }

    // Actualizar la ubicación de la cápsula basado en el progreso
    updateLocation() {
        if (this.progress <= this.stages[0].threshold) {
            this.currentLocation = this.stages[0].name;
        } else if (this.progress <= this.stages[1].threshold) {
            this.currentLocation = this.stages[1].name;
        } else if (this.progress <= this.stages[2].threshold) {
            this.currentLocation = this.stages[2].name;
        } else {
            this.currentLocation = this.stages[3].name;
        }
    }

    // Obtener el tiempo transcurrido en formato "mm:ss"
    get elapsedTime(): string {
        const minutes = Math.floor(this.timeElapsed / 60);
        const seconds = this.timeElapsed % 60;
        return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
    }

    // Obtener el tiempo estimado de finalización basado en el progreso
    get estimatedTime(): string {
        if (this.progress === 0) {
            return "00:00"; // Si el progreso es 0, no se puede calcular el tiempo estimado
        }
        const remainingTime = (100 - this.progress) * (this.timeElapsed / this.progress);
        const minutes = Math.floor(remainingTime / 60);
        const seconds = Math.round(remainingTime % 60);
        return `${this.padTime(minutes)}:${this.padTime(seconds)}`;
    }

    // Función para añadir ceros en el tiempo (para mostrar 01:05 en lugar de 1:5)
    padTime(time: number): string {
        return time < 10 ? `0${time}` : `${time}`;
    }

    // Obtener el progreso redondeado para la barra (solo números enteros)
    get roundedProgress(): number {
        return Math.round(this.progress); // Redondear el progreso para asegurarse de que sea un número entero
    }
}
