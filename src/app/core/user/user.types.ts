export interface User {
    id: string;
    name: string;
    email: string;
    age?: number;
    gender?: string;
    specialty?: string;
    contactInfo?: {
        type: string;
        value: string;
    }[];
    identityDocument?: {
        type: string;
        value: string;
    }[];
    capsules?: string[];
    avatar?: string;
    type: string;
    status?: string;
}
