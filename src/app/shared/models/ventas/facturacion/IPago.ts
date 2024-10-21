import { Moment } from "moment";

export interface IPago {
    indiceP?: number;
    fecha?: string;
    formaPago?: string;
    moneda?: string;
    nMoneda?: number;
    nTipoCambio?: number;
    nVenPayMonto?:number;
    nTipoPago?: number;
    importe?: number;
    cImporte?: string;
    cFormPago?: string;
    equivalente?: number;
    nVenPayForPago?:number;
    objGrupo?: IGrupo;
    objBanco?: IBanco;
    objCuenta?: ICuenta;
    cOperacion?: string;
    dVenPayRegFecha?: any;
}

export interface IGrupo {
    cPerJurCodigo: string;
    nCtaPayGruCodigo: number;
    cCtaPayGruNombre: string;
    nIntClase: number;
    nIntCodigo: number;
    dCtaPayFecRegistro;
    nCtaPayEstado: number;
    chartDes: string;
    chartValor: string;
    nCtaCodigo: number;
    cCtaNombre: string;
}

export interface IBanco {
    cPerCodigo: string;
    cPerApellido: string;
    cPerApellPat: string;
    cPerNombre: string;
    nPerTipo: number;
    cPerIdeNumero: string;
}

export interface ICuenta {
    nPerCtaCodigo?: number;
    cPerCodigo?: string;
    cNroCuenta?: string;
    nPerCtaTipo?: number;
    cPerCtaTipo?: string;
    cPerJurCodigo?: string;
    nMonCodigo?: number;
    cMonCodigo?: string;
    nPerCtaEstado?: number;
    cNroCuentaOpera?: string;
    cPerApellido?: string;
}
