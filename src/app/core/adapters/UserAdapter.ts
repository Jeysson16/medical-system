import { IAdapter } from "@adapters/IAdapter";
import { Doctor } from "@models/IDoctor";
import { PatientUser } from "@models/IPatient";
import { User } from "../user/user.types";

export class UserAdapter implements IAdapter<Doctor | PatientUser, User> {
    convertEntityToModelArray(entity: (Doctor | PatientUser)[]): User[] {
        return entity.map(element => this.convertEntityToModel(element));
    }

    convertEntityToModel(entity: Doctor | PatientUser): User {
        if (this.isDoctor(entity)) {
            return {
                id: entity.id,
                name: entity.name,
                email: this.extractEmail(entity.contactInfo),
                specialty: entity.specialty,
                contactInfo: entity.contactInfo,
                identityDocument: entity.identityDocument,
                avatar: "assets/images/avatars/brian-hughes.jpg",
                type: "doctor",
                status: "active"
            };
        } else {
            return {
                id: entity.id,
                name: entity.name,
                email: this.extractEmail(entity.contactInfo),
                age: entity.age,
                gender: entity.gender,
                contactInfo: entity.contactInfo,
                capsules: entity.capsules,
                identityDocument: entity.identityDocument,
                avatar: "assets/images/avatars/brian-hughes.jpg",
                type: "patient",
                status: "active"
            };
        }
    }

    convertModelToEntity(model: User): Doctor | PatientUser {
        if (model.type === "doctor") {
            return {
                id: model.id,
                name: model.name,
                specialty: model.specialty || "",
                contactInfo: model.contactInfo || [],
                licenseNumber: "",
                password: "",
                identityDocument: model.identityDocument || [],
                patients: []
            } as Doctor;
        } else {
            return {
                id: model.id,
                name: model.name,
                age: model.age || 0,
                gender: model.gender || "",
                contactInfo: model.contactInfo || [],
                password: "",
                identityDocument: model.identityDocument || [],
                doctors: [],
                capsules: []
            } as PatientUser;
        }
    }

    private isDoctor(entity: Doctor | PatientUser): entity is Doctor {
        return (entity as Doctor).specialty !== undefined;
    }

    private extractEmail(contactInfo: { type: string; value: string }[]): string {
        const email = contactInfo.find(info => info.type === "email");
        return email ? email.value : "";
    }
}
