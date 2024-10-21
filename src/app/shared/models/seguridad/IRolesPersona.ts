import { RolListaPermiso } from "./IRolListPermiso";

export interface RolesPersona {
    cPerCodigo?: string;
    nCodRol?: number;
    bEstado?: number;
    nModTipo?: number;
    dRolPerFecRegistro?: Date;
    dRolPerFecUpdate?: Date;
    cRolPerUsuRegistro?: string;
    cRolPerUsuUpdate?: string;
    cRolPerHostRegistro?: string;
    cRolPerHostUpdate?: string;
    cRolNombre?: string;
    cUserRegister?: string;
    lstRolListaPermisos?: RolListaPermiso[];
}
