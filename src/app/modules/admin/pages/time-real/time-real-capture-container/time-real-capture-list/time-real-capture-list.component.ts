import { AsyncPipe, NgClass, NgFor, NgForOf, NgIf } from "@angular/common";
import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { interval, Subscription } from "rxjs";

@Component({
    selector: "ui-time-real-capture-list",
    standalone: true,
    imports: [AsyncPipe, NgIf, NgFor, NgForOf, NgClass, MatIcon, MatButton],
    templateUrl: "./time-real-capture-list.component.html",
    styleUrl: "./time-real-capture-list.component.scss"
})
export class TimeRealCaptureListComponent implements OnInit, OnDestroy, AfterViewChecked {
    @ViewChild("timelineRef") timelineRef!: ElementRef;

    // New property to track the active tab
    activeTab: string = "location";

    isCapturing = false;
    currentImage = 1;
    elapsedTime = 0;
    temperature = 37;
    heartRate = 70;
    progress = 0;
    events: string[] = [];
    capturedImages: number[] = [];
    isPlaying = false;

    maxImages = 20;
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
        this.isCapturing = !this.isCapturing;
        this.isPlaying = false;
        if (this.isCapturing) {
            this.events.unshift(`${this.formatTime(this.elapsedTime)} - Captura iniciada`);
            this.startCapture();
        } else {
            this.events.unshift(`${this.formatTime(this.elapsedTime)} - Captura pausada`);
            this.stopCapture();
        }
    }

    startCapture(): void {
        this.captureInterval = interval(1000).subscribe(() => {
            this.nextImage();
            this.elapsedTime++;
            this.temperature += (Math.random() - 0.5) * 0.1;
            this.heartRate = parseFloat(Math.max(60, Math.min(100, this.heartRate + (Math.random() - 0.5) * 5)).toFixed(2));
            this.progress = Math.min(100, this.progress + 0.1);
            if (Math.random() < 0.1) {
                this.events.unshift(`${this.formatTime(this.elapsedTime)} - Evento detectado`);
                this.events = this.events.slice(0, 10);
            }
        });
    }

    stopCapture(): void {
        this.captureInterval?.unsubscribe();
    }

    resetCapture(): void {
        this.stopCapture();
        this.isCapturing = false;
        this.currentImage = 1;
        this.elapsedTime = 0;
        this.temperature = 37;
        this.heartRate = 70;
        this.progress = 0;
        this.events = [];
        this.capturedImages = [];
        this.isPlaying = false;
    }

    togglePlay(): void {
        if (this.isCapturing) return;
        this.isPlaying = !this.isPlaying;
        if (this.isPlaying) {
            this.playInterval = interval(500).subscribe(() => this.nextImage());
        } else {
            this.playInterval?.unsubscribe();
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
        return image % 3 === 0 ? "Estómago" : image % 3 === 1 ? "Intestino delgado" : "Colon";
    }

    getObservation(image: number): string {
        if (image % 5 === 0) return "Posible anomalía detectada. Se recomienda revisión detallada.";
        if (image % 4 === 0) return "Tejido normal observado. Sin hallazgos significativos.";
        if (image % 3 === 0) return "Área de interés identificada. Seguimiento recomendado.";
        if (image % 2 === 0) return "Estructura típica del órgano. Sin preocupaciones aparentes.";
        return "Imagen de calidad estándar. Continuar monitoreo.";
    }
}
