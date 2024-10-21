export interface PerEstudiante {
    nAcdPerEstCodigo?: number;
    cPerJurCodigo?: string;
    cPerApellido?: null;
    cPerApellPat?: null;
    cPerNombre?: null;
    cPerAluCodigo?: string;
    nOpeCodigo?: number;
    nAcdProDefCodigo?: number;
    nFilCodigo?: number;
    nSedCodigo?: number;
    nProyCodigo?: number;
    nSucCodigo?: number;
    nConsCodigo?: number;
    nActCodigo?: number;
    nEstablecimiento?: number;
    nPrdAdmision?: number;
    nPrdActivacion?: number;
    nPrdTermino?: number;
    nAcdProPlanEstCodigo?: number;
    nAdmDocSolCodigo?: number;
    nAcdModCodigoEstudios?: number;
    nAcdModCodigoAdmision?: number;
    nAcdPlaPayCodigo?: number;
    nAcdCampusCodigo?: number;
    cPerEstExteno?: string;
    dAcdPerPlaFecTermino?: Date;
    nPerCtaCodigo?: number;
    cPerUsuCodigo?: string;
    dAcdPerEstFecRegistro?: string;
    cAcdPerEstHostRegistro?: string;
    dAcdPerEstFecUpdate?: string;
    cAcdPerEstPerUsuUpdate?: string;
    cAcdPerEstHostUpdate?: string;
}

export interface PerEstudiantePersona {
    nAcdPerEstCodigo?: number;
    cPerAluCodigo?: string;
    cPerJurCodigo?: string;
    descripcionDelCampus?: string;
    codigoPrograma?: number;
    nombrePrograma?: string;
    nombreModEstuidios?: string;
    nombreModAdminision?: string;
    nAcdProDefCodigo?: number;
    nSedCodigo?: number;
    nAcdProPlanEstCodigo?: number;
    nAcdModCodigoEstudios?: number;
    nAcdModCodigoAdmision?: number;
    nAcdCampusCodigo?: number;
    cPerEstExteno?: string;
    cAcdSubNivNombreDesc?: string;
    perDetalle?: AcdPerDetalle;
}

interface AcdPerDetalle {
    nombre: string;
    apellido: string;
    dni: string;
    email: string;
    fechaNacimiento: string;
    cLugarNacimientoDesc: string;
    telefono: string;
    direccion: string;
    genero: string;
}
