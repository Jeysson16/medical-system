export interface ConfiguracionSistema {
    nSysConfEmpCodigo?: number;
    cPerJurCodigo?: string;
    nSysConAcaActivarNivel?: number;
    cSysConAcaNombreNivel?: string;
    cSysConAcaNameRecordNivel?: string;
    nSysConAcaPermiteTodo?: number;
    cSusConAcaNameColumnKey?: string;
    dSysConAcaFecRegistro?: Date;
    cSysConAcaPerUsuRegistro?: string;
    cSysConAcaHostRegistro?: string;
    dSysConAcaFecUpdate?: Date;
    cSysConAcaPerUsuUpdate?: string;
    cSysConAcaHostUpdate?: string;
    //estado?:                    string;
    canRemoved?: boolean;
}
