import { Injectable } from "@angular/core";
import { Usuario } from "@shared/interfaces/IUsuario";
import { IVenHead, IVenHeadDetail } from "@shared/models/IVenHead";
import { IVenComprobante } from "@shared/models/ventas/IVenComprobante";
import { ICajAperturada } from "@shared/models/ventas/facturacion/ICajAperturada";
import { IComprobantes } from "@shared/models/ventas/facturacion/IComprobantes";
import { ICtaDocumento } from "@shared/models/ventas/facturacion/ICtaDocumento";
import { ICtaPayment } from "@shared/models/ventas/facturacion/ICtaPayment";
import { IDocAsiento } from "@shared/models/ventas/facturacion/IDocAsiento";
import { IFacturacion } from "@shared/models/ventas/facturacion/IFacturacion";
import { IFormFactura } from "@shared/models/ventas/facturacion/IFormFactura";
import { IPago } from "@shared/models/ventas/facturacion/IPago";
import { IPaymentDetail } from "@shared/models/ventas/facturacion/IPaymentDetail";
import { IPaymentItem } from "@shared/models/ventas/facturacion/IPaymentItem";
import { IPaymentRef } from "@shared/models/ventas/facturacion/IPaymentRef";
import { IServicio } from "@shared/models/ventas/facturacion/IServicio";
import { IVenNota } from "@shared/models/ventas/facturacion/IVenNota";
import { CPaymentFac } from "@shared/models/ventas/facturacion/cPaymentFac";
import { IPendingPayment } from "@shared/models/ventas/facturacion/pendingPayment";
import { ICliente } from "app/modules/admin/pages/ventas/clientes/models/ICliente";
import moment from "moment";

@Injectable({
    providedIn: "root"
})
export class FacturacionDataService {

    constructor() {}

    getObjectHead(formulario:any,cajaAperturada:ICajAperturada,editar:boolean,codigoFacturacion:number):IVenHead {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        const cliente: ICliente = formulario.cliente.object;
        const detalleHead = []
        const impuestos = formulario.montoTotal;
        const totalImpuestos = detalleHead.reduce((t, obj) => t + obj.lstVeaImpuesto.reduce((i, objImp) => i + objImp.nVenDetImporte, 0), 0);
        return {
            cPerJurCodigo: user.cPerJuridica,
            nVenHeaCodigo: editar ? codigoFacturacion : 0,
            cPerCliCodigo: cliente.cPerCodigo,
            nVenHeaTipCliente: formulario.tipoDoc,
            nSubCliCodigoTipCliente: 0,
            cPerSubCliCodigo: "",
            dVenHeaFecEmision: formulario.fechaEmision.format(),
            dVenHeaFecVence: formulario.fechaVen ? formulario.fechaVen.format() : formulario.fechaEmision.format(), //corregir dino
            nVenHeaEstado: 1,
            nVenHeaTipVenta: formulario.tipoTran,
            nVenHeaMoneda: formulario.moneda,
            nVenHeaExportacion: formulario.facturaExporta,
            nTipDocumento: formulario.tipoComprobante,
            nEstCodigo: cajaAperturada.nEstCodigo,
            nVenHeaSubTotal: impuestos, // POR REVISAR
            nVenDetValorDsco: 0, // descuento por item total
            nVenDstoGlobal: 0,
            nVenHeaImpuestos: totalImpuestos, // suma de todos los impuestos de los items
            nVenHeaRedondeo: 0,
            nVenHeaImporte: impuestos * formulario.nTipoCambio,
            nVenHeaRetencion: 0,
            nVenHeaTotalImporte: impuestos + 0, // MAS RETENCIONES nVenHeaRetencion
            nVenTipoRecargoConsumo: 0,
            nVenRecargoConsumo: 0,
            nVenMotivoDstoGlobal: 0,
            nVenValorDstoGlobal: 0,
            nVenHeaFormaVenta: 2,
            cVenHeaCliDireccion: formulario.direccion,
            cVenCliCorreo: formulario.correo, // TRAER CORREO
            cVenClitelefono: formulario.telefono, // TRAER TELEFONO
            nCajAperCodigo: cajaAperturada.nCajAperCodigo,
            nCajAperSecuencia: editar ? formulario.nCajAperSecuencia : cajaAperturada.nCajAperSecuencia,
            cVenNumRecIngreso: cajaAperturada.cFacSerieFormato + "-" + cajaAperturada.cFacSerieNumIni,
            cVendedorTipCliente: "",
            cPerPriVendedor: "",
            cVenObservacion: "",
            bVenHeaAsiento: 1,
            nVenHeaProgramacion: 0,
            nVenHeaSitEmision: 0,
            nVenHeaSitProvision: 0,
            nVenHeaSitCastigo: 0,
            dVenAccDetFechRegistro: new Date(),
            cVenHeaUsuRegistro: user.cPerCodigo,
            cVenHeaHostRegistro: "",
            dVenHeaFecUpdate: new Date(),
            cVenHeaUsuUpdate: user.cPerCodigo,
            cVenHeaHostUpdate: "",
            detalle: detalleHead
        };
    }
    
    // getObjectHeadDetail(formulario:any,lstDeServicios:IServicio[]):IVenHeadDetail[] {
    //     const arregloDetalle: IVenHeadDetail[] = [];
    //     lstDeServicios.forEach((servicio, index) => {
    //         const impuestos = this.obtenerArrayImpuestos(servicio, index + 1);
    //         const totalImpuestos = impuestos.reduce((t, obj) => t + (obj.nVenDetImporte ?? 0), 0);
    //         arregloDetalle.push({
    //             nVenHeaCodigo: this.editar ? this.codigoFacturacion : 0,
    //             nVenDetItem: index + 1,
    //             nVenDetTipLinea: 2,
    //             nVenDetArtMasCodigo: servicio.nArtSerCodigo,
    //             cVenDetArtDescripcion: servicio.cArtSerNombre,
    //             cVenDetObservacionLine: servicio.cDesLarga,
    //             nVenDetArtMasCodigoLast: 0,
    //             nDocRefCodigo: 0,
    //             nDocRefLinea: 0,
    //             nVenDetTipAfecto: servicio.nAfecto,
    //             nVenDetMoneda: formulario.moneda,
    //             nVenUnidmedida: servicio.nDocLinUnidad,
    //             nVenDetCantidad: servicio.nDocLinCantidad,
    //             nVenDetTC: formulario.nTipoCambio, //tipo cambio
    //             nVenDetPrecio: servicio.nPrecioDefault,
    //             nVenDetTipoDsco: 0,
    //             nVenDetPorValor: 0,
    //             nVenDetValorDsco: servicio.nArtSerValorDescuento,
    //             nVenDstoGlobal: 0,
    //             nVenDetIGV: totalImpuestos, //impuestos totales de la tabla impuestos
    //             nVenDetImporteItem: servicio.nImpTotal,
    //             nVenHeaRetencion: 0,
    //             nVenHeaTotalImporte: servicio.nImpTotal,
    //             nVenDetEquivalente: servicio.nImpTotal * formulario.nTipoCambio, // por tipo de cambio
    //             nConsCodigo: servicio.nConsCodigo,
    //             nOpeCodigo: servicio.nOpeCodigo,
    //             nUniOrgCodigo: servicio.nUniOrgCodigo,
    //             nFilCodigo: servicio.nFilCodigo,
    //             nSedCodigo: servicio.nSedCodigo,
    //             nBieCodigo: servicio.nBieCodigo,
    //             nActCodigo: servicio.nActCodigo,
    //             nProyCodigo: servicio.nProyCodigo,
    //             nSucCodigo: servicio.nSucCodigo,
    //             dVenDetFecRegistro: new Date(),
    //             cVenDetUsuRegistro: this.user.cPerCodigo,
    //             cVenDetHostRegistro: "",
    //             dVenDetFecUpdate: new Date(),
    //             cVenDetUsuUpdate: this.user.cPerCodigo,
    //             cVenDetHostUpdate: "",
    //             lstVeaImpuesto: impuestos
    //         });
    //     });
    //     return arregloDetalle;
    // }

    // getObjectCom():IVenComprobante {
    // }

    getObjectPayment(formulario:any,cajaAperturada:ICajAperturada,servicios:any[],pagos:IPago[],nVenHeaCodigo?:number,pagosVentanilla?:IPendingPayment[]):CPaymentFac{
        const pago = new CPaymentFac(
            0,
            servicios[0].nVenHeaCodigo ?? nVenHeaCodigo ?? 0,
            formulario.fechaEmision,
            cajaAperturada.cFacSerieFormato + "-" + cajaAperturada.cFacSerieNumIni,
            formulario.codigo,
            cajaAperturada.nCajAperCodigo,
            cajaAperturada.nCajAperSecuencia,
            formulario.fechaEmision
        );
        pago.venPaymentDetail = this.getObjPayDetalle(pagos);
        pago.lstvenPaymentItem = this.getObjPayItem(formulario,servicios,nVenHeaCodigo);
        pago.lstVenPaymenRef = pagosVentanilla ? this.getObjPayRefLst(formulario,pagosVentanilla): this.getObjPayRef(formulario,servicios,nVenHeaCodigo);

        return pago;
    }

    getObjPayDetalle(pagos:IPago[]): IPaymentDetail[] {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        const pagosDetalle:IPaymentDetail[]=[];
        pagos.forEach((pago,index) => {
            pagosDetalle.push({   
                nVenPayCodigo: pago['nVenPayCodigo']??0,
                nVenPayLinea: index+1, //identity
                nVenPayForPago: pago.nTipoPago,
                nVenPayMoneda: pago.nMoneda,
                nVenPayTC: pago.nTipoCambio,
                nVenPayMonto: pago.importe,
                nVenPayEquivalente: pago.importe * pago.nTipoCambio,
                nVenPayBanCodigo: pago?.objBanco?.nPerTipo??0, //codigo banco cuenta-6
                nVenPayCardTipo: 0, //tipo de tarjeta -- POR AHORA VA 0
                cVenPayNroCard: pago.objCuenta?.cNroCuentaOpera ?? "", //numero tarjeta
                cVenPayNroOpe: pago.cOperacion??"", // tipo operacion
                dVenPayFechaPago: moment(new Date()).format(),
                dVenPayFecRegistro: moment(new Date()).format(),
                cVenPayUsuRegistro: user.cPerCodigo,
                cVenPayHostRegistro: "",
                dVenPayFecUpdate: moment(new Date()).format(),
                cVenPayUsuUpdate: user.cPerCodigo,
                cVenPayHostUpdate: "",
                cFormPago: pago.cFormPago??""
            });
        });
        return pagosDetalle;
    }
    
    getObjPayItem(formulario:any,servicios:IServicio[],nVenHeaCodigo?:number): IPaymentItem[] {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        //de los servicios
        const { moneda, nTipoCambio } = formulario;
        const arrayItem: IPaymentItem[] = [];
        servicios.forEach((serv, index) => {
            const total = serv['nSaldoItem'] ?? serv['nImpTotal'];
            arrayItem.push({
                nVenPayCodigo: 0,
                nVenHeaCodigo: serv['nVenHeaCodigo'] ?? nVenHeaCodigo??0, //codigo cabecera venHead
                nVenDetItem: serv['nVenHeaCodigo'] ?? nVenHeaCodigo? serv['nVenDetItem'] : index + 1, //autoincrementable
                nVenDetArtMasCodigo: serv.nArtSerCodigo??serv['nVenDetArtMasCodigo'], //codigo del articulo
                nVenDetMoneda: serv['nVenDetMoneda'] ?? moneda,
                nVenDetImportePago: total??0, //importe total del item
                nVenPayTC: serv['nVenDetTC'] ?? nTipoCambio,
                nVenPayEquivalente: (total??1) * (serv['nVenDetTC'] ?? nTipoCambio),
                nVenDetTipLinea: 2, //id del detalle
                dVenPayFecRegistro: moment(new Date()).format(),
                cVenPayUsuRegistro: user.cPerCodigo,
                cVenPayHostRegistro: "",
                dVenPayFecUpdate: moment(new Date()).format(),
                cVenPayUsuUpdate: user.cPerCodigo,
                cVenAccDetHostUpdate: ""
            });
        });
        return arrayItem;
    }

    getObjPayRefLst(formulario:any,pagos?:IPendingPayment[]): IPaymentRef[] {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        const { fechaEmision } = formulario;
        const referencias:IPaymentRef[] = [];
        pagos.forEach(pago => {
            referencias.push({
                nVenPayCodigo: 0,
                nVenHeaCodigo: pago.nVenHeaCodigo ??0,
                nVenPayRefMonto: this.retornarMonto(pago['nSaldoItemMod']),
                nVenPayEquivalente: this.retornarMonto(pago['nSaldoItemMod']) * pago.nVenDetTC,
                dVenPayFechaPago: fechaEmision,
                nVenPayRefMoneda: pago.nVenDetMoneda,
                nVenPayRefTC: pago.nVenDetTC,
                nVenPayRefDifTC: 0,
                dVenPayRefFecRegistro: moment(new Date()).format(),
                cVenPayRefUsuRegistro: user.cPerCodigo,
                cVenPayRefHostRegistro: "",
                dVenPayRefFecUpdate: moment(new Date()).format(),
                cVenPayRefUsuUpdate: user.cPerCodigo,
                cVenPayRefHostUpdate: ""
            })
        })
        return referencias;
    }

    getObjPayRef(formulario:any,servicios:IServicio[],nVenHeaCodigo?:number): IPaymentRef {
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        const { nTipoCambio,moneda,fechaEmision } = formulario;
        const total =servicios[0].nImpTotal ?? servicios[0]['nSaldoItemHead'];
        return {
            nVenPayCodigo: 0,
            nVenHeaCodigo: servicios[0]['nVenHeaCodigo'] ?? nVenHeaCodigo??0,
            nVenPayRefMonto: total,
            nVenPayEquivalente: total * nTipoCambio,
            dVenPayFechaPago: fechaEmision,
            nVenPayRefMoneda: moneda,
            nVenPayRefTC: nTipoCambio,
            nVenPayRefDifTC: 0,
            dVenPayRefFecRegistro: moment(new Date()).format(),
            cVenPayRefUsuRegistro: user.cPerCodigo,
            cVenPayRefHostRegistro: "",
            dVenPayRefFecUpdate: moment(new Date()).format(),
            cVenPayRefUsuUpdate: user.cPerCodigo,
            cVenPayRefHostUpdate: ""
        };
    }

    getObjCredit(formulario:any,comprobante:IVenComprobante,vencomRef:IFacturacion): IVenNota{
        const user: Usuario = JSON.parse(localStorage.getItem("user"));
        return {
            nVenEmiNotCodigo: 0,
            cPerJurCodigo: '',
            cPerCodigo: formulario.codigo,
            cPerUsuCodigo: user.cPerCodigo,
            cVenEmiCodSunat: comprobante.cVenComCode,
            nVenEmiNotTipo: comprobante.nVenComTipo,
            nVenEmiNotMotivo: formulario.tipoNota,
            cVenEmiNotObs: '',
            nVenHeaCodigoOrigen: 0,
            cVenComIdentidad: comprobante.cVenComIdentidad,
            nVenPayMonto: 0,//por cambiar
            nVenPayMoneda: formulario.moneda,
            nVenPayTC: formulario.nTipoCambio,
            dVenEmiNotFecEmision: formulario.fechaEmision,
            dVenEmiNotFecRegistro: new Date(),
            nVenEmiNotEstado: 1,
            nVenPayCodigo: 0,
            nVenHeaCodigo: vencomRef.ventasCab.nVenHeaCodigo,
            cVenEmiNotUsuRegistro: user.cPerCodigo,
            cVenEmiNotHostRegistro: '',
            dVenEmiNotFecUpdate: new Date(),
            cVenEmiNotUsuUpdate: user.cPerCodigo,
            cVenEmiNotHostUpdate: '',
        }
    }

    getObjCtaPayment(formulario:IFormFactura,formPago:any,comprobante:IComprobantes): ICtaPayment{ //forma de pago
        return {
            cPerJurCodigo: formulario.cPerJurCodigo,
            nPayModCodigo: 11,
            dPayFecIni: formulario.fechaEmision,
            dPayFecFin: formulario.fechaEmision,
            dPayFecContable: comprobante.dDocComFecContable,
            dPayFecPago: comprobante.dDocComFecPago,
            nPerCtaCodigo: 0,
            nPayMedPago: 11,
            nCtaPayMoneda: formPago.nMoneda,
            nPayEstado: 1,
            cPayNumOpe: comprobante.cDocCodigo,
            cPerUsuario: formulario.codigo,
            nPayNumOpe: 0,//f
            nCtaPayGruCodigo: formPago.objGrupo.nCtaPayGruCodigo,
        }
    }

    getObjCtaDocument(formulario:IFormFactura,formPago:any, pagos:IComprobantes[]):ICtaDocumento[]{
        const documentos:ICtaDocumento[] = [];
        pagos.forEach((pago,indice) => {
            documentos.push({
                nPayCodigo:0,
                nPaySequencia:indice+1,
                cDocCodigo:pago.cDocNDoc,
                cPerCodigo: formulario.codigo,
                nDocTipo:formulario.tipoDoc,
                cDocNumero: formulario.numDoc,
                nCtaPayDocImporte: pago['nSaldoItemMod'],
                nCtaPayEquivalene: pago['nSaldoItemMod'] * formPago.nTipoCambio,
                nPerCtaCodigo: formPago.objGrupo.nCtaCodigo, //f
                nTC: formPago.nTipoCambio,
                nDifCambio: 0,
                nPayDocEstado: 1,
                nCtaPayDocImpRetencion: 0,
                nCtaPayDocImpPagado: pago['nSaldoItemMod'],
                nDocComLetrCodigo: 0,
                nDocComLetrNroLinea: 0,
                nPayComision: 0,
                nPayRedondeo: 0,
                nCtaPayDifCambioTipo: 0,
                nDocSolLinIGVRet: 0,
                cDocSolLinIRRent: '0'
            });
        })
        return documentos;
    }

    getObjAsiento(formulario:IFormFactura, pagos:IComprobantes[]):IDocAsiento[]{
        const asientos:IDocAsiento[]=[];
        const fecha = moment().format('YYYY-MM-DD');
        const fechaFin:string = fecha.split('-').reverse().join('/');
        pagos.forEach((pago,index) => {
            asientos.push({
                cPerJurCodigo: formulario.cPerJurCodigo,
                nDocConAsiCodigo: 0,
                cDocCodigo: pago.cDocCodigo,
                nDocConAsiSeq: index+1,
                nDocConAsiEstado: 1,
                dDocConAsiFecha:  moment().format(),
                cDocConAsiDescr: 'Ctas. Por Pagar - Comprobante '+fechaFin,
                ntipo: 1,
                dDocConAsiFecRegistro: moment().format(),
                cPerUsuario: formulario.codigo,
                cDocConAsiCode: '',
                asientoDetalleLst: []//lineas contables
            })
        })
        return asientos;
    }
    
    retornarMonto(data): number {
        const digito = data.toString().replace(/,/g,'');
        return Number(digito);
    }
}
