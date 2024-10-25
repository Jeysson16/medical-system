import { PerDomicilioList } from "./IperDomicilioList";
import { PerIdentifica } from "./IperIdentifica";
import { PerIdiomaList } from "./IperIdiomaList";
import { PerImagen } from "./IperImagen";
import { PerJuridica } from "./IperJuridica";
import { PerMailList } from "./IperMailList";
import { PerName } from "./IperName";
import { PerNatural } from "./IperNatural";
import { PerRelacion } from "./IperRelacion";
import { PerSecurity } from "./IPerSecurity";
import { PerTelefonoList } from "./IperTelefonoList";

export class Persona {
    cCodigoEmpresa?: string;
    cPerCodigo?: string;
    cPerApellido?: string;
    cPerApellPat?: string;
    cPerNombre?: string;
    dPerNacimiento?: Date;
    nPerTipo?: number;
    nPerEstado?: number;
    cUbiGeoCodigo?: string;
    direccion?: string;
    nUbiGeoCodigo?: number;
    dPerDate?: Date;
    dPerFechaRegistro?: Date;
    dPerFechaUpdate?: Date;
    cPerHostRegistro?: string;
    cPerHostUpdate?: string;
    cPerUsuarioRegistro?: string;
    cPerUsuarioUpdate?: string;
    cLugarNacimientoDesc?: string;
    perSecurity?: PerSecurity;
    perMailList?: PerMailList[];
    perTelefonoList?: PerTelefonoList[];
    perIdiomaList?: PerIdiomaList[];
    perNatural?: PerNatural;
    perJuridica?: PerJuridica;
    perRelacion?: PerRelacion;
    perImagen?: PerImagen;
    perDomicilioList?: PerDomicilioList[];
    perIdentifica?: PerIdentifica;
    perName?: PerName;
    dni?: string;
}