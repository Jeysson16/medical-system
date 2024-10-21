export interface ICuota {
    nVenHeaCodigo: number;
    cPerJurCodigo: string;
    nVenComTipo: number;
    nVenCuoPerNroCuota: number;
    nVenCuoImporteNeto: number;
    dVenCuoFecRegistro: string;
    cPerUsuCodigo: string;
    cPerHostCodigo: string;
    lstVenCuoDetail: ICuotaDetail[];
}

export interface ICuotaDetail {
    nVenHeaCodigo: number;
    cPerJurCodigo: string;
    nVenCuoDetItem: number;
    dVenCuoFecCuoDetVence: string;
    nVenCuoDetImporte: number;

    montoTotal?: number;
}
