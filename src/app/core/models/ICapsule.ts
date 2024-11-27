export interface Capsule {
    id: string;
    status: string;
    images: Image[];
    anomalies: number;
}

export interface Image {
    url: string;
    timestamp: TimeImage;
}

export interface TimeImage {
    hours: number;
    minutes: number;
    seconds: number;
    frame: number;
}
