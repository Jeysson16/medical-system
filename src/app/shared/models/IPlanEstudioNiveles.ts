export interface PlanEstudioNivel {
    planEstudiosNivel1: PlanEstudioSubNivel[];
    planEstudiosNivel2: PlanEstudioSubNivel[];
    planEstudiosNivel3: PlanEstudioSubNivel[];
}

export interface PlanEstudioSubNivel {
    nAcdProPlanEstCodigo: number;
    nAcdProPlanEstTipo: number;
    cAcdProPlanEstName: string;
    nAcdProCodigo: number;
    nAcdProModEstudios: number;
    esPadre: string;
    nProPlaEstEstado: number;
    ProPlaEstDetalle: ProPlaEstDetalle[];
}

interface ProPlaEstDetalle {
    nPlaEstLineaCodigo: number;
    nCicCodigo: number;
    nAcdProPlanEstCodigo: number;
    expCurricular: ExpCurricular;
}

export interface ExpCurricular {
    nAcdExpCurCodigo: number;
    cAcdExpDescripcion: string;
    cAcdExpNomCorto: string;
    nAcdExpCurTipCodigo: number;
    nAcdExpEstado: number;
}
