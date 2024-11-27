export interface PatientEntity {
    id: string;
    name: string;
    age: number;
    gender: string;
    contactInfo: Record<string, string>;
    password: string;
    tipoDeDocumentoDeIdentidad: Record<string, string>;
    doctors: string[];
    capsules: string[];
}
