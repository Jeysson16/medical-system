import { Usuario } from "@shared/interfaces/IUsuario";
import moment from "moment";
import { IPaymentDetail } from "./IPaymentDetail";
import { IPaymentItem } from "./IPaymentItem";
import { IPaymentRef } from "./IPaymentRef";

export class CPaymentFac {
    nVenPayCodigo: number = 0;
    nVenHeaCodigo: number;
    cPerJurCodigo: string;
    dVenPayRegFecha: string;
    cVenPayRecIngreso: string;
    cPerUserCodigo: string;
    nVenPayEstado: boolean = true;
    cPerCodigo: string;
    nCajAperCodigo: number;
    nCajAperSecuencia: number;
    dVenPayProFecha: string;
    nPayCodigo: number = 0;
    dVenPayFecRegistro: string = moment(new Date()).format();
    cVenPayUsuRegistro: string;
    cVenPayHostRegistro: string = "";
    dVenPayFecUpdate: string = moment(new Date()).format();
    cVenPayUsuUpdate: string;
    cVenPayHostUpdate: string = "";

    venPaymentDetail: IPaymentDetail[];
    lstvenPaymentItem: IPaymentItem[];
    lstVenPaymenRef: any;
    nCodModul?: number;
    bVenPayAsiento?: boolean;

    constructor(
        nVenPayCodigo: number,
        nVenHeaCodigo: number,
        dVenPayRegFecha: string,
        cVenPayRecIngreso: string,
        cPerCodigo: string,
        nCajAperCodigo: number,
        nCajAperSecuencia: number,
        dVenPayProFecha: string
    ) {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        this.cPerJurCodigo= user.cPerJuridica;
        this.cPerUserCodigo= user.cPerCodigo;
        this.cVenPayUsuRegistro= user.cPerCodigo;
        this.cVenPayUsuUpdate= user.cPerCodigo;
        this.nVenPayCodigo = nVenPayCodigo;
        this.nVenHeaCodigo = nVenHeaCodigo;
        this.dVenPayRegFecha = dVenPayRegFecha;
        this.cVenPayRecIngreso = cVenPayRecIngreso;
        this.cPerCodigo = cPerCodigo;
        this.nCajAperCodigo = nCajAperCodigo;
        this.nCajAperSecuencia = nCajAperSecuencia;
        this.dVenPayProFecha = dVenPayProFecha;
    }
}
