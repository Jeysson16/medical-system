import { TimeImage } from "./ICapsule";


export interface Anomaly {
    id: string;
    capsuleId: string;
    description: string;
    severity: string;
    time: TimeImage;
    location: string;
    detectedAt: Date;
}
