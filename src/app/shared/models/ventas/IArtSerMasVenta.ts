import { DetalleArtMasterDetraccion } from "./IDetalleArtMasterDetraccion";

export interface ArtSerMasVenta {
    cPerJurCodigo: string;
    dPerFecEfectiva: Date;
    nArtSerMasTipo?: number;
    nArtSerMasProducto?: number;
    nEstCodigo?: number;
    cEstablecimiento: string;
    nVenMoneda?: number;
    cMoneda: string;
    fPrecioDefault?: number;
    fPrecioMinimo?: number;
    fPrecioMaximo?: number;
    nCantMinima?:number;
    nCantMaxima?:number;
    fPrecioMinorista?: number;
    fPrecioMayorista?: number;
    nArtSerValorPromocion?: number;
    nArtSerValorDescuento?: number;
    nConsCodigo?: number;
    nOpeCodigo?: number;
    nUniOrgCodigo?: number;
    nFilCodigo?: number;
    nSedCodigo?: number;
    nBieCodigo?: number;
    nActCodigo?: number;
    nProyCodigo?: number;
    nSucCodigo?: number;
    dArtSerFechaRegistro: Date;
    cArtSerUsuCodigoRegistro: string;
    cArtSerHostCodigoRegistro: string;
    dArtSerFechaUpdate: Date;
    cArtSerUsuCodigoUpdate: string;
    cArtSerHostCodigoUpdate: string;
}
