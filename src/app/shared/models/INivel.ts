import { Subnivel } from "./ISubnivel";

export interface Nivel {
    nAcdNivCodigo: number;
    cPerJurCodigo: string;
    cAcdNivNombre: string;
    dAcdNivFecha: Date;
    nAcdNivEstado: number;
    dAcdNivFecRegistro: Date;
    cAcdNivPerUsuRegistro: string;
    cAcdNivHostRegistro: string;
    dAcdNivFecUpdate: Date;
    cAcdNivPerUsuUpdate: null;
    cAcdNivHostUpdate: null;
    lAcdSubNivelesList: Subnivel[];
}
