export interface InterfaceModel {
    nIntCodigo?: number;
    nIntClase?: number;
    cIntJerarquia?: string;
    cIntNombre?: string;
    cIntDescripcion?: string;
    nIntTipo?: number;
    nIntEstado?: number;
    dIntFecRegistro?: Date;
    level?: number;
    isRemoved?: boolean;
    children?: InterfaceModel[];
}
