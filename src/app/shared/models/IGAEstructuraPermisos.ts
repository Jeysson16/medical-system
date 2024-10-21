import { GAEstructuraPerDetalle } from "./IGAEstructuraPerDetalle";

export interface GAEstructuraPermisos {
    nGAEstpermisoCodigo?: number;
    cPerJurCodigo?: string;
    nPrdCodigo?: number;
    nGAEstAmbientes?: number;
    nAcdProCodigo?: number;
    nAcdGruCodigo?: number;
    nAcdNivCodigo?: number;
    nAcdSubNivCodigo?: number;
    dGAHorFechaIni?: Date | string;
    dGAHorFechaFin?: Date | string;
    dGAHorTipoHorario?: number;
    cGAEstPerObservacion?: string;
    dGAEstPerFechaRegistro?: Date;
    cGAEtsPerUsuarioRegistro?: string;
    cGAEstPerHostRegistro?: string;
    dGAEstPerFechaUpdate?: Date;
    cGAEtsPerUsuarioUpdate?: string;
    cGAEstPerHostUpdate?: string;
    perDetalle?: GAEstructuraPerDetalle[];
}
