export interface IPaymentDetail {
    nVenPayCodigo: number;
    nVenPayLinea: number;
    nVenPayForPago: number;
    nVenPayMoneda: number;
    nVenPayTC: number;
    nVenPayMonto: number;
    nVenPayEquivalente: number;
    nVenPayBanCodigo: number;
    nVenPayCardTipo: number;
    cVenPayNroCard: string;
    cVenPayNroOpe: string;
    dVenPayFechaPago: string;
    
    dVenPayFecRegistro: string;
    cVenPayUsuRegistro: string;
    cVenPayHostRegistro: string;
    dVenPayFecUpdate: string;
    cVenPayUsuUpdate: string;
    cVenPayHostUpdate: string;
    cDesPago?: string;
    cDesMoneda?: string;
    cFormPago?: string;
}
