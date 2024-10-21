import { Currency } from "./ICurrency";

export class FacCuotas {
    formaPago: string;
    tipoPago: string;
    montoPendientePago: Currency;
    fechaPago: string;

    constructor(formaPago: string, tipoPago: string, montoPendientePago: Currency, fechaPago: string) {
        this.formaPago = formaPago;
        this.tipoPago = tipoPago;
        this.montoPendientePago = montoPendientePago;
        this.fechaPago = fechaPago;
    }
}
