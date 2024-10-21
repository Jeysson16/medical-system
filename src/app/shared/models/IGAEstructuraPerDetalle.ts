export interface GAEstructuraPerDetalle {
    nGAEstpermisoCodigo?: number;
    dGAHorDetFechaIni?: Date | string;
    dGAHorDetFechaFin?: Date | string;
    nGAHorDetDia?: number;
    nGAHorDetDiaSemana?: number;
    nGAHorDetMes?: number;
    nGAHorDetHora?: number;
    dGAHorFecha?: Date | string;
    dGAEstPerDetFechaRegistro?: Date;
    cGAEtsPerDetUsuarioRegistro?: string;
    cGAEstPerDetHostRegistro?: string;
    dGAEstPerDetFechaUpdate?: Date;
    cGAEtsPerDetUsuarioUpdate?: string;
    cGAEstPerDetHostUpdate?: string;
}
