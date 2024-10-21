import { Usuario } from "@shared/interfaces/IUsuario";
import { FacEmisor } from "./facEmisor";
import { FacNotaCredito } from "./facNotaCredito";
import { FacBoletaEmisor } from "./facBoletaEmisor";

export class FacElectronica {
    tipoComprobante: string;
    ambiente: string = "DES";
    nombre: string;
    rucEmpresa: string;
    facturaEmisor?: FacEmisor;

    notaCredito?: FacNotaCredito;
    boletaEmisor?: FacBoletaEmisor;
    notaDebito?: any;
    resumenDiario?: any;
    comunicaciondeBaja?: any;
    resumenDiarioReversionCRE?: any;
    retencion?: any;
    guiaRemision?: any;
    guiaTransportista?: any;
    auditoria?: any;
    imprimir?: boolean;

    constructor(tipoDeComprobante: string, ambiente: string, imprimir: boolean = false, facturaEmisor?: FacEmisor, boletaEmisor?: FacBoletaEmisor) {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        this.tipoComprobante = tipoDeComprobante;
        this.ambiente = ambiente;
        this.nombre = user.cPerJurName;
        this.rucEmpresa = user.cRuc;
        this.imprimir = imprimir;
        this.facturaEmisor = facturaEmisor;
        this.boletaEmisor = boletaEmisor;
    }
}
