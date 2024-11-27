export interface AnomalyEntity {
    id: string;
    capsuleId: string;
    description: string;
    severity: number;
    time: {
        hours: number;
        minutes: number;
        seconds: number;
        frames: number;
    };
    location: string;
    detectedAt: {
        _seconds: number;
        _nanoseconds: number;
    };
}
