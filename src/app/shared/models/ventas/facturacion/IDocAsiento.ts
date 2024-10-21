import { DateTime } from "ts-luxon";

export interface IDocAsiento{
    cPerJurCodigo:string;
    cDocCodigo:string;
    nDocConAsiSeq:number;
    nDocConAsiEstado:number;
    dDocConAsiFecha:string|DateTime;
    cDocConAsiDescr:string;
    ntipo:number;
    dDocConAsiFecRegistro:string|DateTime;
    cPerUsuario:string;
    cDocConAsiCode:string;
    nDocConAsiCodigo:number;
    asientoDetalleLst:any[];
}

export interface IDocAsientoDetalle{
    cPerJurCodigo:string;
    nDocConAsiCodigo:number;
    cDocCodigo:string;
    nDocConAsiSeq:number;
    nNroitem:number;
    nLine:number;
    nDocConAsiDestino:number;
    nDocConAsiDetLine:number;
    cCtaCodigo:string;
    cPerCodigo:string;
    nActCodigo:number;
    nUniOrgCodigo:number;
    nMoneda:number;
    nTasaCambio:number;
    nMonto:number;
    nMonEquivalente:number;
    nBieCodigo:number;
    nOpeCodigo:number;
    nFilCodigo:number;
    nSedCodigo:number;
    nProyCodigo:number;
    nCtaCodigo:number;
    nSucCodigo:number;
    nConsCodigo:number;
    nYear:number;
    nMes:number;
    nCtaRefPresupuesto:number;
    nConAsiCodigoDes:number;
    nConAsiLineDes:number;
    nProcCod:number;
    nProcLine:number;
}

