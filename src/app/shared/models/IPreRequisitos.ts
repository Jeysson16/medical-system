export interface Prerequisito {
    nPlaEstLineaCodigo?: number;
    nPlaEstRequisito?: number;
    nAcdProPlanEstCodigo?: number;
    nCicCodigo?: number;
    nPlaEstDetReqCredito?: number;
    nAcdExpCurCodigo?: number;
    nAcdProPlaEstReqEstado?: number;
    dAcdProPlaEstReqFechaRegistro?: Date;
    cAcdProPlaEstReqUsuarioRegistro?: string;
    cAcdProPlaEstReqHostRegistro?: string;
    dAcdProPlaEstReqFechaUpdate?: Date;
    cAcdProPlaEstReqUsuarioUpdate?: string;
    cAcdProPlaEstReqHostUpdate?: string;
}

export interface PlanEstudioPrerequisito {
    nPlaEstRequisito: number;
    nPlaEstLineaCodigo: number;
    nombreCurso: string;
    nombrePlanEstudio: string;
    nombrePrograma: string;
    nAcdExpCurCodigo: number;
    ciclo: number;
    creditos: number;
}
