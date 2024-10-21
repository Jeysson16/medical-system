export interface IVenComprobante {
    nVenHeaCodigo?: number;
    cPerJurCodigo?: string;
    nVenComTipo?: number;
    cVenComCode?: string;
    cVenComSerie?: string;
    cVenComNumero?: string;
    cVenComIdentidad?: string;
    cVenComReferencia?: string;
    nVenComReferencia?: number;
    dHeaFecEmisionRef?: Date | string;
    nVenComTipFacSerie?: number;
    dVenComFecRegistro?: Date | string;
    cVenComUsuRegistro?: string;
    cVenComHostRegistro?: string;
    dVenComFecUpdate?: Date | string;
    cVenComUsuUpdate?: string;
    cVenComHostUpdate?: string;
    nroDocCorrelativo?: string;
    tipoDocumento?: string;
    cPerCliCodigo?: string;
    cPerApellido?: string;
    cPerNombre?: string;
    nPerTipo?: number;
    cPerIdeNumero?: string;
    total?: number;
    dVenHeaFecRegistro?: Date | string;
    nVenComSunEstado?: number;
    cComSunNroTicket?: string;
    nVenHeaImporte?: number;

    nFacSerieCodigo: number;
}
