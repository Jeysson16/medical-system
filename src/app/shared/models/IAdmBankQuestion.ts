import { AdmBankQueResponse } from "./IAdmBankQueResponse";

export interface AdmBankQuestion {
    nAdmBankQueCodigo?: number;
    nAdmBankCodigo?: number;
    nAdmBankQueSecuencia?: number;
    nAdmBankQueTypeResponse?: number;
    cAdmBankQueDescripcion?: string;
    nAdmBankQuerPuntajeOk?: number;
    nAdmBankQuerPuntajeBad?: number;
    cAdmBankQueTypeResponseDes?: string;
    bankResponse?: AdmBankQueResponse[];
}
