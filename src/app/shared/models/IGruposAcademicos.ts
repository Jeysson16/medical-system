export interface GruposAcademicos {
    nAcdGruCodigo?: number;
    cPerJurCodigo?: string;
    cAcdGruNombre?: string;
    cAcdGruDescripcion?: string;
    nAcdGruKeyReferencia?: number;
    cAcdGruKeyReferencia?: string;
    nAcdGruEstado?: number;
    dAcdGruFecRegistro?: Date;
    cAcdGruPerUser?: string;
    cAcdGruHostRegistro?: string;
    dAcdGruFecUpdate?: Date;
    cAcdGruPerUsuUpdate?: string;
    cAcdGruHostUpdate?: string;
}

export interface HorarioCurso {
    codigoGrupo: number;
    codigoCurso: string;
    codigoExpCurricular: number;
    codigoSeccion: string;
    codigoSubgrupo: number;
    codigoPlanDetalle: number;
    subgrupo: string;
    credito: number;
    tipo: number;
    ciclo: number;
    tipoHora: number;
    nGAHorHora: number;
    docente: string;
    horario: string;
    nombreCurso: string;
    numeroDia: string;
    vacantesMaximo: number;
    vacantesRegistrados: number;
    color?: string;
    subGruposDiaHora?: SubGrupoHorario[];
    codigoDiaHora: { dia: number; hora: number }[];
    identificador?: number;
    tipoDescripcion?: string;
    showIcon?: boolean; //mostrar o no el ícono
    lenRow?: number; //cantidad de filas que cubrirá en una tabla
}

export interface SubGrupoHorario {
    tipoSubGrupo: number;
    codigoSubgrupo: number;
    codigoDiaHora: DiaHora[];
    tipoSubGrupoDesc?: string;
}

export interface DiaHora {
    dia: number;
    hora: number;
}

export interface CursoMatricula {
    nombre: string;
    codigo: string;
    credito: string;
}
