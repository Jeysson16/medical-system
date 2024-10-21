export interface Equivalencia {
    nAcdProPlaEstEquiCodigo?: number;
    cPerJurCodigo?: string;
    nAcdProEstEquiTipo?: number;
    cAcdProPlaEstEqiDescripcion?: string;
    nAcdProPlaEstVersion?: number;
    nInstitucionAcaCodigoOrigen?: number;
    nAcdProCodigoOrigen?: number;
    nAcdProPlanEstCodigoOrigen?: number;
    nAcdProPlanEstCodigoDestino?: number;
    nAcdProCodigoDestino?: number;
    cAcdProPlanEstEquivaHostRegistro?: string;
    dAcdProPlanEstEquivaFechaUpdate?: Date;
    cAcdProPlanEstEquivaUsuarioUpdate?: string;
    cAcdProPlanEstEquivaHostUpdate?: string;
    dAcdProPlanEstEquivaFechaRegistro?: Date;
    cAcdProPlanEstEquivaUsuarioRegistro?: string;
    equiDetalle?: EquiDetalle[];
}

export interface EquiDetalle {
    nAcdProPlaEstEquiDetCodigo?: number;
    nAcdProPlaEstEquiCodigo?: number;
    nAcdProPlaEstEquiDetLine?: number;
    nPlaEstLineaCodigo?: number;
    nTipoUnionElemento?: number; //0 Conjunción y 1 Disyunción
    dProPlaEstEquiDetFechaRegistro?: Date;
    cProPlaEstEquiDetHostRegistro?: string;
    cProPlaEstEquiDetUsuarioRegistro?: string;
    dProPlaEstEquiDetFechaUpdate?: Date;
    cProPlaEstEquiDetHostUpdate?: string;
    cProPlaEstEquiDetUsuarioUpdate?: string;
    cNombreCurso?: string;
    nCicloCurso?: number;
    detElemento?: DetElemento[];
}

export interface DetElemento {
    nAcdProPlaEstEquiDetCodigo?: number;
    nPlaEstLineaCodigo?: number;
    dProEstEquiDetEleFechaRegistro?: Date;
    cProEstEquiDetEleUsuRegistro?: string;
    cProEstEquiDetEleHostRegistro?: string;
    dProEstEquiDetEleFechaUpd?: Date;
    cProEstEquiDetEleUsuUpd?: string;
    cProEstEquiDetEleHostUpd?: string;
    cNombreCurso?: string;
    nCicloCurso?: number;
}

export interface TableDetalleEquivalencia {
    nAcdProPlaEstEquiDetCodigo: number;
    indice: number;
    codigoTipoUnion?: number;
    tipoUnion: string;
    ciclo: number;
    nPlaEstLineaCodigo: number;
    nombreCursoOrigen: string;
    elementosEquivalentes: TableElementoEquivalencia[];
}

export interface TableElementoEquivalencia {
    nAcdProPlaEstEquiDetCodigo: number;
    ciclo: number;
    nombreCursoDestino: string;
    nPlaEstLineaCodigo: number;
}
