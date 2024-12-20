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

    private capsulesR: CapsuleR[] = [];

    getCapsules(contactId: string): CapsuleR[] {
        return this.capsulesR.filter(capsule => capsule.contactId === contactId);
    }

    addCapsule(capsule: CapsuleR): void {
        this.capsulesR.push(capsule);
    }
}
export interface CapsuleR {
    id: string; // Código único para la cápsula
    title: string; // Nombre o título
    description: string; // Descripción opcional
    createdAt: Date; // Fecha de creación
    contactId: string; // Relacionado con el contacto
}
