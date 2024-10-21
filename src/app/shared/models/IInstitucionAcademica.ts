export interface InstitucionAcademica {
    nInstitucionAcaCodigo?: number;
    nInsAcaTipo?: number;
    nInsAcaTipoCodigo?: number;
    cInsAcaCodigoModular?: string;
    cInsAcaCodigoLocal?: string;
    cInsAcaNombre?: string;
    nInsAcaNivel?: number;
    nInsAcaNivelCodigo?: string;
    cAcdInsRuc?: string;
    nIntAcaFormaEnse?: number;
    nIntAcaFormaEnseCodigo?: number;
    nInsAcaGrenero?: number;
    nInsAcaDependencia?: number;
    nInsAcaDependenciaCodigo?: string;
    nInsAcaEstado?: number;
    cPrdAdmHostUpd?: string;
    dPrdAdmFechaRegistro?: Date; // "2022-06-10T20:57:22.460Z",
    cPrdAdmUsuario?: string;
    cPrdAdmHost?: string;
    dPrdAdmFechaUpdate?: Date; // "2022-06-10T20:57:22.460Z",
    cPrdAdmUsuarioUpd?: string;
    cPerJurCodigo?: string;
    canRemoved?: boolean;
}
