import { DateTime } from "ts-luxon";

export interface ICtaPayment{
    cPerJurCodigo: string;
    nPayModCodigo: number;
    dPayFecIni: string | DateTime;
    dPayFecFin: string | DateTime;
    dPayFecContable: string | DateTime;
    dPayFecPago: string | DateTime;
    nPerCtaCodigo: number;
    nPayMedPago: number;
    nCtaPayMoneda: number;
    nPayEstado: number;
    cPayNumOpe: string;
    cPerUsuario: string;
    nPayNumOpe: number;
    nCtaPayGruCodigo: number;
}