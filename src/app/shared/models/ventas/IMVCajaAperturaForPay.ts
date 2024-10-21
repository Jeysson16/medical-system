export interface MVCajaAperturaForPay {
    nCajAperCodigo?: number;
    cPerJurCodigo?: string;
    nCajAperSecuencia?: number;
    nCajAperForPayTipo?: number;
    nCajAperForPayImporteInicial?: number;
    nCajAperForPaySaldoRecaudado?: number;
    bCajAperForPayEstado?: boolean;
    cCajApeForPayUsuRegistro?: string;
    cCajApeForPayHostRegistro?: string;
    dCajApeForPayFecRegistro?: Date;
    cCajApeForPayUsuModifica?: string;
    cCajApeForPayHostModifica?: string;
    dCajApeForPayFecModifica?: Date;
    nCajAperForPayTipoDesc?: string;
    nCajAperForPayDeposito?: number;
}
