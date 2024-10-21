export class Matricula {
    nAcdMatCodigo?: number;
    cPerJurCodigo?: string;
    nPrdCodigo?: number;
    dAcdMatFecha?: Date;
    nAcdPerEstCodigo?: number;
    cPerCodigo?: string;
    nAcdProDefCodigo?: number;
    nAcdMatCondicion?: number;
    nAcdMatMotivoAnulado?: number;
    nAcdMatEstado?: number;
    nAcdMatMedRegistro?: number;
    cAcdMatCurObservacion?: string;
    dAcdMatFechaRegistro?: Date;
    cAcdMatUsuRegistro?: string;
    cAcdMatHostRegistro?: string;
    listAcdMatCursos?: MatriculaCurso[];
}

export class HistorialMatricula extends Matricula {
    cPrdDescripcion?: string;
    dPrdIni?: Date;
    dPrdFin?: Date;
    nAcdMatriculaTIpoMovimiento?: string;
    dAcdMatfechaAnulacion?: Date;
    dAcdMatFechaUpd?: Date;
    cAcdMatUsuUpd?: string;
    cAcdMatHostUpd?: string;

    constructor() {
        super();
    }
}

export interface MatriculaCurso {
    nAcdMatCurLineaCodigo?: number;
    nAcdMatCodigo?: number;
    nPlaEstLineaCodigo?: number;
    nCicCodigo?: number;
    nAcdExpCurCodigo?: number;
    nPlaEstDetTipo?: number;
    nPlaEstLineaCodigoOrigen?: number;
    nAcdMatCursoCondicion?: number;
    nAcdMatCurNumeroVez?: number; //preguntar si admite solo number o string, en la tabla está como nchar
    fAcdmatCurNotaFinal?: number;
    cAcdMatCurLinObservacion?: string;
    nAcdMatCurLineaEstado?: number;
    dAcdMatCurLineaFechaRegistro?: string;
    cAcdMatCurLineaUsuRegistro?: string;
    cAcdMatCurLineaHostRegistro?: string;
    dAcdMatCurLineaFechaUpd?: string;
    cAcdMatCurLineaUsuUpd?: string;
    cAcdMatCurLineaHostUpd?: string;
    cursosSubGrupo?: [CursoSubGrupo, CursoSubGrupo];
}

export interface CursoSubGrupo {
    nAcdMatCurLineaCodigo?: number;
    nAcdSubGruEstCodigo?: number;
    nAcdMatCurSubGruEstado?: number;
    nAcdMatCurSubGruFechaRegistro?: Date;
    cAcdMatCurSubGruUsuRegistro?: string;
    cAcdMatCurSubGruHostRegistro?: string;
}
