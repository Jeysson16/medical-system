import { SafeUrl } from "@angular/platform-browser";

export interface PerUsuario {
    cPerJuridica?: string;
    cPerCodigo?: string;
    cPerUsuCodigo?: string;
    cPerUsuClave?: string;
    cPerUsuEstado?: number;
    dPerUsuFecha?: Date;
    dPerUsuFecRegistro?: Date;
    dPerUsuHosRegistro?: string;
    cPerUsuUsuRegistro?: string;
    dPerUsuFecUpdate?: Date;
    dPerUsuHosUpdate?: string;
    cPerUsuUsuUpdate?: string;
    token?: string;
    cNombreCompletoDes?: string;
    cTipoDoscumentoDes?: string;
    nDocumentoDes?: string;
    cDesPerIdeTipo?: string;
    gPhoto?: string;
    cUrlPhoto?: SafeUrl | string;
}
