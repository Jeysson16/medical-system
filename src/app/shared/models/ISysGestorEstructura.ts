/* eslint-disable @typescript-eslint/naming-convention */
export interface SysGestorEstructura {
    idEstGestorCodigo?: number;
    idGestorCodigopadre?: number;
    idGestorCodigo?: number;
    cJerarquia?: string;
    cNombreCorto?: string;
    cNombreLargo?: string;
    nEstado?: number;
    dGestEstFecRegistro?: Date;
    dGesEstFecUpdate?: Date;
    cGesEstPerUsuRegistro?: string;
    cGesEstPerUsuUpdate?: string;
    cGestEstHostRegistro?: string;
    cGesEstHostUpdate?: string;
}
