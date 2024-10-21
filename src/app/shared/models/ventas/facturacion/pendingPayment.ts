import { DateTime } from "ts-luxon"

export interface IPendingPayment{
    dVenHeaFecEmision:string|DateTime,
    dVenHeaFecVence:string|DateTime,
    nVenComTipo:number,
    nVenHeaImporte:number,
    cPerJurCodigo:string,
    nVenHeaCodigo:number,
    cPerCliCodigo:string,
    cDesMoneda:string,
    cVenComSerie:string,
    cVenComNumero:string,
    cVenComIdentidad:string,
    cArtSerNombre:string,
    nVenDetItem:number,
    nVenDetTipLinea:number,
    nVenDetArtMasCodigo:number,
    nDocRefCodigo:number,
    nDocRefLinea:number,
    nVenDetMoneda:number,
    nVenDetTC:number,
    nVenDetCantidad:number,
    nVenDetPrecio:number,
    nVenDetTotal:number,
    nVenDetImportePago:number,
    nSaldoItem:number,
}

export interface IPendingItem{
    nSaldoItem: number;
    nSaldoItemHead: number;
    nVenDetArtMasCodigo: number;
    nVenDetImportePago: number;
    nVenDetItem: number;
    nVenDetMoneda: number;
    nVenDetTC: number;
    nVenDetTipLinea: number;
    nVenDetTotal: number;
    nVenHeaCodigo: number;
    nVenHeaSitCastigo: number;
    nVenHeaSitProvision: number;
}