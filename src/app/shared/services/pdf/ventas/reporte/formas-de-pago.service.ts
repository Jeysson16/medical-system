import { Injectable } from "@angular/core";
import { IFormaPago } from "@shared/models/ventas/reportes/IFormaPago";
import { ExcelService } from "@shared/services/excel.service";
import { PdfService } from "@shared/services/pdf.service";
import { ICobranzaDet } from "@shared/models/ventas/reportes/ICobranzaDet";
import { ICobranzaSer } from "@shared/models/ventas/reportes/ICobranzaServ";
import moment from "moment";

@Injectable({
    providedIn: "root"
})
export class FormasDePagoService {
    constructor(private _excelService: ExcelService, private _pdfService: PdfService) {}

    obtenerCeldasTotal(montoPagos: number, tipoNivel: number, longitudMerge: number): any[] {
        const textoTotal = tipoNivel == 1 ? "Total general" : tipoNivel == 2 ? "Total" : "Subtotal";
        return [
            ...this._excelService.addColumnsHeader(this.obtenerConfCabecera(textoTotal, longitudMerge), "headOutlineL"),
            this._excelService.addObjectColumnTotalMount(montoPagos, "number")
        ];
    }

    obtenerConfCabecera(nombreCampo: string, columnSpace: number = 5): { value; addColumnSpace; style }[] {
        return [{ value: nombreCampo, addColumnSpace: columnSpace, style: true }];
    }

    obtenerLstFormPago(data: IFormaPago): object[] {
        return [
            this._excelService.addObjectColumn(data.fecha, "texto", true),
            this._excelService.addObjectColumn(data.reciboCaja, "texto", true),
            this._excelService.addObjectColumn(data.tipodoc, "texto", true),
            this._excelService.addObjectColumn(data.numeroDoc, "texto", true),
            this._excelService.addObjectColumn(data.cliente, "texto", true),
            this._excelService.addObjectColumnMoney(data.importe, 2),
            this._excelService.addObjectColumnMoney(data.tasaCambio, 2),
            this._excelService.addObjectColumnMoney(data.total, 2)
        ];
    }

    obtenerLstFormPagoGrup(data: IFormaPago): object[] {
        return [
            this._excelService.addObjectColumn(data.tipoPago, "texto", true),
            this._excelService.addObjectColumnMoney(data.importe, 2),
            this._excelService.addObjectColumnMoney(data.tc, 2),
            this._excelService.addObjectColumnMoney(data.importeTotal, 2)
        ];
    }

    obtenerLstCobranza(data: ICobranzaDet): object[] {
        return [
            this._excelService.addObjectColumn(data.establecimiento, "texto", true),
            this._excelService.addObjectColumn(data.cpercodigocliente, "texto", true),
            this._excelService.addObjectColumn(data.tipoDoc ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.documento, "texto", true),
            this._excelService.addObjectColumn(data.cliente, "texto", true),
            this._excelService.addObjectColumn(data.comtipo ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.comserie ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.comnumero ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.codSERVICIO ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.servicioDESC ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fecregistro ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.pagfecha ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fechaemi ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fechacierre ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.tipopago ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.banco ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cuentabanco ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.nroperacion ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.nrorecibocaja ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.desccaja ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.usuariocajero ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cajero ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.moneda ?? "-", "texto", true),
            this._excelService.addObjectColumnMoney(data.tipocambio, 2),
            this._excelService.addObjectColumnMoney(data.dolares, 2),
            this._excelService.addObjectColumnMoney(data.soles, 2),
            this._excelService.addObjectColumnMoney(data.ganPerTC, 2),
            this._excelService.addObjectColumnMoney(data.total, 2)
        ];
    }

    obtenerLstServicios(data: ICobranzaSer): object[] {
        return [
            this._excelService.addObjectColumn(data.cPerIntDescripcion, "texto", true),
            this._excelService.addObjectColumn(data.cPerCodigo, "texto", true),
            this._excelService.addObjectColumn(data.tipoDoc, "texto", true),
            this._excelService.addObjectColumn(data.cPerIdeNumero, "texto", true),
            this._excelService.addObjectColumn(data.cPerApellido + " " + data.cPerNombre, "texto", true),
            this._excelService.addObjectColumn(data.programa ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.nArtSerCodigo ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cArtSerNombre ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fechaRegistro ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fechaPago ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.fechaEmision ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cVenPayRecIngreso ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cVenComCode ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cVenComSerie ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cVenComNumero ?? "-", "texto", true),
            this._excelService.addObjectColumn(data.cConDescripcion ?? "-", "texto", true),
            this._excelService.addObjectColumnMoney(data.nVenPayTC, 2),
            this._excelService.addObjectColumnMoney(data.dolares, 2),
            this._excelService.addObjectColumnMoney(data.soles, 2),
            this._excelService.addObjectColumnMoney(data.total, 2)
        ];
    }

    dataTotalService(totalGeneral: number, cantidadDeCeldas: number): object[] {
        const celdasMezcladas = [];
        celdasMezcladas.push(this._excelService.addObjectColumnTotalMount("TOTAL GENERAL:", "texto", "dataStyleMontoTotalLeft"));
        for (let index = 0; index < cantidadDeCeldas; index++) celdasMezcladas.push(this._excelService.addObjectColumnTotalMount(null, "texto"));
        celdasMezcladas.push(this._excelService.addObjectColumnTotalMount(totalGeneral, "number"));

        return celdasMezcladas;
    }

    //EXPOR PDF
    obtenerTotales(descripcion: string, monto: number, tipo: number, longitud: number): any[] {
        return [
            this._pdfService.formatHeadBody(descripcion, longitud, { fontStyle: "bold", halign: "left", fontSize: 6 }),
            this._pdfService.formatMoney(monto, null, { fontStyle: "bold", halign: "right", fontSize: 6 }),
            tipo
        ];
    }

    dataBodyServicePDF(element: IFormaPago): any[] {
        return [
            { content: element.fecha, colSpan: 0, styles: { halign: "left" } },
            { content: element.reciboCaja, colSpan: 0, styles: { halign: "left" } },
            { content: element.tipodoc, colSpan: 0, styles: { halign: "left" } },
            { content: element.numeroDoc, colSpan: 0, styles: { halign: "left" } },
            { content: element.cliente, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatMoney(element.importe),
            this._pdfService.formatMoney(element.tasaCambio),
            this._pdfService.formatMoney(element.total)
        ];
    }

    dataBodyServicePDFAgrup(element: IFormaPago): any[] {
        return [
            { content: element.tipoPago, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatMoney(element.importe),
            // this._pdfService.formatMoney(element.tc),
            { content: element.tc ?? "-", colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatMoney(element.importeTotal)
        ];
    }
}
