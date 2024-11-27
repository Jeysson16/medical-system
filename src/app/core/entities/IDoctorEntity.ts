export interface DoctorEntity {
    id: string;
    name: string;
    specialty: string;
    contactInfo: Record<string, string>;
    licenseNumber: string;
    password: string;
    tipoDeDocumentoDeIdentidad: Record<string, string>;
    patients: string[];
}
