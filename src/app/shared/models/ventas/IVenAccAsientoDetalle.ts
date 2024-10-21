/* eslint-disable @typescript-eslint/naming-convention */
import { VenAccAsiento } from "./IVenAccAsiento";

export interface VenAccAsientoDetalle extends VenAccAsiento {
    dVenHeaFecEmision?: Date;
    cVenComp?: string;
    cVenComIdentidad?: string;
    nVenHeaCodigo?: number;
    nVenAccDetLine?: number;
    cVenAccDetGlosa?: string;
    nVenAccDetMoneda?: number;
    codCuentacontable?: string;
    descripCuentacontable?: string;
    nDebeImpBase?: number;
    nHaberImpBase?: number;
    nDebe?: number;
    nHaber?: number;
    codSucursal?: string;
    descripSucursal?: string;
    codDpto?: string;
    escripDpto?: string;
    codPresupuesto?: string;
    descripPresupuesto?: string;
    codSede?: string;
    descripSede?: string;
    codBien?: string;
    descripBien?: string;
    codActividad?: string;
    descripActividad?: string;
    nTasaCambio?: number;
}
