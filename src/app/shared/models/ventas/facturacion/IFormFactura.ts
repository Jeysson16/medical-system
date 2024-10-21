import { ICuota } from "./ICuota";

export interface IFormFactura {
    fechaEmision: any;
    cPerJurCodigo:string;
    fechaVen:any;
    tipoTran:number;
    moneda:number;
    facturaExporta:number;
    pagoAntici:number;
    pagoDeduce:number;
    tipoDoc:number;
    numDoc: string;
    codigo: string;
    cliente:any
    correo: string;
    telefono: string;
    direccion: string;
    tipoComprobante:number;
    nTipoCambio:number;
    tipoServicio:number;
    cuota:ICuota[];
    montoTotal:number;
    impuestos:number;
    nCajAperSecuencia:number;
    ventasCab:any;
    comprobante:any;
    venPayment:any;
    cuotas:any;
    nUniOrgCodigo:number;
}