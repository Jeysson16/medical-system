import { IAdapter } from "@adapters/IAdapter";
import { CapsuleEntity, ImageEntity } from "@entities/ICapsuleEntity";
import { Capsule, Image, TimeImage } from "@models/ICapsule";

export class CapsuleAdapter implements IAdapter<CapsuleEntity, Capsule> {
    convertEntityToModelArray(entity: CapsuleEntity[]): Capsule[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: CapsuleEntity): Capsule {
        return {
            id: entity.id,
            status: entity.status,
            anomalies: entity.anomalies,
            images: this.sortImages(entity.images.map(image => this.convertImageEntityToModel(image)))
        };
    }

    convertModelToEntity(model: Capsule): CapsuleEntity {
        return {
            id: model.id,
            status: model.status,
            anomalies: model.anomalies,
            images: model.images.map(image => this.convertImageModelToEntity(image))
        };
    }

    private convertImageEntityToModel(image: ImageEntity): Image {
        return {
            url: image.url,
            timestamp: this.convertTimestampToModel(image.timestamp, image.frameNumber)
        };
    }

    private convertImageModelToEntity(image: Image): ImageEntity {
        return {
            id: "",
            url: image.url,
            timestamp: {
                minutes: image.timestamp.minutes,
                seconds: image.timestamp.seconds
            },
            frameNumber: image.timestamp.frame,
            location: ""
        };
    }

    private convertTimestampToModel(timestamp: { minutes: number; seconds: number }, frame: number): TimeImage {
        return {
            hours: Math.floor(timestamp.minutes / 60),
            minutes: timestamp.minutes % 60,
            seconds: timestamp.seconds,
            frame: frame
        };
    }

    private sortImages(images: Image[]): Image[] {
        return images.sort((a, b) => {
            const t1 = a.timestamp;
            const t2 = b.timestamp;

            if (t1.hours !== t2.hours) {
                return t1.hours - t2.hours;
            }
            if (t1.minutes !== t2.minutes) {
                return t1.minutes - t2.minutes;
            }
            if (t1.seconds !== t2.seconds) {
                return t1.seconds - t2.seconds;
            }
            return t1.frame - t2.frame;
        });
    }
}
