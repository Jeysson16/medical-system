export interface GAEstructura {
    nGAEstAmbientes?: number;
    cPerJurCodigo?: string;
    nAcdCampusCodigo?: number;
    nGAEstAmbPadre?: number;
    cGAEstNombre?: string;
    cGAEstJerarquia?: string;
    nGAEstUsoCodigo?: number;
    nIdEdificio?: number;
    nGAEstPiso?: number;
    nGAEstTipoAmbiente?: number;
    nGAEstDimensionL?: number;
    nGAEstDimensionH?: number;
    nGAEstDimensionW?: number;
    nGAEstDimensionMetros?: number;
    nGAEstAforo?: number;
    nGAEstEstado?: number;
    dGAEstFechaRegistro?: Date | string;
    cGAEstHostRegistro?: string;
    cGAEstUsuarioRegistro?: string;
    dGAEstFechaUpdate?: Date | string;
    cGAEstHostUpdate?: string;
    cGAEstUsuarioUpdate?: string;
    bRemovible?: boolean;
    estadoEstructura?: number;
    expandable?: boolean;
    idChildrenToogle?: number;
    children?: GAEstructura[];
}
