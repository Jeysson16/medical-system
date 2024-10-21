import { Injectable } from "@angular/core";
import { IEstadoCuentaCli } from "@shared/models/ventas/reportes/IEstadoCuentaCli";
import { ExcelService } from "@shared/services/excel.service";
import { PdfService } from "@shared/services/pdf.service";

@Injectable({
    providedIn: "root"
})
export class AnexosService {
    constructor(private _excelService: ExcelService, private _pdfService: PdfService) {}

    obtenerLstCContables(data: any): object[] {
        return [
            this._excelService.addObjectColumn(data.cPerCliCodigo, "texto", true),
            this._excelService.addObjectColumn(data.cPerCliRuc, "texto", true),
            this._excelService.addObjectColumn(data.cPerCliFullName, "texto", true),
            this._excelService.addObjectColumn(data.cCtaNombre, "texto", true),
            this._excelService.addObjectColumn(data.cCtaDescripcion, "texto", true),

            this._excelService.addObjectColumnMoney(data.nMontoDebe, 2),
            this._excelService.addObjectColumnMoney(data.nMontoHaber, 2),
            // this._excelService.addObjectColumnMoney(data.nPagadoHaber, 2),
            this._excelService.addObjectColumnMoney(data.nMontoSaldo, 2)
        ];
    }

    obtenerLstCPorCobrar(data: any): object[] {
        return [
            this._excelService.addObjectColumn(data.cPerCodigo, "texto", true),
            this._excelService.addObjectColumn(data.cPerIdeNumero, "texto", true),
            this._excelService.addObjectColumn(data.cPerNombreApellido, "texto", true),
            this._excelService.addObjectColumnMoney(data.nVenPaySaldo, 2)
        ];
    }

    obtenerLstEstCliente(data: IEstadoCuentaCli, totalSaldo): object[] {
        return [
            this._excelService.addObjectColumn(data.nro, "texto", true),
            this._excelService.addObjectColumnDate(data.dVenHeadPayFecha),
            this._excelService.addObjectColumn(data.cDesComprobante, "texto", true),
            this._excelService.addObjectColumn(data.cCodigoDocumento, "texto", true),
            this._excelService.addObjectColumnDate(data.dVenHeaFecVence),
            this._excelService.addObjectColumn(data.monedaDescripcion, "texto", true),
            this._excelService.addObjectColumn(data.glosadesc, "texto", true),
            this._excelService.addObjectColumnMoney(data.nVenCargoMB, 2),
            this._excelService.addObjectColumnMoney(data.nVenPagoMB, 2),
            this._excelService.addObjectColumnMoney(data.tc, 2),
            this._excelService.addObjectColumnMoney(data.nVenCargo, 2),
            this._excelService.addObjectColumnMoney(data.nVenPago, 2),
            this._excelService.addObjectColumnMoney(totalSaldo, 2)
        ];
    }

    obtenerDetallePdf(element: IEstadoCuentaCli, totalSaldo: number): any[] {
        return [
            { content: element.nro, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatDate(element.dVenHeadPayFecha),
            { content: element.cDesComprobante, colSpan: 0, styles: { halign: "left" } },
            { content: element.cCodigoDocumento, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatDate(element.dVenHeaFecVence),
            { content: element.monedaDescripcion, colSpan: 0, styles: { halign: "left" } },
            { content: element.glosadesc, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatMoney(element.nVenCargoMB),
            this._pdfService.formatMoney(element.nVenPagoMB),
            this._pdfService.formatMoney(element.tc),
            this._pdfService.formatMoney(element.nVenCargo),
            this._pdfService.formatMoney(element.nVenPago),
            this._pdfService.formatMoney(totalSaldo)
        ];
    }
}
