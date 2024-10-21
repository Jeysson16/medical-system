import { AcdSubGruposEstudio } from "./IAcdSubGrupoEstudio";

export interface AcdGruposEstudio {
    nAcdGruEstCodigo?: number;
    nPrdCodigo?: number;
    nPlaEstLineaCodigo?: number;
    nAcdGruSeccionCodigo?: number;
    nAcdGruTipoHora?: number;
    nAcdGruEstVacante?: number;
    cAcdGruEstFormulaGeneral?: string;
    bAcdGruEstMedioPuntoFavorece?: number;
    nAcdGruEstNumeroParciales?: number;
    nGAcdGruEstEstado?: number;
    cAcdGruEstFechaRegistro?: Date;
    cAcdGruEstUsuRegistro?: string;
    cAcdGruEstHostRegistro?: string;
    nAcdGruEstFechaUpd?: Date;
    cAcdGruEstUsuUpd?: string;
    cAcdGruEstHostUpd?: string;
    cAcdGruSeccionDes?: string;
    subGrupoEstudio?: AcdSubGruposEstudio[];
}
