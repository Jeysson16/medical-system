export interface Campus {
    nAcdCampusCodigo?: number;
    cPerJurCodigo?: string;
    cAcdCamDescripcion?: string;
    cAcdCamDescCorta?: string;
    nAcdKeyReferencia?: number;
    cAcdKeyReferencia?: string;
    cAcdCamUbiGeo?: string; //el código jerarquico (130101 - ejemplo)
    nAcdCamUbiGeo?: number; //código del ubigeo (040601), nUbigeoCodigo - revisar valor de la constante
    cAcdCamDireccion?: string;
    cAcdCamPersonaResponsable?: string;
    nAcdCamEstado?: number;
    dAcdCamFechaRegistro?: Date;
    cAcdCamUsuRegistro?: string;
    cAcdCamHostRegistro?: string;
    dAcdCamFechaUpdate?: Date;
    cAcdCamUsuarioUpd?: string;
    cAcdCamHostUpd?: string;
    estado?: string;
}
