import { WFFaseFormAtributos } from "./IWFFaseFormAtributos";

export interface WFFases {
    nWFNivelesId?: number;
    nWFId?: number;
    cWFFaseName?: string;
    nWFSecuencia?: number;
    bWFNivAprobadoresMultiple?: boolean;
    bWFNivTodosAprueba?: boolean;
    nWFVisualizacion?: number;
    nWFFasesEstado?: number;
    dWFFasesFechaRegistro?: Date;
    cWFFasesUsuRegistro?: string;
    cWFFasesHostRegistro?: string;
    dWFFasesFechaUpd?: Date;
    cWFFasesUsuUpd?: string;
    cWFFasesHostUpd?: string;
    lstWFFaseFormAtributosEntity?: WFFaseFormAtributos[];
    bNext?: boolean;
}
