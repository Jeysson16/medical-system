import { Currency } from "./ICurrency";

export class FacImpuestos {
    subImpuestoMontoOperacion: Currency;
    subImpuestoMontoTotal: Currency;
    subImpuestoCategoria = { value: "O", schemeID: "UN/ECE 5355", schemeName: "Tax Category Identifier", schemeAgencyName: "United Nations Economic Commission for Europe" }; // ??
    subImpuestoTributo = { value: "9998", schemeID: "UN/ECE 5153", schemeAgencyID: "6" }; // ??
    subImpuestoTributoNombre: string;
    subImpuestoTributoCodigoInternacional: string = "";

    constructor(subImpuestoMontoOperacion: Currency, subImpuestoMontoTotal: Currency, subImpuestoTributoNombre: string, subImpuestoTributoCodigoInternacional: string) {
        this.subImpuestoMontoOperacion = subImpuestoMontoOperacion;
        this.subImpuestoMontoTotal = subImpuestoMontoTotal;
        this.subImpuestoTributoNombre = subImpuestoTributoNombre;
        this.subImpuestoTributoCodigoInternacional = subImpuestoTributoCodigoInternacional;
    }
}
