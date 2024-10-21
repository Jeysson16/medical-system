export interface IServImpuestos {
    cPerJurCodigo: string;
    nArtiMasCodigo: number;
    nSysTasRetCodigo: number;
    cSysConfVarTasImpKey: string;
    dArtSerMasFecEfectiva: string;
    nArtSerMasClase: number;
    cDescripcionClase: string;
    nAfecto: number;
    cDescripcionAfecto: string;
    nArtSerMasPorcentaje: number;
    nArtSerMasImporteTope: number;
    tipoCalculo: number;
    nVenPorcentaje: number;
    nVenDetImporte: number;

    importe?: number;
}
