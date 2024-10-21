import { DateTime } from "ts-luxon";

export interface IComprobantes{
    cDocCodigo: string;
    nDocTipo: number;
    cDocNDoc: string;
    cConDescripcion: string;
    nMoneda: number;
    fMonto: number;
    nTasCambio: number;
    fTCDif: number;
    fMonEqui: number;
    fImpDetracion: number;
    Pagado: number;
    fMontoNotaDebito: number;
    fMontoNotaCredito: number;
    fMontoRef: number;
    nDocRefTipo: number;
    cDocCodigoRefDocTipo: string;
    nDocRefImporteDocTipo: number;
    dDocComFecContable: string|DateTime;
    cPerProveedor: string;
    cPerIdeNumero: string;
    cPerApellido: string;
    dDocComFecPago: string|DateTime;
    dDocFecha: number;
    cDocCodigoRefOC: string;
    SinRetencion: number;
    AgenteRetencion: number;
    AgenteBuenContribuyente: number;
    nAplicaDetraccion: number;
    nDocComLetrNroLinea: number;
    nDocComLetrCodigo: number;
    fSysTasRetValor: number;
    nDocSubTipo: number;
    nCarCodigo: number;
    nDocSolLinIGVRet: number;
    cDocSolLinIRRent: string;
    PagMenDedccion: number;

}
