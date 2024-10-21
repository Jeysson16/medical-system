import { Injectable } from "@angular/core";
import { ReporteHeadVentaDepartamento } from "@shared/models/ventas/reportes/IReporteHeadVentaDepartamento";
import { ReporteRegistroVenta } from "@shared/models/ventas/reportes/IReporteRegistroVenta";
import { ReporteVentaDepartamento } from "@shared/models/ventas/reportes/IReporteVentaDepartamento";
import { ExcelService } from "@shared/services/excel.service";
import { PdfService } from "@shared/services/pdf.service";
import { SEPARADOR_MILES, headerSubTittleExcel } from "app/utils/excel.config";

const texto = "texto";
const numero = "number";

@Injectable({
    providedIn: "root"
})
export class VentasDepartamentoService {
    constructor(private _excelService: ExcelService, private _pdfService: PdfService) {}

    dataBodySummary(data: ReporteVentaDepartamento): object[] {
        return [
            this._excelService.addObjectColumn(data.cPerCodigoDepartamento, "texto", true),
            this._excelService.addObjectColumn(data.cPerDescDepartamento, "texto", true),
            this._excelService.addObjectColumnMoney(data.nVenHeaFacturacion, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaGravada, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaExonerada, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaInafecta, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaISC, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaIGV, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaOTROS, 2),
            this._excelService.addObjectColumnMoney(data.nVenHeaTotal, 2)
        ];
    }

    dataTotalSummary(totalFac: number, totalGrav: number, totalExo: number, totalInaf: number, totalIsc: number, totalIgv: number, totalOtros: number, totalVen: number): object[] {
        return [
            this._excelService.addObjectColumnTotalMount("TOTALES S/.", "texto"),
            this._excelService.addObjectColumnTotalMount(null, "texto"),
            this._excelService.addObjectColumnTotalMount(totalFac, "number"),
            this._excelService.addObjectColumnTotalMount(totalGrav, "number"),
            this._excelService.addObjectColumnTotalMount(totalExo, "number"),
            this._excelService.addObjectColumnTotalMount(totalInaf, "number"),
            this._excelService.addObjectColumnTotalMount(totalIsc, "number"),
            this._excelService.addObjectColumnTotalMount(totalIgv, "number"),
            this._excelService.addObjectColumnTotalMount(totalOtros, "number"),
            this._excelService.addObjectColumnTotalMount(totalVen, "number")
        ];
    }

    dataTotalSummaryPDF(totalFac: number, totalGrav: number, totalExo: number, totalInaf: number, totalISC: number, totalIGV: number, totalOtros: number, totalImp: number): any {
        return [
            { content: "TOTAL:", colSpan: 2, styles: { fontStyle: "bold", fontSize: 6, halign: "center" } },
            this._pdfService.formatMoney(totalFac, true),
            this._pdfService.formatMoney(totalGrav, true),
            this._pdfService.formatMoney(totalExo, true),
            this._pdfService.formatMoney(totalInaf, true),
            this._pdfService.formatMoney(totalISC, true),
            this._pdfService.formatMoney(totalIGV, true),
            this._pdfService.formatMoney(totalOtros, true),
            this._pdfService.formatMoney(totalImp, true),
            3
        ];
    }

    dataBodyServicePDF(element: ReporteVentaDepartamento): any[] {
        return [
            { content: element.cCodeServicio, styles: { halign: "center" } },
            element.cNameServicio,
            this._pdfService.formatMoney(element.nVenHeaFacturacion),
            this._pdfService.formatMoney(element.nVenHeaGravada),
            this._pdfService.formatMoney(element.nVenHeaExonerada),
            this._pdfService.formatMoney(element.nVenHeaInafecta),
            this._pdfService.formatMoney(element.nVenHeaISC),
            this._pdfService.formatMoney(element.nVenHeaIGV),
            this._pdfService.formatMoney(element.nVenHeaOTROS),
            this._pdfService.formatMoney(element.nVenHeaTotal)
        ];
    }

    dataSubTotalServicePDF(
        sTotalFac: number,
        sTotalGrav: number,
        sTotalExo: number,
        sTotalInaf: number,
        sTotalIsc: number,
        sTotalIgv: number,
        sTotalOtros: number,
        sTotalVen: number
    ): any[] {
        return [
            { content: "SUBTOTAL S/.", colSpan: 2, styles: { fontStyle: "bold", fontSize: 6, halign: "right" } },
            this._pdfService.formatMoney(sTotalFac, true),
            this._pdfService.formatMoney(sTotalGrav, true),
            this._pdfService.formatMoney(sTotalExo, true),
            this._pdfService.formatMoney(sTotalInaf, true),
            this._pdfService.formatMoney(sTotalIsc, true),
            this._pdfService.formatMoney(sTotalIgv, true),
            this._pdfService.formatMoney(sTotalOtros, true),
            this._pdfService.formatMoney(sTotalVen, true),
            2
        ];
    }

    dataTotalServicePDF(totalFac: number, totalGrav: number, totalExo: number, totalInaf: number, totalIsc: number, totalIgv: number, totalAtr: number, totalImp: number): any {
        return [
            { content: "TOTAL GENERAL", colSpan: 2, styles: { fontStyle: "bold", fontSize: 6, halign: "center" } },
            this._pdfService.formatMoney(totalFac, true),
            this._pdfService.formatMoney(totalGrav, true),
            this._pdfService.formatMoney(totalExo, true),
            this._pdfService.formatMoney(totalInaf, true),
            this._pdfService.formatMoney(totalIsc, true),
            this._pdfService.formatMoney(totalIgv, true),
            this._pdfService.formatMoney(totalAtr, true),
            this._pdfService.formatMoney(totalImp, true),
            3
        ];
    }

    dataTittleService(element: ReporteHeadVentaDepartamento): object[] {
        return [
            this._excelService.addObjectColumnCustom(
                `${element.cPerCodigoDepartamento} - ${element.cPerDescDepartamento}`,
                texto,
                headerSubTittleExcel(10, "left", true, true, "C5D9F1")
            ),
            ...this._excelService.addObjectColumnCustomMultiple(9, null, texto, headerSubTittleExcel(10, "left", true, true, "C5D9F1"))
        ];
    }

    dataBodyService(detail: ReporteVentaDepartamento): object[] {
        return [
            this._excelService.addObjectColumnCustom(detail.cCodeServicio, texto, headerSubTittleExcel(8, "center", true, false)),
            this._excelService.addObjectColumn(detail.cNameServicio, texto, true),
            this._excelService.addObjectColumnMoney(detail.nVenHeaFacturacion, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaGravada, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaExonerada, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaInafecta, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaISC, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaIGV, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaOTROS, 2),
            this._excelService.addObjectColumnMoney(detail.nVenHeaTotal, 2)
        ];
    }

    dataSubTotalService(
        subTotalFac: number,
        subTotalGrav: number,
        subTotalExo: number,
        subTotalInaf: number,
        subTotalIsc: number,
        subTotalIgv: number,
        subTotalOtros: number,
        subTotalVen: number
    ): object[] {
        return [
            this._excelService.addObjectColumnCustom("SUBTOTAL:", texto, headerSubTittleExcel(10, "right", true, true)),
            this._excelService.addObjectColumnCustom(null, texto, headerSubTittleExcel(10, "right", true, true)),
            this._excelService.addObjectColumnCustom(subTotalFac, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalGrav, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalExo, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalInaf, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalIsc, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalIgv, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalOtros, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`),
            this._excelService.addObjectColumnCustom(subTotalVen, numero, headerSubTittleExcel(8, "right", true, true), `${SEPARADOR_MILES}.00`)
        ];
    }

    dataTotalService(
        totalValorFactura: number,
        totalOperacionGravada: number,
        totalExonerada: number,
        totalInafecta: number,
        totalIsc: number,
        totalIgv: number,
        totalOtrostributos: number,
        totalImportetotal
    ): object[] {
        return [
            this._excelService.addObjectColumnTotalMount("TOTAL GENERAL:", texto),
            this._excelService.addObjectColumnTotalMount(null, texto),
            this._excelService.addObjectColumnTotalMount(totalValorFactura, numero),
            this._excelService.addObjectColumnTotalMount(totalOperacionGravada, numero),
            this._excelService.addObjectColumnTotalMount(totalExonerada, numero),
            this._excelService.addObjectColumnTotalMount(totalInafecta, numero),
            this._excelService.addObjectColumnTotalMount(totalIsc, numero),
            this._excelService.addObjectColumnTotalMount(totalIgv, numero),
            this._excelService.addObjectColumnTotalMount(totalOtrostributos, numero),
            this._excelService.addObjectColumnTotalMount(totalImportetotal, numero)
        ];
    }

    dataBodyDetail(element: ReporteRegistroVenta): object[] {
        return [
            this._excelService.addObjectColumn(element.codigo, texto, true),
            this._excelService.addObjectColumn(element.fechaemisioncomprobante, texto, true),
            this._excelService.addObjectColumn(element.fechavencimiento, texto, true),
            this._excelService.addObjectColumn(element.comtipo, texto, true),
            this._excelService.addObjectColumn(element.comserie, texto, true),
            this._excelService.addObjectColumn(element.comnumero, texto, true),
            this._excelService.addObjectColumn(element.tipocliente, texto, true),
            this._excelService.addObjectColumn(element.numero, texto, true),
            this._excelService.addObjectColumn(element.cliente, texto, true),
            this._excelService.addObjectColumn(element.codigodepartamento, texto, true),
            this._excelService.addObjectColumn(element.descdepartamento, texto, true),
            this._excelService.addObjectColumn(element.codigoservicio, texto, true),
            this._excelService.addObjectColumn(element.nameservicio, texto, true),
            this._excelService.addObjectColumnMoney(element.valorfacturado, 2),
            this._excelService.addObjectColumnMoney(element.operaciongravada, 2),
            this._excelService.addObjectColumnMoney(element.exonerada, 2),
            this._excelService.addObjectColumnMoney(element.inafecta, 2),
            this._excelService.addObjectColumnMoney(element.isc, 2),
            this._excelService.addObjectColumnMoney(element.igv, 2),
            this._excelService.addObjectColumnMoney(element.otrostributos, 2),
            this._excelService.addObjectColumnMoney(element.importetotal, 2),
            this._excelService.addObjectColumnMoney(element.tipocambio, 3)
        ];
    }

    dataTotalDetail(
        totalValorFactura: number,
        totalOperacionGravada: number,
        totalExonerada: number,
        totalInafecta: number,
        totalIsc,
        totalIgv: number,
        totalOtrostributos: number,
        totalImportetotal: number
    ): object[] {
        return [
            ...this._excelService.addColumnsHeader([{ value: null, addColumnSpace: 12, style: false }]),
            this._excelService.addObjectColumnTotalMount("TOTALES S/.", texto),
            this._excelService.addObjectColumnTotalMount(totalValorFactura, numero),
            this._excelService.addObjectColumnTotalMount(totalOperacionGravada, numero),
            this._excelService.addObjectColumnTotalMount(totalExonerada, numero),
            this._excelService.addObjectColumnTotalMount(totalInafecta, numero),
            this._excelService.addObjectColumnTotalMount(totalIsc, numero),
            this._excelService.addObjectColumnTotalMount(totalIgv, numero),
            this._excelService.addObjectColumnTotalMount(totalOtrostributos, numero),
            this._excelService.addObjectColumnTotalMount(totalImportetotal, numero)
        ];
    }
}
