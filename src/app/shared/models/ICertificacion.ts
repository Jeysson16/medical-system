export interface Certificacion {
    nAcdProPlanEstCodigo?: number;
    nAcdProPlaCerCodigo?: number;
    cAcdProPlaCerNombre?: string;
    nAcdProPlaCerEstado?: number;
    dAcdProPlaCerFecIni?: Date;
    dAcdProPlaCerFecFin?: Date;
    dAcdProPlaCerFechaRegistro?: Date;
    cAcdProPlaCerHostRegistro?: string;
    cAcdProPlaCerUsuarioRegistro?: string;
    dAcdProPlaCerFechaUpdate?: Date;
    cAcdProPlaCerHostUpdate?: string;
    cAcdProPlaCerUsuarioUpdate?: string;
    cerDetalle?: CertificacionDetalle[];
}

export interface CertificacionDetalle {
    nAcdProPlanEstCodigo: number;
    nAcdProPlaCerCodigo: number;
    nCicCodigo: number;
    nAcdExpCurCodigo: number;
    nActExpCurCriterio: number;
    nNotaMinima: number;
    nAcdProPlaCerDetEstado: number;
    nAcdExpCurCodigoRef: number;
    dAcdProPlaCerDetFechaRegistro: Date;
    cAcdProPlaCerDetHostRegistro: string;
    cAcdProPlaCerDetUsuarioRegistro: string;
    dAcdProPlaCerDetFechaUpdate: Date;
    cAcdProPlaCerDetHostUpdate: string;
    cAcdProPlaCerDetUsuarioUpdate: string;
}
