import { Injectable } from "@angular/core";
import { ExcelService } from "@shared/services/excel.service";
import { PdfService } from "@shared/services/pdf.service";

@Injectable({
    providedIn: "root"
})
export class CobranzaProvicionService {
    constructor(private _excelService: ExcelService, private _pdfService: PdfService) {}

    obtenerLstCobranzaDet(element: any): object[] {
        return [
            this._excelService.addObjectColumn(element.cPerIdeNumero, "texto", true,"dataStyleReporteLeftOutline"),
            this._excelService.addObjectColumnIndent(element.cPerApellido, "texto"),
            this._excelService.addObjectColumnDate(element.dVenHeaFecEmision,"dataStyleReporteCenter"),
            this._excelService.addObjectColumnDate(element.dVenHeaFecVence,"dataStyleReporteCenter"),
            this._excelService.addObjectColumn(element.cVenComIdentidad,"texto",true,"dataStyleReporteLeftOutline"),
            this._excelService.addObjectColumnMoney(element.fSumaTotal, 2,"dataStyleReporteRigthOutline"),
        ];
    }

    obtenerLstCobranza(element: any): object[] {
        const listado = [this._excelService.addObjectColumn(element.cPerIntDescripcion??'-', "texto", true)];
        for (const key in element) {
            if(key.includes('-') || key.includes('+'))
                listado.push(this._excelService.addObjectColumnMoney(element[key], 2));            
        }

        const desTotal = element['fSumaTotal']?'fSumaTotal': element['fTotal'] ? 'fTotal':'Total';
        listado.push(this._excelService.addObjectColumnMoney(element[desTotal],2));

        return listado;
    }

    //EXPOR PDF
    obtenerTotales(descripcion: string, monto: number, tipo: number, longitud: number): any[] {
        return [
            this._pdfService.formatHeadBody(descripcion, longitud, { fontStyle: "bold", halign: "right", fontSize: 6 }),
            this._pdfService.formatMoney(monto, null, { fontStyle: "bold", halign: "right", fontSize: 6 }),
            tipo
        ];
    }

    getAllAmounths(montos:any,tipo:number=3): any[] {
        const lstTotales = [];
        lstTotales.push(this._pdfService.formatHeadBody('Total', 1, { fontStyle: "bold", halign: "left", fontSize: 6 }));
        for (const key in montos) {
            if(key)
                lstTotales.push(this._pdfService.formatMoney(montos[key], null, { fontStyle: "bold", halign: "right", fontSize: 6 }));
        }
        lstTotales.push(tipo);
        return lstTotales;
    }

    dataBodyServicePDF(element: any): any[] {
        const body:any[] = [ { content: element.cPerIntDescripcion??'-', colSpan: 0, styles: { halign: "left" } }];
        for (const key in element) {
            if(key.includes('-') || key.includes('+'))
                body.push(this._pdfService.formatMoney(element[key]));            
        }
        if(element['Total'])
            body.push( this._pdfService.formatMoney(element['Total']));
        else if(element['fTotal'])
            body.push( this._pdfService.formatMoney(element['fTotal']));
        else if(element['fSumaTotal'])
            body.push( this._pdfService.formatMoney(element['fSumaTotal']));
        return body;
    }

    dataBodyServicePDFDet(element: any): any[] {
        return [
            { content: element.cPerIdeNumero, colSpan: 0, styles: { halign: "left" } },
            { content: element.cPerApellido, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatDate(element.dVenHeaFecEmision),
            this._pdfService.formatDate(element.dVenHeaFecVence),
            { content: element.cVenComIdentidad, colSpan: 0, styles: { halign: "left" } },
            this._pdfService.formatMoney(element.fSumaTotal),
        ];
    }

    dataTotalService(montos: any): object[] {
        const celdasMezcladas = [];
        celdasMezcladas.push(this._excelService.addObjectColumnTotalMount("TOTAL GENERAL:", "texto", "dataStyleMontoTotalLeft"));
        console.log(montos)
        for (const key in montos) {
            if(key)
            celdasMezcladas.push(this._excelService.addObjectColumnTotalMount(montos[key], "number"));
        }
        return celdasMezcladas;
    }
    
    obtenerConfCabecera(nombreCampo: string, columnSpace: number = 5): { value; addColumnSpace; style }[] {
        return [{ value: nombreCampo, addColumnSpace: columnSpace, style: true }];
    }

    obtenerCeldasTotal(montoPagos: number, tipoNivel: number, longitudMerge: number): any[] {
        const textoTotal = tipoNivel == 1 ? "Total general   " : tipoNivel == 2 ? "Total   " : "Subtotal   ";
        return [
            ...this._excelService.addColumnsHeader(this.obtenerConfCabecera(textoTotal, longitudMerge), "cabeceraTablaEstiloOutline"),
            this._excelService.addObjectColumnTotalMount(montoPagos, "number","","dataStyleTotalMountOutline")
        ];
    }

    obtenerCabecerasPdfRes(objCobranza):string[]{
        const cabecera = ['Departamento'];
        for (const key in objCobranza) {
        if(key.includes('-') || key.includes('+'))
            cabecera.push(key)
        }
        cabecera.push('Total')
        return cabecera;
    }

    obtenerCabecerasPdfDet():any[]{
        return [
        'N° de documento',
        'Razon social/Nombres',
        'Fecha de emisión',
        'Fecha de vencimiento',
        'Comprobante de pago',
        'Importe'];
    }

    obtenerCabecerasExcelDet():any[]{
        return [
            {value: 'N° de documento', addColumnSpace: 0, style: true },
            {value: 'Razon social/Nombres', addColumnSpace: 0, style: true },
            {value: 'Fecha de emisión', addColumnSpace: 0, style: true },
            {value: 'Fecha de vencimiento', addColumnSpace: 0, style: true },
            {value: 'Comprobante de pago', addColumnSpace: 0, style: true },
            {value: 'Importe', addColumnSpace: 0, style: true }
        ]
    }

    obtenerCabecerasExcelRes(objCobranza):any[]{
        const cabecera = [ {value: 'centro de costos', addColumnSpace: 0, style: true }];
        for (const key in objCobranza) {
            if(key.includes('-') || key.includes('+'))
                cabecera.push({ value: key, addColumnSpace: 0, style: true })
        }
        cabecera.push({ value: 'Total', addColumnSpace: 0, style: true });
        return cabecera;
    }
    
    agregarColumnasAgrupadas(longitudCeldas: number, posicionFinalCelda: number): any {
        return { s: { c: 0, r: longitudCeldas }, e: { c: posicionFinalCelda, r: longitudCeldas } };
    }
    
    obtenerSubCabecera(titulo: string, longitudMerge): any {
        return this._excelService.addColumnsHeader(this.obtenerConfCabecera(titulo, longitudMerge), "headOutline");
    } 
}
