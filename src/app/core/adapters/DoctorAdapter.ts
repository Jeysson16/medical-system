import { IAdapter } from "@adapters/IAdapter";
import { DoctorEntity } from "@entities/IDoctorEntity";
import { Doctor } from "@models/IDoctor";

export class DoctorAdapter implements IAdapter<DoctorEntity, Doctor> {
    convertEntityToModelArray(entity: DoctorEntity[]): Doctor[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: DoctorEntity): Doctor {
        return {
            id: entity.id,
            name: entity.name,
            specialty: entity.specialty,
            contactInfo: this.convertContactInfoToModel(entity.contactInfo),
            licenseNumber: entity.licenseNumber,
            password: entity.password,
            identityDocument: this.convertIdentityDocumentToModel(entity.tipoDeDocumentoDeIdentidad),
            patients: [...entity.patients]
        };
    }

    convertModelToEntity(model: Doctor): DoctorEntity {
        return {
            id: model.id,
            name: model.name,
            specialty: model.specialty,
            contactInfo: this.convertContactInfoToEntity(model.contactInfo),
            licenseNumber: model.licenseNumber,
            password: model.password,
            tipoDeDocumentoDeIdentidad: this.convertIdentityDocumentToEntity(model.identityDocument),
            patients: [...model.patients]
        };
    }

    private convertContactInfoToModel(contactInfo: Record<string, string>): { type: string; value: string }[] {
        return Object.entries(contactInfo).map(([type, value]) => ({ type, value }));
    }

    private convertContactInfoToEntity(contactInfo: { type: string; value: string }[]): Record<string, string> {
        return contactInfo.reduce((acc, { type, value }) => {
            acc[type] = value;
            return acc;
        }, {} as Record<string, string>);
    }

    private convertIdentityDocumentToModel(identityDocument: Record<string, string>): { type: string; value: string }[] {
        return Object.entries(identityDocument).map(([type, value]) => ({ type, value }));
    }

    private convertIdentityDocumentToEntity(identityDocument: { type: string; value: string }[]): Record<string, string> {
        return identityDocument.reduce((acc, { type, value }) => {
            acc[type] = value;
            return acc;
        }, {} as Record<string, string>);
    }
}
