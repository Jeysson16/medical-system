import { ListaDetalle } from "./IListaDetalle";
export interface ListaControl {
    nLstControlCodigo?: number;
    cPerJurCodigo?: string;
    cLstNombre?: string;
    nFunCodigo?: number;
    nLstCtlTipo?: number;
    nLstMostrarAutoservicio?: number;
    nLstCtlDiasVencimiento?: number;
    dLstCtlFechaVence?: Date | string;
    nLstCtlSeguimiento?: number;
    nLstCtlEstado?: number;
    dLstCtlFechaRegistro?: Date;
    cLstCtlUsuario?: string;
    cLstCtlHost?: string;
    dLstCtlFechaUpdate?: Date;
    cLstCtlHostUpd?: null;
    cLstCtlUsuarioUpd?: null;
    nLstCtlIsFree?: boolean;
    estado?: string;
    lAcdLisCtlDetalle?: ListaDetalle[];
}
