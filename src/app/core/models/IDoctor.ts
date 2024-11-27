export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    contactInfo: {
        type: string;
        value: string;
    }[];
    licenseNumber: string;
    password: string;
    identityDocument: {
        type: string;
        value: string;
    }[];
    patients: string[];
}
