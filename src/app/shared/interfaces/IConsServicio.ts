import { EPMatAutoComplete } from "app/modules/admin/components/ep-mat-autocomplete/models/IEPMatAutoComplete"
import { Constante } from "./IConstante"
import { IPerInterface } from "./IPerInterface"
import { ServTipoCuenta } from "@shared/models/ventas/IServTipoCuenta"

export interface IConsServicio{
    typeService: Constante[]
    dispatchUnit: EPMatAutoComplete<IPerInterface>[],
    lstTypeAccounts: EPMatAutoComplete<ServTipoCuenta>[],
    lstTypePrice: Constante[],
    lstAssignPrice: Constante[]
}