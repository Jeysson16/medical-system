import { Injectable } from "@angular/core";
import { BehaviorSubject, interval } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class EndoscopyService {
    private maxImages = 20;

    // Estado
    isCapturing$ = new BehaviorSubject<boolean>(false);
    isPlaying$ = new BehaviorSubject<boolean>(false);
    currentImage$ = new BehaviorSubject<number>(1);
    elapsedTime$ = new BehaviorSubject<number>(0);
    temperature$ = new BehaviorSubject<number>(37);
    heartRate$ = new BehaviorSubject<number>(70);
    progress$ = new BehaviorSubject<number>(0);
    events$ = new BehaviorSubject<string[]>([]);
    capturedImages$ = new BehaviorSubject<number[]>([]);

    private captureInterval: any;
    private playInterval: any;

    // Métodos
    startCapture() {
        this.isCapturing$.next(true);
        this.isPlaying$.next(false);

        this.captureInterval = interval(1000).subscribe(() => {
            this.nextImage();
            this.elapsedTime$.next(this.elapsedTime$.value + 1);
            this.temperature$.next(this.temperature$.value + (Math.random() - 0.5) * 0.1);
            this.heartRate$.next(Math.max(60, Math.min(100, this.heartRate$.value + (Math.random() - 0.5) * 5)));
            this.progress$.next(Math.min(100, this.progress$.value + 0.1));

            if (Math.random() < 0.1) {
                const newEvent = `${this.formatTime(this.elapsedTime$.value)} - Evento detectado`;
                this.events$.next([newEvent, ...this.events$.value.slice(0, 9)]);
            }
        });
    }

    pauseCapture() {
        this.isCapturing$.next(false);
        clearInterval(this.captureInterval);
    }

    resetCapture() {
        this.isCapturing$.next(false);
        this.currentImage$.next(1);
        this.elapsedTime$.next(0);
        this.temperature$.next(37);
        this.heartRate$.next(70);
        this.progress$.next(0);
        this.events$.next([]);
        this.capturedImages$.next([]);
        this.isPlaying$.next(false);
        clearInterval(this.captureInterval);
        clearInterval(this.playInterval);
    }

    togglePlay() {
        if (this.isCapturing$.value) return;

        this.isPlaying$.next(!this.isPlaying$.value);
        if (this.isPlaying$.value) {
            this.playInterval = interval(500).subscribe(() => this.nextImage());
        } else {
            clearInterval(this.playInterval);
        }
    }

    nextImage() {
        const nextImg = (this.currentImage$.value % this.maxImages) + 1;
        this.currentImage$.next(nextImg);
        const captured = [...new Set([...this.capturedImages$.value, nextImg])].sort((a, b) => a - b);
        this.capturedImages$.next(captured);
    }

    previousImage() {
        const prevImg = ((this.currentImage$.value - 2 + this.maxImages) % this.maxImages) + 1;
        this.currentImage$.next(prevImg);
    }

    private formatTime(seconds: number): string {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
}
