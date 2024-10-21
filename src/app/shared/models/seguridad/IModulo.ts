export interface Modulo {
    nCodModulo?: number;
    cCodigoModulo?: string;
    cNombreModulo?: string;
    cDescripcion?: string;
    iJerarquia?: null;
    nModTipo?: number;
    bEstado?: number;
    dtPerRegistro?: Date;
    cId?: string;
    cTitle?: string;
    cSubTitle?: string;
    nType?: number;
    nIcon?: string;
    cLink?: string;
    cImage?: string;
    nModCodPadre?: number;
    checked?: boolean;
    children?: Modulo[] | null;
}
