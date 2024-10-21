export interface ExcelHeader {
    module?: string;
    nameReport?: string;
    periodo?: string;
    moneda?: string;
    rango?: string;
}

export interface ExcelFilter {
    startFilter: string;
    endFilter: string;
}
