import { WFFasForAtriValues } from "./IWFFasForAtriValues";

export interface WFFaseFormAtributos {
    nWFFasForAtrCodigo?: number;
    nWFObjCodigo?: number;
    nWFNivelesCodigo?: number;
    nWFFasForAtrSecuencia?: number;
    cWFFasForAtrLabel?: string;
    cWFFasForAtrPlaceHolder?: string;
    cWFFasForAtrPlaceHolderOpc?: string;
    cWFFasForAtrDescription?: string;
    cWFFasForAtrTextHelp?: string;
    bWFFasForAtrEsRequerido?: boolean;
    bWFFasForAtrIsDateTime?: boolean;
    bWFFasForAtrIsAutomatic?: boolean;
    nWFFasForAtrTipoEntradaDato?: number;
    nWFFasForAtrSelectorMoneda?: number;
    cWFFasForAtrValue?: string;
    cWFFasForAtrValueOpc?: string;
    nWFFasForAtrEstado?: number;
    dWFFasForAtrFechaRegistro?: Date;
    cWFFasForAtrUsuRegistro?: string;
    cWFFasForAtrHostRegistro?: string;
    dWFFasForAtrFechaUpdate?: Date;
    cWFFasForAtrUsuUpdate?: string;
    cWFFasForAtrHostUpdate?: string;
    lstWFFasForAtriValuesEntity?: WFFasForAtriValues[];
    cWFObjImagen?: string;
    nWFObjTipo?: number;
}
