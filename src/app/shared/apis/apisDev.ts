import { IApiEstructura } from "./apiConf";

const recursosGenerales = {
    create: "/Insert",
    getByPagination: "/GetByPagination",
    update: "/update",
    delete: "/Delete"
};

export const APIS_DEV: IApiEstructura = {
    acdGrupoEstudio: {
        endpoint: "/api/Acd_GrupoEstudio",
        recurso: {
            ...recursosGenerales,
            getDetalleHorarios: "/GetDetalleHorarios"
        }
    },
    acdSubGrupoEstudio: {
        endpoint: "/api/Acd_SubGrupoEstudio",
        recurso: recursosGenerales
    },
    acdSubGrupoEstDocentes: {
        endpoint: "/api/Acd_SubGruEstDocentes",
        recurso: recursosGenerales
    },
    admAcciones: {
        endpoint: "/api/AdmAcciones",
        recurso: recursosGenerales
    },
    admBankQuestion: {
        endpoint: "/api/Adm_BankQuestion",
        recurso: {
            ...recursosGenerales,
            getByPaginationDetail: "/GetByPaginationDetail"
        }
    },
    admBankQueHead: {
        endpoint: "/api/Adm_BankQueHead",
        recurso: recursosGenerales
    },
    admBankQueResponse: {
        endpoint: "/api/Adm_BankQueResponse",
        recurso: recursosGenerales
    },
    admMotivoAcciones: {
        endpoint: "/api/AdmMotivoAcciones",
        recurso: recursosGenerales
    },
    almacenReporte: {
        endpoint: "/api/AlmacenReporte",
        recurso: {
            getPagination: "/GetPagination"
        }
    },
    asignacionLista: {
        endpoint: "/api/AcdAsignacionLst",
        recurso: recursosGenerales
    },
    asiPersonaDetalle: {
        endpoint: "/api/LstAsiPerDetalle",
        recurso: {
            ...recursosGenerales,
            getBySolicitud: "/GetBySolicitud"
        }
    },
    archivos: {
        endpoint: "/api/FileOBSHuawei",
        recurso: recursosGenerales
    },
    artSerMasVenta: {
        endpoint: "/api/ArtSerMasVenta",
        recurso: recursosGenerales
    },
    artServicio: {
        endpoint: "/api/Art_Servicio",
        recurso: {
            ...recursosGenerales,
            insertMasivo: "/InsertMasivo",
            updateMasivo: "/updateMasivo",
            getByArtServicioDTO: "/getBy_Art_ServicioDTO",
            deleteMasivo: "/DeleteMasivo",
            changeEstate: "/changeEstate"
        }
    },
    campus: {
        endpoint: "/api/AcdCampus",
        recurso: recursosGenerales
    },
    certificaciones: {
        endpoint: "/api/Acd_ProPlaCertificacion",
        recurso: recursosGenerales
    },
    certificacionDetalle: {
        endpoint: "/api/Acd_ProPlaCerDetalle",
        recurso: recursosGenerales
    },
    componenteEvaluacion: {
        endpoint: "/api/Adm_ComponenteEvaluacion",
        recurso: recursosGenerales
    },
    configuracionSistema: {
        endpoint: "/api/SysConfEmpresa",
        recurso: recursosGenerales
    },
    constante: {
        endpoint: "/api/Constante",
        recurso: {
            ...recursosGenerales,
            getByPersona: "/GetByPersona",
            getByTasa: "/get_ByTasa"
        }
    },
    definicionGestorCobranzas: {
        endpoint: "/api/Ven_Definicion_GestorCobranzasCab",
        recurso: {
            ...recursosGenerales,
            getPagination: "/GetPagination",
        }
    },
    definicionGestorCobranzasDet: {
        endpoint: "/api/Ven_Definicion_GestorCobranzasDet",
        recurso: {
            ...recursosGenerales,
            getPagination: "/GetPagination"
        }
    },
    definicionParamListaControl: {
        endpoint: "/api/Adm_DefParamListaControl",
        recurso: recursosGenerales
    },
    detalleArtMasterImpuestos: {
        endpoint: "/api/DetalleArtMasterImpuestos",
        recurso: recursosGenerales
    },
    detraccion: {
        endpoint: "/api/Detraccion",
        recurso: {
            getPagination: "/GetPagination"
        }
    },
    elementoControl: {
        endpoint: "/api/AcdElementoControl",
        recurso: recursosGenerales
    },
    equivalencia: {
        endpoint: "/api/Acd_ProPlaEstEquivalente",
        recurso: {
            ...recursosGenerales,
            createDetails: "/InsertDetetalle"
        }
    },
    experienciaCurricular: {
        endpoint: "/api/AcdExpCurricular",
        recurso: {
            ...recursosGenerales,
            getByPaginationNombre: "/GetByNombre"
        }
    },
    experienciaCurricularTipo: {
        endpoint: "/api/AcdExpCurricularTipo",
        recurso: recursosGenerales
    },
    funcionesElementos: {
        endpoint: "/api/AcdFuncion",
        recurso: recursosGenerales
    },
    gaEdificio: {
        endpoint: "/api/GA_Edificio",
        recurso: recursosGenerales
    },
    gaEstructura: {
        endpoint: "/api/GA_Estructura",
        recurso: {
            ...recursosGenerales,
            getByPaginationPadre: "/GetByPaginationPadre"
        }
    },
    gaEstructuraPerDetalle: {
        endpoint: "/api/GA_EstructuraPerDetalle",
        recurso: {
            ...recursosGenerales,
            deleteLst: "/DeleteLst"
        }
    },
    gaEstructuraPermisos: {
        endpoint: "/api/GA_EstructuraPermisos",
        recurso: {
            ...recursosGenerales,
            getByPaginationDetalle: "/GetByPaginationDetalle",
            createList: "/InsertLst"
        }
    },
    gaHorario: {
        endpoint: "/api/GA_Horario",
        recurso: recursosGenerales
    },
    gaHorarioDetalle: {
        endpoint: "/api/GA_HorDetalle",
        recurso: {
            ...recursosGenerales,
            createLst: "/InsertLst",
            updateDocente: "/Update_AllDocente",
            deleteLst: "/DeleteLst"
        }
    },
    gestorProvisionCastigo: {
        endpoint: "/api/Gestor_provision_CastigoCab",
        recurso: {
            ...recursosGenerales
        }
    },
    gpNomPlaParamRemuneracion: {
        endpoint: "/api/GP_NomPlaParamRemuneracion",
        recurso: {
            ...recursosGenerales,
            lstRemuneracion: "/LstRemuneracion"
        }
    },
    gruposAcademicos: {
        endpoint: "/api/AcdGrupos",
        recurso: recursosGenerales
    },
    institucionesAcademicas: {
        endpoint: "/api/InstitucionAcademica",
        recurso: {
            ...recursosGenerales,
            getByPaginationNombre: "/GetByPaginationNombre",
            getByCodigoModular: "/GetByCodigoModular",
            getByPaginationEscale: "/GetByPaginationEscale",
            getByCodigoModularEscale: "/Escale"
        }
    },
    interface: {
        endpoint: "/api/Interface",
        recurso: recursosGenerales
    },
    listaControl: {
        endpoint: "/api/AcdListaControl",
        recurso: recursosGenerales
    },
    listaControlDetalle: {
        endpoint: "/api/AcdLisCtlDetalle",
        recurso: recursosGenerales
    },
    listaPermisoModulo: {
        endpoint: "/api/SeguridadListaPermisoModulo",
        recurso: {
            ...recursosGenerales,
            createLst: "/InsertLst"
        }
    },
    listaPermisos: {
        endpoint: "/api/SeguridadListaPermisos",
        recurso: recursosGenerales
    },
    matricula: {
        endpoint: "/api/AcdMatricula",
        recurso: {
            ...recursosGenerales,
            getHistorialMatriculas: "/GetHistorialMatriculas",
            getFichaMatricula: "/GetFichaMatricula"
        }
    },
    matriculaCursos: {
        endpoint: "/api/AcdMatCursos",
        recurso: {
            ...recursosGenerales,
            getByPersona: "/GetByPersona"
        }
    },
    modalidad: {
        endpoint: "/api/AcdModalidad",
        recurso: recursosGenerales
    },
    modulo: {
        endpoint: "/api/SeguridadModulo",
        recurso: {
            ...recursosGenerales,
            getByPaginationTree: "/GetByPaginationTree",
            getByPaginationTreeListPermisos: "/GetByPaginationTreeListPermisos"
        }
    },
    moneda: {
        endpoint: "/api/Moneda",
        recurso: recursosGenerales
    },
    motivoExtorno: {
        endpoint: "/api/com_MotivoExtorno",
        recurso: {
            ...recursosGenerales,
            updateState: "/updateEstado"
        }
    },
    mvCajaApertura: {
        endpoint: "/api/MVCajApertura",
        recurso: {
            getByPagination: "/GetByPagination",
            insertUpdate: "/InsertUpdate",
            getByDate: "/getByFecha",
            byCajaSerie: "/ByCajaSerie"
        }
    },
    mvCajaAperturaForPay: {
        endpoint: "/api/MVCajAperForPay",
        recurso: recursosGenerales
    },
    mvCajaAperturaSerie: {
        endpoint: "/api/MVCajAperSerie",
        recurso: recursosGenerales
    },
    niveles: {
        endpoint: "/api/AcdNiveles",
        recurso: recursosGenerales
    },
    servTipoCuenta: {
        endpoint: "/api/ServTipoCuenta",
        recurso: {
            ...recursosGenerales,
            updateState: "/updateEstadoServTipoCuenta"
        }
    },
    
    venPayemnt:{
        endpoint: "/api/Ven_Payment",
        recurso: {
            ...recursosGenerales
        }
    },
    solicitud: {
        endpoint: "/api/Adm_Solicitud",
        recurso: recursosGenerales
    },
    solicitudDetalle: {
        endpoint: "/api/Adm_SolDetalle",
        recurso: recursosGenerales
    },
    tipoCambio: {
        endpoint: "/api/Tasa",
        recurso: {
            getPagination: "/GetPagination",
            update: "/update"
        }
    },
    perContrato: {
        endpoint: "/api/PerContrato",
        recurso: {
            getByPaginationPersonaMaxdPerConFecha: "/GetByPaginationPersonaMaxdPerConFecha"
        }
    },
    perEstudiante: {
        endpoint: "/api/Acd_PerEstudiante",
        recurso: {
            ...recursosGenerales,
            getPerDetalle: "/GetPerDetalle"
        }
    },
    periodoFase: {
        endpoint: "/api/Adm_PeriodoFase",
        recurso: recursosGenerales
    },
    periodoAcademico: {
        endpoint: "/api/Periodo",
        recurso: recursosGenerales
    },
    persona: {
        endpoint: "/api/Persona",
        recurso: {
            ...recursosGenerales,
            getById: "/GetById",
            getByLastName: "/GetByLastName",
            getByInformationEmpresas: "/GetByInformationEmpresas"
        }
    },
    perImagen: {
        endpoint: "/api/PerImagen",
        recurso: recursosGenerales
    },
    perParentesco: {
        endpoint: "/api/PerParentesco",
        recurso: recursosGenerales
    },
    perRelacion: {
        endpoint: "/api/PerRelacion",
        recurso: recursosGenerales
    },
    perUsuario: {
        endpoint: "/api/PerUsuario",
        recurso: {
            ...recursosGenerales,
            getPermisosByUser: "/GetPermisosByUser",
            getUser: "/GetUser"
        }
    },
    planEstudio: {
        endpoint: "/api/Acd_ProPlanEstudios",
        recurso: {
            ...recursosGenerales,
            getByNivel: "/GetByNivel",
            updateName: "/update_Name"
        }
    },
    planEstudioDetalle: {
        endpoint: "/api/Acd_ProPlaEstDetalle",
        recurso: {
            ...recursosGenerales,
            getByPaginationPreRequisitos: "/GetByPagination/PreRequisitos",
            getByCiclo: "/GetByCiclo"
        }
    },
    planEstudioPrerequisito: {
        endpoint: "/api/Acd_ProPlaEstRequisito",
        recurso: {
            ...recursosGenerales,
            createList: "/InsertLst"
        }
    },
    procesoEvaluacion: {
        endpoint: "/api/AdmProcesoEvaluacion",
        recurso: {
            ...recursosGenerales,
            insertDetalle: "/InsertDetalle"
        }
    },
    procesoEvaluacionDetalle: {
        endpoint: "/api/AdmProEvaDetalle",
        recurso: recursosGenerales
    },
    programa: {
        endpoint: "/api/AcdPrograma",
        recurso: recursosGenerales
    },
    reportePerInterfaceCharfield: {
        endpoint: "/api/ReportePerInterfaceCharfield",
        recurso: {
            getBycPerCodigocuatro: "/GetBy_cPerCodigocuatro",
            getBycPerCodigoSeis: "/GetBy_cPerCodigoseis",
            getByCharfieldPadre: "/GetByCharfield_Padre"
        }
    },
    reporteRegistroVenta: {
        endpoint: "/api/ReporteRegistroVenta",
        recurso: {
            getPaginationRegistroVenta: "/GetPaginationRegistroVenta",
            getReporteVentaDepartamentoResumido: "/GetReporteVentaDepartamentoResumido",
            getReporteVentaDepartamentoServicio: "/GetReporteVentaDepartamentoServicio",
            getReporteVentaDepartamentoDetalle: "/GetReporteVentaDepartamentoDetalle"
        }
    },
    reporteCobranza: {
        endpoint: "/api/Ven_Payment",
        recurso: {
            getReporteDetallado: "/GetReporteDetVen_Payment",
            getReporteAgrupado: "/GetReporteAgrupVen_Payment"
        }
    },
    reporteProvicion:{
        endpoint: "/api/ReporteCobranzas_ProvisionGetDTO",
        recurso: {
            getReporteDetallado: "/GetCobranzaDetallado",
            getReporteResumido: "/GetCobranzaPagination",            
            
            getReportePendienteR: "/GetPendientesResumido",
            getReportePendienteD: "/GetPaginationPendientesDetallado",
            getReporteProvisionR: "/GetProvisionPagination",
            getReporteProvisionD: "/GetPaginationProvisionDetallado",
            getReporteCastigoR: "/GetCastigoPagination",
            getReporteCastigoD: "/GetPaginationCastigoDetallado",
        }
    },
    rol: {
        endpoint: "/api/SeguridadRol",
        recurso: recursosGenerales
    },
    rolesPersona: {
        endpoint: "/api/SeguridadRolesPersona",
        recurso: recursosGenerales
    },
    rolListaPermiso: {
        endpoint: "/api/SeguridadRolListaPermisos",
        recurso: recursosGenerales
    },
    subNiveles: {
        endpoint: "/api/AcdSubNiveles",
        recurso: recursosGenerales
    },
    sysFileObsHuawei: {
        endpoint: "/api/FileOBSHuawei",
        recurso: {
            fileByID: "/FileByID"
        }
    },
    sysModAsset: {
        endpoint: "/api/SysModAsset",
        recurso: recursosGenerales
    },
    sysColumns: {
        endpoint: "/api/SysColumns",
        recurso: null
    },
    sysConfigVarTasImpuesto: {
        endpoint: "/api/SysConfigVarTasImpuesto",
        recurso: {
            getAll: "/GetAll"
        }
    },
    sysConfModGestionAcademica: {
        endpoint: "/api/SysConfModGestionAcademica",
        recurso: recursosGenerales
    },
    sysConfModGestionAdmision: {
        endpoint: "/api/SysConfModGestionAdmision",
        recurso: recursosGenerales
    },
    sysDataObject: {
        endpoint: "/api/SysDataObject",
        recurso: {
            getPagination: "/GetByPagination",
            getViews: "/GetViews",
            getColumns: "/GetColumns"
        }
    },
    sysGestorEstDetalle: {
        endpoint: "/api/SysGestorEstDetalle",
        recurso: recursosGenerales
    },
    sysGestorEstructura: {
        endpoint: "/api/SysGestorEstructura",
        recurso: {
            ...recursosGenerales,
            getByPaginationTree: "/GetByPaginationTree"
        }
    },
    sysGestorFile: {
        endpoint: "/api/SysGestorFile",
        recurso: recursosGenerales
    },
    sysObject: {
        endpoint: "/api/SysObject",
        recurso: {
            getByPagination: "/ByPagination"
        }
    },
    sysProcesoSistemas: {
        endpoint: "/api/SysProcesoSistemas",
        recurso: recursosGenerales
    },
    sysPerJurConfiguracion: {
        endpoint: "/api/SysPerJurConfiguracion",
        recurso: {
            ...recursosGenerales,
            getConfigSystem: "/GetConfigSystem",
            createLogo: "/InsertLogo"
        }
    },
    sysPerJurMail: {
        endpoint: "/api/SysPerJurMail",
        recurso: recursosGenerales
    },
    sysPerJurVinculados: {
        endpoint: "/api/SysPerJurVinculados",
        recurso: recursosGenerales
    },
    sysPerRegistro: {
        endpoint: "/api/SysPerRegistro",
        recurso: {
            ...recursosGenerales,
            getSysPerRegistro: "/Get_SysPerRegistro"
        }
    },
    sysPerRegistroPersona: {
        endpoint: "/api/SysPerRegistro_by_Persona",
        recurso: {
            getByPagination: "/ByPagination"
        }
    },
    sysTemplateLoad: {
        endpoint: "/api/SysTemplateLoad",
        recurso: recursosGenerales
    },
    sysTemplateLoadDetail: {
        endpoint: "/api/SysTemplateLoadDetalle",
        recurso: {
            ...recursosGenerales,
            detalleExcel: "/infoexel"
        }
    },
    tiposModalidad: {
        endpoint: "/api/AcdTipo",
        recurso: recursosGenerales
    },
    ubigeo: {
        endpoint: "/api",
        recurso: {
            getUbigeoPais: "/Get_Ubigeo_Pais/GetByPagination",
            getUbigeoDepartamento: "/Get_Ubigeo_Departamento_By_Pais",
            getUbigeoProvincia: "/Get_Ubigeo_Provincia_By_Departamento",
            getUbigeoDistrito: "/Get_Ubigeo_Distrito_By_Provincia"
        }
    },
    vacantes: {
        endpoint: "/api/AdmGesVacantes",
        recurso: {
            ...recursosGenerales,
            updateDetalle: "/updateDetalle",
            deleteDoc: "/DeleteDocReso"
        }
    },
    vacanteDetalle: {
        endpoint: "/api/AdmGesVacDetalle",
        recurso: {
            ...recursosGenerales,
            insertDoc: "/InsertDoc"
        }
    },
    venPayExtorno: {
        endpoint: "/api/Ven_PayExtorno",
        recurso: recursosGenerales
    },
    venComprobante: {
        endpoint: "/api/Ven_Comprobante",
        recurso: {
            comunicacionBaja: "/ComunicacionBaja",
            comunicacionBajaBycPerJurCodigo: "/ComunicacionBajaBy_cPerJurCodigo",
            create: "/Insert",
            createService: "/InsertServicio"
        }
    },
    wfFaseFormAtributos: {
        endpoint: "/api/WFFaseFormAtributos",
        recurso: {
            ...recursosGenerales,
            createLst: "/InsertLst"
        }
    },
    wfFases: {
        endpoint: "/api/WFFases",
        recurso: {
            ...recursosGenerales,
            getByPaginationDetail: "/GetByPaginationDetail",
            updateSequence: "/updateSequence"
        }
    },
    wfObjetos: {
        endpoint: "/api/WFObjetos",
        recurso: recursosGenerales
    },
    workFlow: {
        endpoint: "/api/WorkFlow",
        recurso: recursosGenerales
    },
    venAccAsiento: {
        endpoint: "/api/Ven_AccAsiento",
        recurso: {
            ...recursosGenerales,
            getByPaginationDetails: "/GetByPaginationDetails"
        }
    }
};
