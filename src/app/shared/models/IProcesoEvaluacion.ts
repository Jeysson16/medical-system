export interface ProcesoEvaluacion {
    nAdmProEvaCodigo?: number;
    cPerJurCodigo?: string;
    cAdmProEvaCode?: string;
    cAdmProEvaNombre?: string;
    nAdmProEvaEstado?: number;
    procesoEvaluacionAlcance?: ProcesoAlcance[];
    procesoEvaluacionPeriodo?: ProcesoPeriodo[];
    procesoEvaluacionDetalles?: ProcesoEvaluacionDetalle[];
    dAdmProEvaFechaRegistro?: Date;
    cAdmProEvaUsuRegistro?: string;
    cAdmProEvaHostRegistro?: string;
    dAdmProEvaFechaUpd?: Date;
    cAdmProEvaUsuUpd?: string;
    cAdmProEvaHostUpd?: string;
}

export interface ProcesoEvaluacionDetalle {
    nAdmProEvaCodigo?: number;
    nAdmProEvaSecuencia?: number;
    nAdmComEvaCodigo?: number;
    bAdmComEvaDetObligatorio?: boolean;
    nAdmConEvaDetPesoEvaluacion?: number;
    nAdmConEvaDetNotaMin?: number;
    nAdmConEvaDetNotaMi?: number;
    nAdmComEvaDetFormaCalculo?: number;
    bAdmConEvaDetValorFinal?: boolean;
    dAdmConEvaDetFechaRegistro?: Date;
    cAdmConEvaDetUsuRegistro?: string;
    cAdmConEvaDetHostRegistro?: string;
    dAdmConEvaDetFechaUpd?: Date;
    cAdmConEvaDetUsuUpd?: string;
    cAdmConEvaDetHostUpd?: string;
}

export interface ProcesoAlcance {
    cClaveCompuesta?: string;
    nAdmProEvaCodigo?: number;
    nAdmProEvaAlcNivCodigo?: number;
    nombreNivel?: string;
    nAdmProEvaAlcSubNivCodigo?: number;
    nombreSubNivel?: string;
    nAdmProEvaAlcGruCodigo?: number;
    nombreGrupo?: string;
    nAdmProEvaAlcCampus?: number;
    nombreCampus?: string;
    nAdmProEvaAlcPrograma?: number;
    nombrePrograma?: string;
    dAdmProEvaFechaRegistro?: Date;
    cAdmProEvaUsuRegistro?: string;
    cAdmProEvaHostRegistro?: string;
    dAdmProEvaFechaUpd?: Date;
    cAdmProEvaUsuUpd?: string;
    cAdmProEvaHostUpd?: string;
}

export interface ProcesoPeriodo {
    cClaveCompuesta?: string;
    nAdmProEvaCodigo?: number;
    nPrdCodigo?: number;
    nPrdFaseCodigo?: number;
    nAdmProEvaPrdEstado?: boolean;
    dAdmProEvaPrdFechaRegistro?: Date;
    cAdmProEvaPrdUsuRegistro?: string;
    cAdmProEvaPrdHostRegistro?: string;
    dAdmProEvaPrdFechaUpd?: Date;
    cAdmProEvaPrdUsuUpd?: string;
    cAdmProEvaPrdHostUpd?: string;
}
