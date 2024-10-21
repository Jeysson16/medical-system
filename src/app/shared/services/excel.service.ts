import { Injectable } from "@angular/core";
import { ExcelFilter, ExcelHeader } from "@shared/interfaces/IExcelProperties";
import { Usuario } from "@shared/interfaces/IUsuario";
import { HeadTable, SEPARADOR_MILES, SizeCellIndice, configuracionesExcel, headerStyleExcel } from "app/utils/excel.config";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx-js-style";
import { cloneDeep } from "lodash";
import moment from "moment";

const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8";
const EXCEL_EXT = ".xlsx";

@Injectable({
    providedIn: "root"
})
export class ExcelService {
    user = JSON.parse(localStorage.getItem("user")) as Usuario;

    exportarExcel(header: ExcelHeader, data: any[], excelFileName: string, colProps?: any[], rowProps?: any[], rowFilter?: ExcelFilter, merge?: any[]): void {
        const mergeCells = cloneDeep(merge) ?? [];
        const cols = [...colProps] ?? [];
        const rows = [...rowProps] ?? [];
        if (header) {
            data.splice(0, 0, ...this.headerReport(header));
            mergeCells.push(...this.combineHeaderCells(header));
            if (cols[0].wpx==90) cols.splice(0, 1, { wpx: 100 });
            // else cols.push({ wpx: 100 });
        }
        const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
        worksheet["!cols"] = cols;
        worksheet["!rows"] = rows;
        worksheet["!merges"] = mergeCells;
        const range = worksheet["!cols"];
        const rangoAutofiltrado = "A9:" + String.fromCharCode(65 + range.length - 1) + "9";
        if (rowFilter) worksheet["!autofilter"] = { ref: XLSX.utils.encode_range(XLSX.utils.decode_range(`${rowFilter.startFilter}:${rowFilter.endFilter}`)) };
        const workBook: XLSX.WorkBook = {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            Sheets: { Hoja1: worksheet },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            SheetNames: ["Hoja1"]
        };

        const excelBuffer: any = XLSX.write(workBook, { bookType: "xlsx", type: "array" });
        this.saveAsExcel(excelBuffer, excelFileName);
    }

    lengthHeader(header: ExcelHeader): number {
        return this.headerReport(header).length;
    }

    addColumnsHeader(headTable: HeadTable[], estiloPersonalizado?: string): any {
        const head = [];
        headTable.map((dat: HeadTable) => {
            if (dat.value) head.push({ v: dat.value, t: "s", s: estiloPersonalizado ? configuracionesExcel[estiloPersonalizado] : configuracionesExcel.cabeceraTablaEstilo });
            for (let i = 0; i < dat.addColumnSpace; i++) {
                head.push({
                    v: "",
                    t: "s",
                    s: dat.style ? (estiloPersonalizado ? configuracionesExcel[estiloPersonalizado] : configuracionesExcel.cabeceraTablaEstilo) : configuracionesExcel.headerStyle
                });
            }
        });
        return head;
    }

    addObjectColumn(value: string | number | Date, typeValue: "texto" | "number" | "boolean", style?: boolean,typeStyle?:string): object {
        const type = this.typeValue(typeValue);
        return { v: value ?? "", t: type, s: style ? (typeStyle ? configuracionesExcel[typeStyle] : configuracionesExcel.dataStyleReporteLeft) : configuracionesExcel.headerStyle };
    }

    addObjectColumnIndent(value: string | number | Date, typeValue: "texto" | "number" | "boolean"): object {
        const type = this.typeValue(typeValue);
        return { v: value ?? "", t: type, s: configuracionesExcel.dataStyleReporteLeftIndent };
    }

    addObjectColumnDate(value: string,style="dataStyleReporteLeft"): object {
        return { v: moment(new Date(value)).format("YYYY-MM-DD") ?? "", s: configuracionesExcel[style] };
    }

    addObjectColumnMoney(value: number, decimal: number,style="dataStyleReporteRigth"): object {
        const decimales = "0".repeat(decimal);
        return { v: value, t: "n", s: configuracionesExcel[style], z: `${SEPARADOR_MILES}.${decimales}` };
    }

    addObjectColumnTotalMount(data: string | number, typeValue: "texto" | "number" | "boolean", estilo: string = "dataStyleTotalMount",estiloTipo:string="dataStyleMontoTotal"): object {
        const type = this.typeValue(typeValue);
        return {
            v: data ?? "",
            t: type,
            s: type === "s" ? configuracionesExcel[estilo] : configuracionesExcel[estiloTipo],
            z: type === "n" ? `${SEPARADOR_MILES}.00` : ""
        };
    }

    addObjectColumnCustom(value: string | number | Date, typeValue: "texto" | "number" | "boolean", style: object, format?: string): object {
        const type = this.typeValue(typeValue);
        return { v: value ?? "", t: type, s: style, z: format ?? "" };
    }

    addObjectColumnCustomMultiple(space: number, value: string | number | Date, typeValue: "texto" | "number" | "boolean", style: object, format?: string): object[] {
        const multiple = [];
        const type = this.typeValue(typeValue);
        for (let i = 0; i < space; i++) multiple.push({ v: value ?? "", t: type, s: style, z: format ?? "" });
        return multiple;
    }

    addCellCombination(colOne: number, rowOne, colTwo: number, rowTwo: number): { s; e } {
        return { s: { c: colOne, r: rowOne }, e: { c: colTwo, r: rowTwo } };
    }

    generateWidthCells(length: number, cell: SizeCellIndice[], defaultSize?: number): object[] {
        const colProps = [];
        const cells = [...cell];
        for (let i = 0; i < length; i++) {
            let width = defaultSize ? { wpx: defaultSize } : {};
            if (cells.length > 0) {
                const indexCell = cells.findIndex(cel => cel.indice === i);
                if (indexCell >= 0) {
                    width = { wpx: cells[indexCell].size };
                    cells.splice(indexCell, 1);
                }
            }
            colProps.push(width);
        }
        return colProps;
    }

    generateHeightCells(length: number, cell: SizeCellIndice[], defaultSize?: number): object[] {
        const colProps = [];
        const cells = [...cell];
        for (let i = 0; i < length; i++) {
            let height = defaultSize ? { hpx: defaultSize } : {};
            if (cells.length > 0) {
                const indexCell = cells.findIndex(cel => cel.indice === i);
                if (indexCell >= 0) {
                    height = { hpx: cells[indexCell].size };
                    cells.splice(indexCell, 1);
                }
            }
            colProps.push(height);
        }
        return colProps;
    }

    obtenerFormatoDeFecha(formulario): string {
        const fechaInicio = moment(formulario.dFechaInicio).format("DD-MM-YYYY").replace(/-/g, "/");
        const fechaFin = moment(formulario.dFechaFin).format("DD-MM-YYYY").replace(/-/g, "/");
        return `Desde  ${fechaInicio}  Hasta  ${fechaFin}`;
    }

    private typeValue(type: string): string {
        switch (type) {
            case "number":
                return "n";
            case "boolean":
                return "b";
            default:
                return "s";
        }
    }

    private saveAsExcel(buffer: any, fileName: string): void {
        const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
        FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXT);
    }

    private headerReport(header: ExcelHeader): any {
        const today = new Date();
        const fecha = today.getDate() + " de " + today.toLocaleString("default", { month: "long" }) + ", " + today.getFullYear() + " - " + today.toLocaleTimeString();
        return [
            [{ v: "", t: "s", s: configuracionesExcel.headerStyle }], //v = valor, t = tipo (string), s = estilo
            [
                { v: "Razón social:", t: "s", s: configuracionesExcel.headerStyle },
                { v: this.user.cPerJurName, t: "s", s: headerStyleExcel(14) }
            ],
            [
                { v: "R.U.C:", t: "s", s: configuracionesExcel.headerStyle },
                { v: this.user.cRuc, t: "s", s: headerStyleExcel(14) }
            ],
            [
                { v: "Modulo:", t: "s", s: configuracionesExcel.headerStyle },
                { v: header?.module, t: "s", s: headerStyleExcel(9) }
            ],
            [
                { v: "Nombre del reporte:", t: "s", s: configuracionesExcel.headerStyle },
                { v: header?.nameReport, t: "s", s: headerStyleExcel(22) }
            ],
            header?.periodo
                ? [
                      { v: "Periodo:", t: "s", s: configuracionesExcel.headerStyle },
                      { v: header?.periodo, t: "s", s: headerStyleExcel(9) }
                  ]
                : [],
            header?.rango
                ? [
                      { v: "Rango:", t: "s", s: configuracionesExcel.headerStyle },
                      { v: header?.rango, t: "s", s: headerStyleExcel(9) }
                  ]
                : [],
            header?.moneda
                ? [
                      { v: "Moneda:", t: "s", s: configuracionesExcel.headerStyle },
                      { v: header?.moneda, t: "s", s: headerStyleExcel(9) }
                  ]
                : [],
            [
                { v: "Fecha y hora:", t: "s", s: configuracionesExcel.headerStyle },
                { v: fecha, t: "s", s: headerStyleExcel(9) }
            ],
            [
                { v: "Exportado por:", t: "s", s: configuracionesExcel.headerStyle },
                { v: this.user.cPerNombreCompleto, t: "s", s: headerStyleExcel(9) }
            ],
            [{ v: "", t: "s", s: configuracionesExcel.headerStyle }]
        ].filter(element => element.length > 0);
    }

    private combineHeaderCells(header: ExcelHeader): object[] {
        const mergeHeader = [];
        this.headerReport(header).forEach((data, index) => {
            const head = { s: { c: 1, r: index }, e: { c: 7, r: index } }; //s = inicio, c=col, r = fila, e = final
            if (data[0].v) mergeHeader.push(head);
        });
        return mergeHeader;
    }
}
