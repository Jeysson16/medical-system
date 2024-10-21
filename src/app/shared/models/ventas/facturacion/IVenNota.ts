export interface IVenNota{
    nVenEmiNotCodigo: number,
    cPerJurCodigo: string,
    cPerCodigo: string,
    cPerUsuCodigo: string,
    cVenEmiCodSunat: string,
    nVenEmiNotTipo: number,
    nVenEmiNotMotivo: number,
    cVenEmiNotObs: string,
    nVenHeaCodigoOrigen: number,
    cVenComIdentidad: string,
    nVenPayMonto: number,
    nVenPayMoneda: number,
    nVenPayTC: number,
    dVenEmiNotFecEmision: string|Date,
    dVenEmiNotFecRegistro: string|Date,
    nVenEmiNotEstado: number,
    nVenPayCodigo: number,
    nVenHeaCodigo: number,
    cVenEmiNotUsuRegistro: string,
    cVenEmiNotHostRegistro: string,
    dVenEmiNotFecUpdate: string|Date,
    cVenEmiNotUsuUpdate: string,
    cVenEmiNotHostUpdate: string
}