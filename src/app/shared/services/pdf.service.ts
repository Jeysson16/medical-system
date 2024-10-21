import { DecimalPipe } from "@angular/common";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ConfigText, PDF } from "@shared/interfaces/IPDF";
import { Usuario } from "@shared/interfaces/IUsuario";
import { FichaMatricula } from "@shared/models/IFichaMatricula";
import { API_SYS_FILE_OBS_HUAWEI, ENDPOINT_SYS_FILE_OBS_HUAWEI } from "environments/enviroment.config";

import { jsPDF } from "jspdf";
import autoTable, { CellHook } from "jspdf-autotable";
import moment from "moment";
import { Observable, map, tap } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PdfService {
    user: Usuario = JSON.parse(localStorage.getItem("user"));
    constructor(private http: HttpClient) {}

    downloadPdf(idFile: string): Observable<ArrayBuffer> {
        const url = `${API_SYS_FILE_OBS_HUAWEI}${ENDPOINT_SYS_FILE_OBS_HUAWEI.fileByID}`;
        const formData = new FormData();
        formData.append("idFile", idFile);
        return this.http.post(url, formData, {
            responseType: "arraybuffer"
        });
    }

    crearPdf(oPDF: PDF<any>): void {
        const fecha = new Date();
        const doc = new jsPDF({
            orientation: "portrait", //portrait ->
            unit: "px",
            format: "a4"
        });
        let pageCount = 0;
        const alturaMaxima = doc.internal.pageSize.getHeight() - 25;
        const widthDoc = doc.internal.pageSize.getWidth();
        const largoPaginacion = widthDoc - 90;
        const datosTablas = this.repartirData(oPDF.body);
        datosTablas.forEach((dataTabla, index) => {
            pageCount++;
            doc.setFontSize(8);
            doc.text(`RUC ${oPDF.rucEnterprise}`, 9, 12);
            doc.setFontSize(8);
            doc.text(`${oPDF.nameEnterprise}`, 9, 20);

            /* doc.setFontSize(8);
            doc.text("Otro subtitulo", 7, 26); */
            if (index == 0) {
                doc.setFontSize(15);
                doc.setFont(undefined, "bold");
                doc.text(oPDF.tittle, widthDoc / 2, 38, { align: "center" });
                if (oPDF.user) {
                    doc.setFontSize(9);
                    doc.setFont(undefined, "bold");
                    doc.text("USUARIO: ", 65, 60, { align: "right" });
                    doc.setFont(undefined, "normal");
                    doc.text(oPDF.user, 65, 60);
                }
            }
            autoTable(doc, {
                head: [oPDF.head],
                body: dataTabla,
                theme: "grid",
                startY: this.dimensionY(index, oPDF.user),
                columnStyles: { "*": { cellWidth: "auto" } }
            });
            doc.setFont(undefined, "normal");
            doc.setFillColor(158, 161, 162);
            doc.rect(7, alturaMaxima, widthDoc - 16, 0.5, "F");
            doc.setFontSize(9);
            doc.text("MBM ACADEMIC.NET", 10, alturaMaxima + 8);
            doc.setFontSize(8);
            doc.text("Impreso por:  " + oPDF.printedByUser, 10, alturaMaxima + 17);

            doc.setFontSize(8);
            doc.text("Fecha de imp. : ", largoPaginacion, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text(fecha.getDate() + " de " + fecha.toLocaleString("default", { month: "long" }) + ", " + fecha.getFullYear(), largoPaginacion + 51, alturaMaxima + 8, {
                align: "right"
            });
            doc.setFontSize(8);
            doc.text(fecha.toLocaleTimeString(), widthDoc - 9, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text("Página " + String(pageCount) + " de " + String(datosTablas.length), widthDoc - 9, alturaMaxima + 17, { align: "right" });

            doc.addPage();
        });
        doc.deletePage(doc.internal.pages.length - 1);
        doc.output("dataurlnewwindow");
    }

    dimensionY(index: number, user: string): number {
        let altura: number;
        if (index === 0) altura = user ? 65 : 50;
        else altura = 38;
        return altura;
    }

    crearPdf2(encabezado: string[], cuerpo: Array<any>, titulo: string, guardar?: boolean, id?: string): void {
        const fecha = new Date();
        const doc = new jsPDF({
            orientation: "portrait", //portrait ->
            unit: "px",
            format: "a4"
        });
        let pageCount = 0;
        const alturaMaxima = doc.internal.pageSize.getHeight() - 25;
        const widthDoc = doc.internal.pageSize.getWidth();
        const largoPaginacion = widthDoc - 90;
        const datosTablas = this.repartirData(cuerpo);
        datosTablas.forEach((dataTabla, index) => {
            pageCount++;
            doc.setFontSize(8);
            doc.text("nombre enterprise", 7, 11);
            doc.setFontSize(8);
            doc.text("ruc de la enterprise", 7, 19);
            doc.setFontSize(8);
            doc.text("Otro subtitulo", 7, 26);
            if (index == 0) {
                doc.setFontSize(15);
                doc.setFont(undefined, "bold");
                doc.text(titulo, widthDoc / 2, 38, { align: "center" });
            }

            autoTable(doc, {
                head: [encabezado],
                body: dataTabla,
                theme: "grid",
                startY: 43,
                columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: doc.internal.pageSize.width / 4 } }
            });
            doc.setFont(undefined, "normal");
            doc.setFillColor(158, 161, 162);
            doc.rect(7, alturaMaxima, widthDoc - 16, 0.5, "F");
            doc.setFontSize(9);
            doc.text("Nombre de la universidad S.A.C.", 10, alturaMaxima + 8);
            doc.setFontSize(8);
            doc.text("Impreso por:  " + "noni", 10, alturaMaxima + 17);

            doc.setFontSize(8);
            doc.text("Fecha de imp. : ", largoPaginacion, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text(fecha.getDate() + " de " + fecha.toLocaleString("default", { month: "long" }) + ", " + fecha.getFullYear(), largoPaginacion + 51, alturaMaxima + 8, {
                align: "right"
            });
            doc.setFontSize(8);
            doc.text(fecha.toLocaleTimeString(), widthDoc - 9, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text("Página " + String(pageCount) + " de " + String(datosTablas.length), widthDoc - 9, alturaMaxima + 17, { align: "right" });

            doc.addPage();
        });
        doc.deletePage(doc.internal.pages.length - 1);
        doc.output("dataurlnewwindow");
    }

    crearFichaMatriculaPdf(oPDF: PDF<FichaMatricula>, tableHeaders: any[][], tableBody: any[][]): void {
        const fecha = new Date();
        const doc = new jsPDF({
            orientation: "portrait", //portrait ->
            unit: "px",
            format: "a4"
        });
        let pageCount = 0;
        const alturaMaxima = doc.internal.pageSize.getHeight() - 25;
        const widthDoc = doc.internal.pageSize.getWidth();
        const largoPaginacion = widthDoc - 90;
        const datosTablas = this.repartirData(tableBody[0]);
        datosTablas.forEach((dataTabla, index) => {
            pageCount++;
            doc.setFontSize(8);
            doc.text(`RUC ${oPDF.rucEnterprise}`, 9, 12);
            doc.setFontSize(8);
            doc.text(`${oPDF.nameEnterprise}`, 9, 20);

            if (index == 0) {
                this.colocarTexto(doc, { size: 15, fuente: "bold", texto: oPDF.tittle, align: "center", posicionX: widthDoc / 2, posicionY: 38 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "ESCUELA: ", align: "right", posicionX: 65, posicionY: 60 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.escuela, posicionX: 65, posicionY: 60 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "CODIGO: ", align: "right", posicionX: 65, posicionY: 70 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.codigo, posicionX: 65, posicionY: 70 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "DNI/CE: ", align: "right", posicionX: 65, posicionY: 80 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.dni, posicionX: 65, posicionY: 80 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "TIPO MAT: ", align: "right", posicionX: 65, posicionY: 90 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.tipoMat, posicionX: 65, posicionY: 90 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "NOMBRE: ", align: "right", posicionX: widthDoc / 1.7 - 30, posicionY: 70 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.nombre, posicionX: widthDoc / 1.7 - 30, posicionY: 70 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "GÉNERO: ", align: "right", posicionX: widthDoc / 1.7 - 30, posicionY: 80 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.genero, posicionX: widthDoc / 1.7 - 30, posicionY: 80 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "SEMESTRE: ", align: "right", posicionX: widthDoc / 1.7 - 30, posicionY: 90 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: oPDF.data.semestre, posicionX: widthDoc / 1.7 - 30, posicionY: 90 });
                this.colocarTexto(doc, { size: 9, fuente: "bold", texto: "FECHA: ", align: "right", posicionX: widthDoc / 1.2 - 30, posicionY: 90 });
                this.colocarTexto(doc, { size: 9, fuente: "normal", texto: new Date().toLocaleDateString("es-ES"), posicionX: widthDoc / 1.2 - 30, posicionY: 90 });
            }
            autoTable(doc, {
                head: [tableHeaders[0]],
                body: tableBody[0],
                theme: "plain",
                styles: { fontSize: 8 },
                startY: 120, //this.dimensionY(index, oPDF.user),
                columnStyles: { 0: { cellWidth: 30 }, 1: { cellWidth: doc.internal.pageSize.width / 4 } }
            });

            autoTable(doc, {
                head: [tableHeaders[1]],
                body: tableBody[1],
                theme: "plain",
                styles: { fontSize: 8 },
                startY: 300, //this.dimensionY(index, oPDF.user),
                columnStyles: { 0: { cellWidth: 30 } }
            });
            doc.setFont(undefined, "normal");
            doc.setFillColor(158, 161, 162);
            doc.rect(7, alturaMaxima, widthDoc - 16, 0.5, "F");
            doc.setFontSize(9);
            doc.text("MBM ACADEMIC.NET", 10, alturaMaxima + 8);
            doc.setFontSize(8);
            doc.text("Impreso por:  " + oPDF.printedByUser, 10, alturaMaxima + 17);

            doc.setFontSize(8);
            doc.text("Fecha de imp. : ", largoPaginacion, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text(fecha.getDate() + " de " + fecha.toLocaleString("default", { month: "long" }) + ", " + fecha.getFullYear(), largoPaginacion + 51, alturaMaxima + 8, {
                align: "right"
            });
            doc.setFontSize(8);
            doc.text(fecha.toLocaleTimeString(), widthDoc - 9, alturaMaxima + 8, { align: "right" });
            doc.setFontSize(8);
            doc.text("Página " + String(pageCount) + " de " + String(datosTablas.length), widthDoc - 9, alturaMaxima + 17, { align: "right" });

            doc.addPage();
        });
        doc.deletePage(doc.internal.pages.length - 1);
        doc.output("dataurlnewwindow");
    }

    colocarTexto(documento: jsPDF, configText: ConfigText): void {
        documento.setFontSize(configText.size);
        documento.setFont(undefined, configText.fuente);
        documento.text(configText.texto, configText.posicionX, configText.posicionY, { align: configText.align });
    }

    //DE PRUEBA
    exportarPDF(
        headers: string[],
        dataBase: any[],
        modulo: string,
        titulo: string,
        subTitulo: string,
        tituloArchivo: string,
        cabeceras?: any[],
        moneda?: string,
        orientacion?: any
    ): void {
        const pdf = new jsPDF(orientacion ?? "p", "mm", "a4");
        const datosTabla = dataBase.length == 0 ? [] : this.repartirDataReporte(dataBase, [], orientacion ? 35 : 56);
        const alturaMaxima = pdf.internal.pageSize.getHeight() - 14;
        const widthTabla = pdf.internal.pageSize.getWidth();
        const largoPaginacion = widthTabla - 49;

        let startYTable = 40;
        if (cabeceras) {
            startYTable = 44;
            cabeceras.forEach(cabecera => {
                pdf.setFontSize(6);
                pdf.setFont(undefined, "bold");
                pdf.text(cabecera, 8, startYTable);
                startYTable += (cabeceras.length>1 ? 4 : 1);
            });
        }
        datosTabla.forEach((data, index) => {
            pdf.setFont(undefined, "normal");
            this.obtenerCabecera(pdf, titulo, subTitulo, modulo, widthTabla, moneda);
            if (subTitulo) startYTable += 2;
            if (moneda) startYTable += 2;
            if (cabeceras && index == 0) startYTable -= 3;

            (pdf as any).autoTable({
                head: [headers],
                body: data,
                startY: startYTable,
                headStyles: {
                    fontStyle: "bold",
                    halign: "center"
                },
                theme: "plain",
                styles: {
                    fontSize: 5.5,
                    overflow: "linebreak",
                    cellPadding: 0.8
                },
                margin: {
                    left: 7,
                    right: 8
                },
                didDrawPage: row => {
                    row.doc.setDrawColor(0, 0, 0);
                    row.doc.setLineWidth(0.1);
                    const inicio = row.settings.margin.left;
                    const alto = row.table.head[0].height;
                    const ancho = row.cursor.x - inicio;
                    const position = row.settings.startY;
                    row.doc.rect(inicio, position, ancho, alto);
                },
                didDrawCell: (cell, opts) => {
                    if (cell.cell != null && cell.cell.section === "body") {
                        const ultimaCelda = cell.row.raw;
                        const tipo = ultimaCelda[ultimaCelda.length - 1];
                        if (Number(tipo) > 0) {
                            const [valorCadena] = cell.cell.text;
                            const formatCadena = valorCadena.replace(/,/g, "");
                            if (!isNaN(Number(formatCadena))) {
                                const columnWidth = cell.cell.width;
                                const a = cell.cell.x + columnWidth; //1
                                const b = cell.cell.y + cell.cell.height - 1 / 2 + 0.6;
                                const d = cell.cell.y + cell.cell.height - 1 / 2 + 1;
                                const c = cell.cell.x; //+3
                                const b2 = d - cell.cell.height - 0.5;
                                if (tipo == 1) cell.doc.line(a, b2, c, b2);

                                if (tipo == 2) {
                                    cell.doc.line(a, b2, c, b2);
                                    cell.doc.line(a, b, c, b);
                                }
                                if (tipo == 3) {
                                    cell.doc.line(a, b2, c+1.8, b2);
                                    cell.doc.line(a, b, c+1.8, b);
                                    cell.doc.line(a, b - 0.8, c+1.8, b - 0.8);
                                }
                            }
                        }
                    }
                }
            });
            this.obtenerPieDePagina(pdf, alturaMaxima, widthTabla, index + 1, datosTabla.length, largoPaginacion);
            if (cabeceras) startYTable = 40;
            pdf.addPage();
        });
        if (dataBase.length > 0) pdf.deletePage(pdf.internal.pages.length - 1);
        else {
            this.obtenerCabecera(pdf, titulo, subTitulo, modulo, widthTabla, moneda);
            this.obtenerPieDePagina(pdf, alturaMaxima, widthTabla, 1, 1, largoPaginacion);
        }

        pdf.output("dataurlnewwindow");
        //pdf.save(tituloArchivo);
    }

    formatHeadBody(value: string, colspan: number, estilo?: any): object {
        return { content: value ?? "", colSpan: colspan, styles: estilo ?? { fontStyle: "bold", halign: "left", fillColor: [192, 192, 192] } };
    }

    formatMoney(value: number, bold?: boolean, estilo?: any): object {
        const decimalPipe = new DecimalPipe("en-US");
        return { content: decimalPipe.transform(value, "1.2-2"), styles: estilo ?? { fontStyle: bold ? "bold" : "", halign: "right" } };
    }

    formatDate(value: string): object {
        return { content: moment(new Date(value)).format("YYYY-MM-DD"), styles: { halign: "center" } };
    }

    obtenerFormatoDeFecha(formulario): string {
        const fechaInicio = moment(formulario.dFechaInicio).format("DD-MM-YYYY").replace(/-/g, "/");
        const fechaFin = moment(formulario.dFechaFin).format("DD-MM-YYYY").replace(/-/g, "/");
        return `Desde  ${fechaInicio}  Hasta  ${fechaFin}`;
    }

    // (moment(new Date(direccion.dEffDate))).format('YYYY-MM-DD')
    private repartirData(array): Array<[]> {
        const arregloResultante: Array<[]> = [];
        const cantidadDividida = 25;

        for (let i = 0; i < array.length; i += cantidadDividida) {
            const arregloDividido = array.slice(i, i + cantidadDividida);
            arregloResultante.push(arregloDividido);
        }

        return arregloResultante;
    }

    private repartirDataReporte(array, arrayData, longitudArray: number = 40): Array<any> {
        const arrayA = arrayData;
        if (array.length != 0) {
            arrayA.push(array.slice(0, longitudArray));
            array = array.slice(longitudArray, array.length);
            return this.repartirDataReporte(array, arrayA, longitudArray);
        } else return arrayA;
    }

    private obtenerCabecera(pdf: any, titulo: string, subTitulo, modulo, widthTabla: number, moneda: string): void {
        pdf.setFontSize(8);
        pdf.text(`${this.user.cPerJurName}`, 7, 9);
        pdf.setFontSize(8);
        pdf.text(`RUC: ${this.user.cRuc}`, 7, 14);
        pdf.setFontSize(8);
        pdf.text(`${modulo}`, 7, 19);
        pdf.setFontSize(10);
        pdf.setFont(undefined, "bold");
        pdf.text(titulo.toUpperCase(), widthTabla / 2, 26, { align: "center" });
        pdf.setFontSize(9);
        pdf.text(subTitulo.toUpperCase(), widthTabla / 2, 31, { align: "center" });
        if (moneda) {
            const tituloMoneda = `(Expresado en ${this.user.moneda?.toLowerCase()})`;
            pdf.setFont(undefined, "normal");
            pdf.setFontSize(8);
            pdf.text(tituloMoneda, widthTabla / 2, subTitulo ? 36 : 31, { align: "center" });
        }
        pdf.setFontSize(9);
    }
    private obtenerPieDePagina(pdf: any, alturaMaxima, widthTabla, index: number, longitudTotal: number, largoPaginacion: number): void {
        const fecha = new Date();
        pdf.setFont(undefined, "normal");
        pdf.setFillColor(158, 161, 162);
        pdf.rect(7, alturaMaxima, widthTabla - 14, 0.5, "F");
        pdf.setFontSize(9);
        pdf.text("MBM ACADEMIC.NET.", 10, alturaMaxima + 5);
        pdf.setFontSize(8);
        pdf.text("Impreso por:  " + this.user.cPerNombreCompleto, 10, alturaMaxima + 10);

        pdf.setFontSize(8);
        pdf.text("Fecha de imp. : ", largoPaginacion, alturaMaxima + 5, { align: "right" });
        pdf.setFontSize(8);
        pdf.text(fecha.getDate() + " de " + fecha.toLocaleString("default", { month: "long" }) + ", " + fecha.getFullYear(), largoPaginacion + 26, alturaMaxima + 5, {
            align: "right"
        });
        pdf.setFontSize(8);
        pdf.text(fecha.toLocaleTimeString(), widthTabla - 9, alturaMaxima + 5, { align: "right" });
        pdf.setFontSize(8);
        pdf.text("Página " + String(index) + " de " + String(longitudTotal), widthTabla - 9, alturaMaxima + 10, { align: "right" });
    }
}
