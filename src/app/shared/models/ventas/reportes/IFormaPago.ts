export interface IFormaPago {
    nVenPayCodigo: number;
    codigoEstablecimiento: string;
    establecimiento: string;
    codigoCajero: string;
    cajero: string;
    formaPagoInt: number;
    tipoPago: string;
    reciboCaja: string;
    numeroDoc: string;
    fecha: string;
    tipodoc: string;
    cliente: string;
    importe: number;
    tasaCambio: number;
    total: number;
    tc?: number;
    importeTotal?: number;
}
