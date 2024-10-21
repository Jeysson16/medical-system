import { Currency } from "./ICurrency";

const agencyName = "United Nations Economic Commission for Europe";
export class FacItemServ {
    descripcion: string = "";
    tipoMoneda: string = "";
    // codigoTributoIgv:string='';
    // nombreTributoIgv:string='';
    tipoSistemaIsc: string = "";
    // codigoTributoIsc:string='';
    // nombreTributoIsc:string='';
    codigoInternacionalTributoIsc: string = ""; //?
    nroOrden: number;
    codProducto: string = "";
    nombreConceptoTributario: string = "";
    valorPropiedadItem: string = "";
    codigoConceptoItem: string = ""; //despues?
    fechaInicioPropiedadItem: string = new Date().toLocaleString();
    fechaFinPropiedadItem: string = new Date().toLocaleString();
    duracionDiasPropiedadItem = 0;
    cantidadUnidades: Currency;
    valorVentaItem: Currency;
    fechaTaxPointdate: string = new Date().toLocaleString();
    precioVentaUnitarioItem: Currency;
    codigoTipoPrecio: { value: string; listName: string }; //preguntar?
    nroDocHuesped: { value: string; currencyID?: string } = { value: "" };
    ayNRazonSocialHuesped: string = "";
    codigoPaisRecidenciaHuesped: { value: string; currencyID?: string } = { value: "" };
    nroDocHuespedPaqueteTuristico: { value: string; currencyID?: string } = { value: "" };
    uRINyARasonSocialHuespedPaqueteTuristico: string = "";
    nroAsientoPasajero: string = "";
    fechaInicioProgramado: string = new Date().toLocaleString();
    horaInicioProgramado: string = new Date().toLocaleString();
    nroDocIndentidadPasajero: { value: string; currencyID?: string } = { value: "" };
    nombresyApellidosPasajero: string = "";
    ciudadLugarDestino: string = "";
    ciudadLugarOrigen: string = "";
    indicadorDelCargo: boolean = false;
    codigoCargo: string = ""; // cc del usuario?

    factorCargo: string = ""; //?
    montoCargoDescuentoItem: Currency;
    montoCargoBaseDescuentoItem: Currency;
    montoTributoItem: Currency;
    montoOperacionItem: Currency;
    subMontoTributoItem: Currency;
    categoriaImpuesto = { schemeName: "Tax Category Identifier", schemeAgencyName: agencyName, value: "S" }; //preguntar ?
    porcentajeImpuesto: number; //decimal
    codigoTipoAfectacionIGV = { listName: "SUNAT:Codigo de Tipo de Afectación del IGV", value: 0 }; //preguntar?
    codigoInternacionalTributo = { schemeAgencyName: agencyName, value: 0 }; //preguntar?
    nombreTributo = "IGV";
    codigoTributo = { value: "VAT" }; // ?
    codigoSunat = { listName: "Item Classification", listURI: "UNSPSC", listAgencyName: "GS1 US", value: "50202201" };
    valorUnitarioItem: Currency;

    constructor(
        nroOrden: number,
        codProducto: string, //por revisar
        descripcion: string,
        tipoMoneda: string,
        // codigoTributoIgv:string,
        // nombreTributoIgv:string,
        tipoSistemaIsc: string,
        // codigoTributoIsc:string,
        // nombreTributoIsc:string,
        cantidadUnidades: Currency,
        valorVentaItem: Currency,
        precioVentaUnitarioItem: Currency,
        montoCargoDescuentoItem: Currency,
        montoCargoBaseDescuentoItem: Currency,
        montoTributoItem: Currency,
        montoOperacionItem: Currency,
        subMontoTributoItem: Currency,
        porcentajeImpuesto: number,
        valorUnitarioItem: Currency
    ) {
        this.nroOrden = nroOrden;
        this.codProducto = codProducto;
        this.descripcion = descripcion;
        this.tipoMoneda = tipoMoneda;
        // this.codigoTributoIgv=codigoTributoIgv;
        // this.nombreTributoIgv=nombreTributoIgv;
        this.tipoSistemaIsc = tipoSistemaIsc;
        // this.codigoTributoIsc=codigoTributoIsc;
        // this.nombreTributoIsc=nombreTributoIsc;
        this.cantidadUnidades = cantidadUnidades;
        this.valorVentaItem = valorVentaItem;
        this.precioVentaUnitarioItem = precioVentaUnitarioItem; //
        this.montoCargoDescuentoItem = montoCargoDescuentoItem;
        this.montoCargoBaseDescuentoItem = montoCargoBaseDescuentoItem;
        this.montoTributoItem = montoTributoItem;
        this.montoOperacionItem = montoOperacionItem;
        this.subMontoTributoItem = subMontoTributoItem;
        this.porcentajeImpuesto = porcentajeImpuesto;
        this.valorUnitarioItem = valorUnitarioItem;
    }
}
