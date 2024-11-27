export interface CapsuleEntity {
    id: string;
    status: string;
    images: ImageEntity[];
    anomalies: number;
}

export interface ImageEntity {
    id: string;
    url: string;
    timestamp: {
        minutes: number;
        seconds: number;
    };
    frameNumber: number;
    location: string;
}
