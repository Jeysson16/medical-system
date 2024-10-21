export interface ElementoControl {
    nElemCtlCodigo: number;
    cPerJurCodigo: string;
    cElemCtlNombre: string;
    cElemCtlNomCorto: string;
    cElemCtlDescripcion: string;
    nElemCtlEstado: number;
    dElemCtlFechaRegistro: string;
    cElemCtlUsuario: string;
    cElemCtlHost: string;
    dElemCtlFechaUpdate: string;
    cElemCtlHostUpd: any;
    cElemCtlUsuarioUpd: any;
    nLstControlCodigo: number;
    estado?: string;
    canRemoved?: boolean;
}
