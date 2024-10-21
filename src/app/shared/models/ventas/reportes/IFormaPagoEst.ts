import { IFormaPago } from "./IFormaPago";

export interface IFormaPagoEst {
    establecimiento: string;
    lstDetailCajto: ICajero[];
    // lstDetailCajtoAgr: ICajeroAgrup[]
}

export interface ICajero {
    cajero: string;
    lstDetailTipDto: ITipPago[];
}

export interface ITipPago {
    tipo: string;
    lstDetailDto: IFormaPago[];
}
