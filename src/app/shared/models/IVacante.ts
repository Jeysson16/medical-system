export interface Vacante {
    nAcdModCodigo?: number;
    cAcdModNombre?: string;
    nAcdProDefCodigo?: number;
    nAcdProCodigo?: number;
    cAcdProNombre?: string;
    nAcdGruCodigo?: number;
    cAcdGruDescripcion?: string;
    nAcdCampusCodigo?: number;
    cAcdCamDescCorta?: string;
    cAcdCamDescripcion?: string;
    nAcdNivCodigo?: number;
    cAcdNivNombre?: string;
    nAcdSubNivCodigo?: number;
    cAcdSubNivNombre?: string;
    nAdmGesVacCodigo?: number;
    nPrdCodigo?: number;
    cPrdDescripcion?: string;
    cNrResolucion?: string;
    cDocAdjunto?: string;
    dAdmGesVacFechaRegistro?: Date;
    cAdmGesVacUsuRegistro?: string;
    cAdmGesVacHostRegistro?: string;
    dAdmGesVacFechaUpd?: Date;
    cAdmGesVacUsuUpd?: string;
    cAdmGesVacHostUpd?: string;
    admGesVacDetalle?: VacanteDetalle[];
}

export interface VacanteDetalle {
    nAdmGesVacDetCodigo?: number;
    nAdmGesVacCodigo?: number;
    nAcdProDefCodigo?: number;
    nModalidadAdmision?: number;
    nSubModalidadAdmision?: number;
    nAcdCampusCodigo?: number;
    nCantVacantes?: number;
    dAdmGesVacDetFechaRegistro?: Date;
    cAdmGesVacDetUsuRegistro?: string;
    cAdmGesVacDetHostRegistro?: string;
    dAdmGesVacDetFechaUpd?: Date;
    cAdmGesVacDetUsuUpd?: string;
    cAdmGesVacDetHostUpd?: string;
}

export interface TablaVacanteSubModalidad {
    codigoVacDetalle: number;
    codModalidad: number;
    codSubmodalidad: number;
    cAcdTipoNombre: string;
    cAcdSubModNombre: string;
    numVacantes: number;
}

export class VacantesExcel {
    nAdmGesVacCodigo?: number;
    nAcdProDefCodigo?: number;
    nModalidadAdmision?: number;
    nSubModalidadAdmision?: number;
    nCantVacantes?: number;

    constructor(nAdmGesVacCodigo: number, nAcdProDefCodigo: number, nModalidadAdmision: number, nSubModalidadAdmision: number, nCantVacantes: number) {
        this.nAdmGesVacCodigo = nAdmGesVacCodigo;
        this.nAcdProDefCodigo = nAcdProDefCodigo;
        this.nModalidadAdmision = nModalidadAdmision;
        this.nSubModalidadAdmision = nSubModalidadAdmision;
        this.nCantVacantes = nCantVacantes;
    }
}
