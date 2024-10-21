import { ReporteVentaDepartamento } from "./IReporteVentaDepartamento";

export interface ReporteHeadVentaDepartamento {
    cPerCodigoDepartamento?: string;
    cPerDescDepartamento?: string;
    lstDetail?: ReporteVentaDepartamento[];
}
