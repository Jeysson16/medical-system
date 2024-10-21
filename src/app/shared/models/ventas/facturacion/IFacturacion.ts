import { IVenHead } from "@shared/models/IVenHead";
import { IVenComprobante } from "../IVenComprobante";
import { ICuota } from "./ICuota";
import { CPaymentFac } from "./cPaymentFac";
import { IVenNota } from "./IVenNota";

export class IFacturacion {
    ventasCab: IVenHead;
    comprobante: IVenComprobante;
    // venPayment: CPaymentFac;
    lstvenPayment?:CPaymentFac[];
    cuotas: ICuota = null;
    venNota?:IVenNota;
    
    constructor(ventasCab: IVenHead, comprobante: IVenComprobante) {
        this.ventasCab = ventasCab;
        this.comprobante = comprobante;
    }
}
