import { IAdapter } from "@adapters/IAdapter";
import { PatientEntity } from "@entities/IPatientEntity";
import { PatientUser } from "@models/IPatient";

export class PatientAdapter implements IAdapter<PatientEntity, PatientUser> {
    convertEntityToModelArray(entity: PatientEntity[]): PatientUser[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: PatientEntity): PatientUser {
        return {
            id: entity.id,
            name: entity.name,
            age: entity.age,
            gender: entity.gender,
            contactInfo: this.convertContactInfoToModel(entity.contactInfo),
            password: entity.password,
            identityDocument: this.convertIdentityDocumentToModel(entity.tipoDeDocumentoDeIdentidad),
            doctors: entity.doctors,
            capsules: entity.capsules
        };
    }

    convertModelToEntity(model: PatientUser): PatientEntity {
        return {
            id: model.id,
            name: model.name,
            age: model.age,
            gender: model.gender,
            contactInfo: this.convertContactInfoToEntity(model.contactInfo),
            password: model.password,
            tipoDeDocumentoDeIdentidad: this.convertIdentityDocumentToEntity(model.identityDocument),
            doctors: model.doctors,
            capsules: model.capsules
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

    private convertIdentityDocumentToEntity(identityDocument: { type: string; value: string } | { type: string; value: string }[]): Record<string, string> {
        if (Array.isArray(identityDocument)) {
            // Si es un arreglo, conviértelo en un objeto
            return identityDocument.reduce((acc, { type, value }) => {
                acc[type] = value;
                return acc;
            }, {} as Record<string, string>);
        } else {
            // Si es un objeto, conviértelo directamente
            return { [identityDocument.type]: identityDocument.value };
        }
    }
}
