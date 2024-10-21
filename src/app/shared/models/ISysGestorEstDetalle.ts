/* eslint-disable @typescript-eslint/naming-convention */
export interface SysGestorEstDetalle {
    idEstDetalleCodigo?: number;
    idEstGestorCodigo?: number;
    cGuiFile?: string;
    cNameFile?: string;
    cUrl?: string;
    cTypeFile?: string;
    nEstado?: number;
    dGesEstDetFecRegistro?: Date;
    dGesEstDetFecUpdate?: Date;
    cGesEstDetPerUsuRegistro?: string;
    cGesEstDetPerUsuUpdate?: string;
    cGesEstDetHostRegistro?: string;
    cGesEstDetHostUpdate?: string;
}
