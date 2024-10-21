import { IServImpuestos } from "./IServImpuestos";

export interface IServicio {
    cPerJurCodigo: string;
    nEstCodigo: number;
    nArtSerCodigo: number;
    cArtSerNombre: string;
    cDesLarga: string;
    cArtSerDesCorta: string;
    nArtSerTipCuenta: number;
    nArtTipoPrecio: number;
    nArtAsigIngresos: number;
    nArtSerServicioBanco: number;
    nArtSerServicioMora: number;
    nDocLinCantidad: number;
    nDocLinUnidad: number;
    nCantMinima:number;
    nCantMaxima:number;
    cDesUnidad: string;
    nPrecioDefault: number;
    nImpDefault: number;
    nVentaDefault: number;
    nPrecioMinimo: number;
    nPrecioMaximo: number;
    nPrecioMinorista: number;
    nPrecioMayorista: number;
    nArtSerValorPromocion: number;
    nArtSerValorDescuento: number;
    nConsCodigo: number;
    nOpeCodigo: number;
    codSucursal: string;
    descripSucursal: string;
    nUniOrgCodigo: number;
    codDpto: string;
    descripDpto: string;
    nFilCodigo: number;
    codSede: string;
    descripSede: string;
    nSedCodigo: number;
    codPresupuesto: string;
    descripPresupuesto;
    nBieCodigo: number;
    codBien: string;
    descripBien: string;
    nActCodigo: number;
    codActividad: string;
    descripActividad;
    nProyCodigo: number;
    nSucCodigo: number;
    nAfecto: number;
    nArtSerMasPorcentaje: number;
    impuestos: IServImpuestos[];
    //impuestos
    impIGV: ImpuestosServ;
    impISC: ImpuestosServ;
    impIGVPER: ImpuestosServ;
    impICBPER: ImpuestosServ;
    nImpSubItem: number;
    nImpTotal: number;
    nImpSubTotal: number;

    nImpuestoIGV: number;
    nImpuestoISC: number;
    nImpuestoICB: number;
    nImpuestoIGVPER: number;
    cBienServicio?: string;
    nVenPayRefMonto?:number,
    nVenPayRefNC?:number,
    nVenSaldo?:number,
    nVenSaldoDev?:number,
}

export interface ImpuestosServ {
    nCodigo: number;
    nPorcentaje: number;
    nCantidad: number;
}
