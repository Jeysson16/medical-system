export interface WorkFlow {
    nWFId?: number;
    cPerJurCodigo?: string;
    cWFName?: string;
    nWFTipo?: number;
    nWFFormaAprobacion?: number;
    nWFModuloID?: number;
    nWFCantidadFases?: number;
    bWFPermiteReglasAprobacion?: boolean;
    nWFEstado?: number;
    dWFFechaRegistro?: Date;
    cWFHostRegistro?: string;
    cWFUsuarioRegistro?: string;
    dWFFechaUpdate?: Date;
    cWFHostUpdate?: string;
    cWFUsuarioUpdate?: string;
}
