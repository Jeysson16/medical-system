import { IAdapter } from "@adapters/IAdapter";
import { AnomalyEntity } from "@entities/IAnomalyEntity";
import { Anomaly } from "@models/IAnomaly";
import { TimeImage } from "@models/ICapsule";

export class AnomalyAdapter implements IAdapter<AnomalyEntity, Anomaly> {
    convertEntityToModelArray(entity: AnomalyEntity[]): Anomaly[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: AnomalyEntity): Anomaly {
        return {
            id: entity.id,
            capsuleId: entity.capsuleId,
            description: entity.description,
            severity: entity.severity.toFixed(2), // Convert severity to string with 2 decimal places
            time: this.convertTimeToModel(entity.time),
            location: entity.location,
            detectedAt: new Date(entity.detectedAt._seconds * 1000 + entity.detectedAt._nanoseconds / 1e6) // Convert Firestore timestamp
        };
    }

    convertModelToEntity(model: Anomaly): AnomalyEntity {
        return {
            id: model.id,
            capsuleId: model.capsuleId,
            description: model.description,
            severity: parseFloat(model.severity), // Convert severity back to number
            time: this.convertTimeToEntity(model.time),
            location: model.location,
            detectedAt: {
                _seconds: Math.floor(model.detectedAt.getTime() / 1000),
                _nanoseconds: (model.detectedAt.getTime() % 1000) * 1e6
            }
        };
    }

    private convertTimeToModel(time: { hours: number; minutes: number; seconds: number; frames: number }): TimeImage {
        return {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
            frame: time.frames
        };
    }

    private convertTimeToEntity(time: TimeImage): {
        hours: number;
        minutes: number;
        seconds: number;
        frames: number;
    } {
        return {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
            frames: time.frame
        };
    }
}
