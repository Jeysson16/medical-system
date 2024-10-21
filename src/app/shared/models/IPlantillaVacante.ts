export interface SysTemplateLoad {
    nSysTemplLoadId?: number;
    cSysTemplLoadNombre?: string;
    cPerJurCodigo?: string;
    nSysTemplLoadKeyCodigo?: number;
    nSysTemplLoadEstado?: number;
    estadoDescPlantilla?: string;
    cSysTemplLoadUsuUpdate?: string;
    cSysTemplLoadUsuRegistro?: string;
    dSysTemplLoadUsuRegistro?: string;
    dSysTemplLoadUsuUpdate?: string;
    detalle?: SysTemplateLoadDetail[];
}

export interface SysTemplateLoadDetail {
    nSysTLDetId?: number;
    nSysTemplLoadId?: number;
    cSysTLDetNombreCampo?: string;
    cSysTLDetTipoCampo?: string;
    nSysTLDRequiereContenedor?: number;
    cSysTLDetNombreContenedor?: string;
    cSysTLDetClaveValor?: string;
    cCodigoDescripcion?: any;
    cSysTLDetNombreColumnaValidate?: string;
    cSysTLDetClaveDescripcion?: string;
    nSysTLDetEstado?: number;
    estadoDescDetail?: string;
    cSysTLDetUsuRegistro?: string;
    cSysTLDetHostRegistro?: string;
    dSysTLDetFecRegistro?: Date;
    cSysTLDetUsuUpdate?: string;
    cSysTLDetHostUpdate?: string;
    dSysTLDetFecUpdate?: Date;
}
