import { Usuario } from "@shared/interfaces/IUsuario";
import { FacItemServ } from "./facItemServ";
import { Currency } from "./ICurrency";
import { FacCuotas } from "./facCuotas";
import { FacImpuestos } from "./facImpuestos";

export class FacEmisor {
    operacion: { value: string } = { value: "" }; //?
    fechaEmision: string;
    // nroRucEmisor:string='';
    horaEmision: string;
    serieNumeroFactura: string;
    fechaVencimiento: string;
    documento: { value: string }; // se guarda 01,02
    leyenda: { languageLocaleID: string; value: string };
    nroSerieGuiaRemision: string = "";
    moneda: { value: string };
    totalItemsFactura: number;
    fechaIniCicloFact: string = new Date().toLocaleString();
    fechaFinClicloFact: string = new Date().toLocaleString();
    nroOrden: string = "";
    guiaRemision: any; // ?
    nroSuministro: string = "";
    tipoServicioPublico: any; //?
    tipoServicioTelecom: any; //?
    tipoTarifaContratada: any; //?
    nroDocumentoRelacionado: any; //?
    tipoDocumentoRelacionado: any; //?
    nombreComercialEmisor: string;
    ayNRazonSocialEmisor: string;
    emisor: { value: string };
    codigoDomicilioFiscalAnexoEmisor: string; //sunat de cajaa aperturada
    ayNRazonSocialCliente: string; //cliente
    cliente: { value: string };

    cuotas: FacCuotas[];

    indicadorDescuentoGlobal: boolean = false; //?
    codigoDescuentoGlobal: { value: string } = { value: "00" };

    factorCargoDescuentoItem: number = 0;
    montoCargoDescuentoGlobal: Currency; //??
    montoBaseDescuentoGlobal: Currency; //??
    montosTotalImpuestos: Currency;

    impuesto: FacImpuestos[];

    totalValorVenta: Currency;
    totalPrecioVenta: Currency;
    totalDescuentos: Currency;
    totalOtrosCargos: Currency;
    totalAnticipos: Currency;
    importeTotalServicio: Currency;

    items: FacItemServ[];

    constructor(
        fechaEmision: string,
        horaEmision: string,
        fechaVencimiento: string,
        serieNumeroFactura: string,
        ayNRazonSocialCliente: string,
        nroSerieGuiaRemision: string,
        emisor: { value: string },
        codigoDomicilioFiscalAnexoEmisor: string,
        cliente: { value: string }, //*-
        documento: { value: string },
        leyenda: { languageLocaleID: string; value: string }, //
        moneda: { value: string }, //
        totalItemsFactura: number,
        montosTotalImpuestos: Currency, //
        totalValorVenta: Currency,
        totalPrecioVenta: Currency,
        totalDescuentos: Currency,
        totalOtrosCargos: Currency,
        totalAnticipos: Currency,
        importeTotalServicio: Currency,
        cuotas?: FacCuotas[],
        impuestos?: FacImpuestos[],
        items?: FacItemServ[]
    ) {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        this.serieNumeroFactura = serieNumeroFactura;
        this.fechaEmision = fechaEmision;
        this.horaEmision = horaEmision;
        this.fechaVencimiento = fechaVencimiento;
        this.documento = documento;
        this.leyenda = leyenda;
        this.moneda = moneda;
        this.totalItemsFactura = totalItemsFactura;
        this.nroSerieGuiaRemision = nroSerieGuiaRemision;
        this.nombreComercialEmisor = user.cPerJurName;
        this.ayNRazonSocialEmisor = user.cPerJurName;
        this.emisor = emisor;
        this.codigoDomicilioFiscalAnexoEmisor = codigoDomicilioFiscalAnexoEmisor;
        this.ayNRazonSocialCliente = ayNRazonSocialCliente;
        this.cliente = cliente;

        this.montosTotalImpuestos = montosTotalImpuestos;
        this.totalValorVenta = totalValorVenta;
        this.totalPrecioVenta = totalPrecioVenta;
        this.totalDescuentos = totalDescuentos;
        this.totalOtrosCargos = totalOtrosCargos;
        this.totalAnticipos = totalAnticipos;
        this.importeTotalServicio = importeTotalServicio;
        this.cuotas = cuotas;
        this.impuesto = impuestos;
        this.items = items;
    }
}
