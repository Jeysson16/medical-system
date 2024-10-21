import { ExperienciaCurricular } from "./IExperienciaCurricular";
import { PlanEstudioPrerequisito } from "./IPreRequisitos";
export interface PlanEstudio {
    nAcdProPlanEstCodigo?: number;
    nAcdProPlanEstTipo?: number;
    nAcdProCodigo?: number;
    nAcdProModEstudios?: number;
    cAcdProPlanEstName?: string;
    dFecAprobacion?: Date;
    cPlaEstNroDocumento?: string;
    dFecVigencia?: Date;
    cAcdProPlanDocLink?: string;
    bCertificacionProgresiva?: boolean;
    nProPlaEstEstado?: number;
    dAcdProPlanFechaRegistro?: Date;
    cAcdProPlanHostRegistro?: string;
    cAcdProPlanUsuarioRegistro?: string;
    dAcdProPlanFechaUpdate?: Date;
    cAcdProPlanHostUpdate?: string;
    cAcdProPlanUsuarioUpdate?: string;
    children?: PlanEstudio[];
}

export interface PlanEstudioDetalle {
    nPlaEstLineaCodigo?: number;
    nAcdProPlanEstCodigo?: number;
    nCicCodigo?: number;
    nAcdExpCurCodigo?: number;
    cAcdDetCod?: string;
    nPlaEstDetCredito?: number;
    nPlaEstDetTipo?: number;
    nPlaEstDetHorTeoricaPre?: number;
    nPlaEstDetHorPracticaPre?: number;
    nPlaEstDetHorTeoricaVir?: number;
    nPlaEstDetHorPracticaVir?: number;
    nPlaEstDetHorTeoricaSPre?: number;
    nPlaEstDetHorPracticaSPre?: number;
    nPlaEstDetPeso?: number;
    cPlaEstDetSumilla?: string;
    nPlaEstDetSesiones?: number;
    nTotalCreditos?: number;
    nPlaEstDetInternado?: number;
    nPlaEstDetKeyReferencia1?: number;
    cPlaEstDetKeyReferencia1?: string;
    nPlaEstDetKeyReferencia2?: number;
    cPlaEstDetKeyReferencia2?: string;
    dPlaEstDetFechaRegistro?: Date;
    cPlaEstDetHostRegistro?: string;
    cPlaEstDetUsuarioRegistro?: string;
    dPlaEstDetFechaUpdate?: Date;
    cPlaEstDetHostUpdate?: string;
    cPlaEstDetUsuarioUpdate?: string;
    canRemoved?: boolean;
    cNombreCurso?: string;
    preRequisitos?: PlanEstudioPrerequisito[];
}

export interface PlanDetalleCurricular {
    planDetalle: PlanEstudioDetalle;
    expCurricular: ExperienciaCurricular;
}
