/* eslint-disable @typescript-eslint/naming-convention */
export interface SysGestorFile {
    nIdGestorCodigo?: number;
    cPerJurCodigo?: string;
    cNombre?: string;
    nModulo?: number;
    cModulo?: string;
    dGesFileFecRegistro?: Date;
    cGesFilePerUsuRegistro?: string;
    cGesFileHostRegistro?: string;
    dGesFileFecUpdate?: Date;
    cGesFilePerUsuUpdate?: string;
    cGesFileHostUpdate?: string;
    bRemovible?: boolean;
}
