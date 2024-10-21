export interface ListaPermisoModulo {
    nCodModulo?: number;
    cNombreModulo?: string;
    nCodListaPermiso?: number;
    bPermitirAgregar?: boolean;
    dLisPerModFecRegistro?: Date;
    dLisPerModFecUpdate?: Date;
    dLisPerModUsuRegistro?: string;
    dLisPerModUsuUpdate?: string;
    dLisPerModHostRegistro?: string;
    dLisPerModHostUpdate?: string;
}

export interface ListaPermisoModuloDef {
    nCodListaPermiso?: number;
    cnombreLista?: string;
    lstPermisoModulo?: ListaPermisoModulo[];
}
