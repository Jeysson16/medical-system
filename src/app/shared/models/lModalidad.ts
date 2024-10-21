export interface Modalidad {
    nAcdModCodigo?: number;
    cPerJurCodigo?: string;
    nAcdTipoCodigo?: number;
    cAcdTipoNombre?: string;
    cAcdModNombre?: string;
    nAcdModEstado?: number;
    nAcdModCodigoPadre?: number;
    dAcdModFecRegistro?: Date;
    cAcdModPerUsuRegistro?: string;
    cAcdModHostRegistro?: string;
    dAcdModFecUpdate?: Date;
    cAcdModPerUsuUpdate?: null;
    cAcdModHostUpdate?: null;
    estado?: string;
    subModalidades?: Modalidad[];
}
