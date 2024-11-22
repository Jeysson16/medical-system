import { NgClass, NgFor, NgForOf, NgIf } from "@angular/common";
import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { fuseAnimations } from "@fuse/animations";
import { interval, Subscription } from "rxjs";

@Component({
    selector: "ui-time-real-capture-list",
    standalone: true,
    animations: fuseAnimations,
    imports: [NgIf, NgFor, NgForOf, NgClass, MatIcon, MatTabsModule],
    templateUrl: "./time-real-capture-list.component.html",
    styleUrl: "./time-real-capture-list.component.scss"
})
export class TimeRealCaptureListComponent implements OnInit, OnDestroy, AfterViewChecked {
    @ViewChild("timelineRef") timelineRef!: ElementRef;

    activeTab: string = "location";
    isCapturing = false;
    currentImage = 1;
    elapsedTime = 0;
    heartRate = 70;
    progress = 0;
    events: string[] = [];
    capturedImages: number[] = [];
    isPlaying = false;

    maxImages = 50;
    captureInterval?: Subscription;
    playInterval?: Subscription;

    constructor() {}

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this.captureInterval?.unsubscribe();
        this.playInterval?.unsubscribe();
    }

    ngAfterViewChecked(): void {
        this.scrollToCurrentImage();
    }

    updateImage(newImage: number): void {
        this.currentImage = newImage;
        this.capturedImages = [...new Set([...this.capturedImages, newImage])].sort((a, b) => a - b);
    }

    nextImage(): void {
        this.updateImage((this.currentImage % this.maxImages) + 1);
    }

    previousImage(): void {
        this.updateImage(((this.currentImage - 2 + this.maxImages) % this.maxImages) + 1);
    }

    toggleCapture(): void {
        if (!this.isCapturing) {
            this.events.unshift(`${this.formatTime(this.elapsedTime)} - Captura iniciada`);
            this.stopCapture();
        }
    }

    stopCapture(): void {
        this.captureInterval?.unsubscribe();
        this.isCapturing = false;
    }

    togglePlay(): void {
        if (this.isCapturing) return; // No permitir reproducir si está capturando.

        this.isPlaying = !this.isPlaying;

        if (this.isPlaying) {
            this.toggleCapture();
            this.playInterval = interval(500).subscribe(() => {
                this.nextImage();
                this.elapsedTime++;
                this.progress = Math.min(100, this.progress + 0.5);
                if (Math.random() < 0.1) {
                    this.events.unshift(`${this.formatTime(this.elapsedTime)} - Evento detectado`);
                    if (this.events.length > 10) {
                        this.events = this.events.slice(0, 10);
                    }
                }
            });
        } else {
            // Detener reproducción
            this.isCapturing = false;
            this.playInterval?.unsubscribe();
            this.playInterval = undefined;
        }
    }

    formatTime(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    scrollToCurrentImage(): void {
        const element = this.timelineRef?.nativeElement.querySelector(`[data-image="${this.currentImage}"]`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }

    getImageLocation(image: number): string {
        const maxImages = 50;
        const esophagusImages = 20; // Cantidad de imágenes para "Esófago"
        const stomachImages = 20; // Cantidad de imágenes para "Estómago"
        const lastIntestineImages = 5; // Últimas imágenes asignadas al "Intestino delgado"

        if (image > maxImages - lastIntestineImages) {
            return "Intestino delgado";
        }

        if (image <= esophagusImages) {
            return "Esófago";
        }

        if (image <= esophagusImages + stomachImages) {
            return "Estómago";
        }

        return "Intestino delgado";
    }

    getObservation(image: number): string {
        if (image % 5 === 0) return "Posible anomalía detectada. Se recomienda revisión detallada.";
        if (image % 4 === 0) return "Tejido normal observado. Sin hallazgos significativos.";
        if (image % 3 === 0) return "Área de interés identificada. Seguimiento recomendado.";
        if (image % 2 === 0) return "Estructura típica del órgano. Sin preocupaciones aparentes.";
        return "Imagen de calidad estándar. Continuar monitoreo.";
    }
}
