import { Impuestos } from "./ventas/facturacion/Impuestos";

export interface IVenHead {
    cPerJurCodigo: string;
    nVenHeaCodigo: number;
    // cVenHeaCode: string,
    nVenHeaTipCliente: number;
    cPerCliCodigo: string;
    nSubCliCodigoTipCliente: number;
    cPerSubCliCodigo: string;
    dVenHeaFecEmision: string | Date;
    dVenHeaFecVence: string | Date;
    nVenHeaEstado: number;
    nVenHeaTipVenta: number;
    nVenHeaMoneda: number;
    nVenHeaExportacion: number;
    nTipDocumento: number;
    nEstCodigo: number;
    nVenHeaSubTotal: number;
    nVenDetValorDsco: number;
    nVenDstoGlobal: number;
    nVenHeaImpuestos: number;
    nVenHeaRedondeo: number;
    nVenHeaImporte: number;
    nVenHeaRetencion: number;
    nVenHeaTotalImporte: number;
    nVenTipoRecargoConsumo: number;
    nVenRecargoConsumo: number;
    nVenMotivoDstoGlobal: number;
    nVenValorDstoGlobal: number;
    nVenHeaFormaVenta: number;
    cVenHeaCliDireccion: string;
    cVenCliCorreo: string;
    cVenClitelefono: string;
    nCajAperCodigo: number;
    nCajAperSecuencia: number;
    cVenNumRecIngreso: string;
    cVendedorTipCliente: string;
    cPerPriVendedor: string;
    cVenObservacion: string;
    bVenHeaAsiento: number;
    nVenHeaProgramacion: number;
    nVenHeaSitEmision: number;
    nVenHeaSitProvision: number;
    nVenHeaSitCastigo: number;
    dVenAccDetFechRegistro: string | Date;
    cVenHeaUsuRegistro: string;
    cVenHeaHostRegistro: string;
    dVenHeaFecUpdate: string | Date;
    cVenHeaUsuUpdate: string;
    cVenHeaHostUpdate: string;
    detalle: IVenHeadDetail[];
    nVenPayRefNC?: number;
    nVenPayRefMonto?: number;
    importeTotal?: number;
    nVenSaldo?: number;
    nVenSaldoDev?: number;
}

export interface IVenHeadDetail {
    nVenHeaCodigo: number;
    nVenDetItem: number;
    nVenDetTipLinea: number;
    nVenDetArtMasCodigo: number;
    cVenDetArtDescripcion: string;
    cVenDetObservacionLine: string;
    nVenDetArtMasCodigoLast: number;
    nDocRefCodigo: number;
    nDocRefLinea: number;
    nVenDetTipAfecto: number;
    nVenDetMoneda: number;
    nVenUnidmedida: number;
    nVenDetCantidad: number;
    nVenDetTC: number;
    nVenDetPrecio: number;
    nVenDetTipoDsco: number;
    nVenDetPorValor: number;
    nVenDetValorDsco: number;
    nVenDstoGlobal: number;
    nVenDetIGV: number;
    nVenDetImporteItem: number;
    nVenHeaRetencion: number;
    nVenHeaTotalImporte: number;
    nVenDetEquivalente: number;
    nConsCodigo: number;
    nOpeCodigo: number;
    nUniOrgCodigo: number;
    nFilCodigo: number;
    nSedCodigo: number;
    nBieCodigo: number;
    nActCodigo: number;
    nProyCodigo: number;
    nSucCodigo: number;
    dVenDetFecRegistro: string | Date;
    cVenDetUsuRegistro: string;
    cVenDetHostRegistro: string;
    dVenDetFecUpdate: string | Date;
    cVenDetUsuUpdate: string;
    cVenDetHostUpdate: string;
    lstVeaImpuesto: Impuestos[];
    nVenPayRefMonto?:number,
    nVenPayRefNC?:number,
    nVenSaldo?:number,
    nVenSaldoDev?:number,
    cDesUnidad?: string;
}






