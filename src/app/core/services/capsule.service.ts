import { Injectable, signal } from "@angular/core";
import { CapsuleEntity } from "@entities/ICapsuleEntity";
import { Capsule } from "@models/ICapsule";
import { HttpGenericService } from "@shared/services/http-generic.service";

@Injectable({
    providedIn: "root"
})
export class CapsuleService extends HttpGenericService<CapsuleEntity> {
    constructor() {
        super(`${import.meta.env.NG_APP_API_URL_ENDPOINTS}/capsules`);
    }
    loadingHttp = signal<boolean>(false);
    capsules = signal<Capsule[]>([]);
    capsuleLength = signal<number>(0);
}
