export interface GAHorarioDetalle {
    nGAHorCodigo?: number;
    dGAHorFechaIni?: Date | string;
    dGAHorFechaFin?: Date | string;
    nGAHorDia?: number;
    nGAHorDiaSemana?: number;
    nGAHorMes?: number;
    nGAHorHora?: number;
    cPerCodigo?: string;
    nGAHorEstado?: number;
    dGAHorDetFecRegistro?: Date;
    dGAHorDetUsuRegistro?: string;
    dGAHorDetHostRegistro?: string;
    dGAHorDetFecUpdate?: Date;
    dGAHorDetUsuUpdate?: string;
    dGAHorDetHostUpdate?: string;
    dGAHorFechaDes?: Date | string;
}
