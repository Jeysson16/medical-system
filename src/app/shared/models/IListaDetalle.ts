export interface ListaDetalle {
    nLstControlCodigo?: number;
    nElemCtlCodigo?: number;
    dLisCtlFechaVence?: Date | string;
    nLisCtlDiasVence?: number;
    nLisCtlSecuencia?: number;
    nLisCtlObligatorio?: number;
    dLisCtlFechaRegistro?: Date;
    cLisCtlUsuario?: string;
    cLisCtlHost?: string;
    dLisCtlFechaUpdate?: Date;
    cLisCtlHostUpd?: null;
    cLisCtlUsuarioUpd?: null;
    nombreCortoElemento?: string;
    nElemCtlDes?: string;
    nLisCtlObligatorioDes?: string;
    nLstAcPerDetEstadoDes?: string;
    cPerJurCodigo?: string;
    cPerCodigo?: string;
    nFormaRegistro?: number;
    cIdFile?: string;
    cIdPathFile?: string;
    nTypeFile?: number;
    cNameFile?: string;
    nLstAcPerDetEstado?: number;
    cLisPerDetObservacion?: string;
    dLstAsiPerFechaRegistro?: Date;
    dLstAsiPerFechaUpdate?: Date;
    cLstAsiPerHostRegistro?: string;
    cLstAsiPerHostUpdate?: string;
    cLstAsiPerUsuarioRegistro?: string;
    cLstAsiPerUsuarioUpdate?: string;
    dLisCtlFechaVenceCalculado?: Date;
}
