export interface AlmacenReporte {
    cPerCodigo?: string;
    nArtiMasCodigo?: number;
    cArtiMasCodigo?: string;
    dArtMasFecEfectiva?: Date;
    cArtMasDescripcion?: string;
    nArtMasEstado?: number;
    nArtMasUnidad?: number;
    cDesUnidad?: string;
    cGrupo?: string;
    cFamilia?: string;
    nSysModAssCodigo?: -1;
    fSysTasValor?: number;
    nSysTasRetCodigo?: number;
    fSysTasValorISC?: number;
    nSysTasRetCodigoISC?: number;
    nExistSol?: number;
    nSaldo?: number;
    nAlmCodigo?: number;
    nFinalidad?: number;
}
