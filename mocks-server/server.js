const jsonServer = require("json-server");
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const institucionesData = require("./controller/instituciones.contoller");
const nivelesSubnivelesData = require("./controller/niveles-subniveles.controller");
const gruposAcademicosData = require("./controller/grupos-academicos.controller");
const constantesData = require("./controller/constantes.controller");
const interfacesData = require("./controller/interfaces.controller");
const funcionesElementosData = require("./controller/funciones-elementos.controller");
const elementosListasControlData = require("./controller/elementos-listas.controller");
const listasControlData = require("./controller/listas-control.controller");
const personaData = require("./controller/persona.controller");
const persUsuario = require("./controller/per-usuario.controller");
const configuracionesData = require("./controller/configuraciones-sistema.controller");
const perRegistroByPersona = require("./controller/per-registro.controller");
const planEstudio = require("./controller/plan-estudios.controller");
const archivos = require("./controller/archivos.controller");
const experienciaCurricular = require("./controller/experiencia-curricular.controller");
const periodoAcademico = require("./controller/periodo-academico.controller");
const campus = require("./controller/campus.controller");
const parentesco = require("./controller/per-parentesco");
const programaEstudio = require("./controller/programa-estudio.controller");
const solicitud = require("./controller/adm-solicitud.controller");
const modalidad = require("./controller/modalidad.controller");
const ubigeo = require("./controller/ubigeo.controller");
const modalidades = require("./controller/modalidades.controller");
const modulos = require("./controller/seguridad/modulo.controller");
const permisos = require("./controller/seguridad/lista-permisos.controller");
const permisoModulo = require("./controller/seguridad/lista-permiso-modulo.controller");
const rol = require("./controller/seguridad/rol.controller");
const rolesPersona = require("./controller/seguridad/roles-persona.controller");
const rolListaPermiso = require("./controller/seguridad/rol-lista-permiso.controller");
const tipoModalidades = require("./controller/tipos-modalidad.controller");
const asiPersonaDetalle = require("./controller/asi-persona-detalle.controller");
const asignacionLista = require("./controller/asignacion-lista.controller");
const defParamListaControl = require("./controller/def-param-lista-control-controller");
const sysConfModGestionAcad = require("./controller/sys-config-modulos/gestion-academica.controller");
const sysConfModGestionAdm = require("./controller/sys-config-modulos/gestion-admision.controller");
const bankQuestionHead = require("./controller/adm-BankQuestion/adm-BankQueHead.controller");
const bankQuestion = require("./controller/adm-BankQuestion/adm-BankQuestion.controller");
const bankQuestionResponse = require("./controller/adm-BankQuestion/adm-BankQueResponse.controller");
const admAcciones = require("./controller/adm-acciones.controller");
const admMotivoAcciones = require("./controller/adm-motivo-acciones.controller");
const certificaciones = require("./controller/certificaciones.controller");
const preRequisitos = require("./controller/pre-requisitos.controller");
const dataObject = require("./controller/sys-data-object-controller");
const gruposEstudio = require("./controller/acd-grupo-estudio.controller");
const subGruposEstudio = require("./controller/acd-sub-grupo-estudio.controller");
const sysGestorEstDetalle = require("./controller/sys-gestor-est-detalle.controller");
const sysGestorEstructura = require("./controller/sys-gestor-estructura.controller");
const sysGestorFile = require("./controller/sys-gestor-file.controller");
const subGruposEstudioDocentes = require("./controller/acd-sub-grupo-estudio-docentes.controller");
const perContratoDocentes = require("./controller/per-contrato.controller");
const estructura = require("./controller/ga-estructura.controller");
const gaHorario = require("./controller/ga-horario.controller");
const gaHorarioDetalle = require("./controller/ga-horario-detalle.controller");
const gaEdificio = require("./controller/ga-edificio.controller");
const estructuraPermisos = require("./controller/ga-estructura-permisos.controller");
const login = require("./controller/login/login-user.controller");
const equivalencia = require("./controller/equivalencia.controller");
const matriculas = require("./controller/matricula.controller");
const matCursos = require("./controller/matcursos.controller");
const estudiante = require("./controller/per-estudiante-controller");
const workflow = require("./controller/workflow.controller");
const servTipoCuenta = require("./controller/ventas/serv-tipo-cuenta");
const vacantes = require("./controller/vacante.controller");
const systemTemplate = require("./controller/plantilla-vacante.controller");
const obsFile = require("./controller/huawei-obs.controller");
const ERROR = false;
const STATUS_SUCCESS = 200;
const STATUS_ERROR = 400;
// NOTA IMPORTANTE: Para los métodos delete no se puede obtener los valores desde su ruta,
//                  ya que aun no encuentro la forma de cómo obtenerla, caso contrario en los gets

/************************* Acd Grupos de Estudios **************************/
server.get("/api/Acd_GrupoEstudio/GetByPagination/:nPrdCodigo/:nPlaEstLineaCodigo", (req, res, next) => {
    res.status(200).send(gruposEstudio.getGrupoEstudioList);
});
server.post("/api/Acd_GrupoEstudio/Insert", (req, res, next) => {
    res.status(200).send(gruposEstudio.responseDatosVacio);
});
server.put("/api/Acd_GrupoEstudio/update", (req, res, next) => {
    res.status(200).send(gruposEstudio.responseDatosVacio);
});
server.delete("/api/Acd_GrupoEstudio/Delete?:id", (req, res, next) => {
    res.status(200).send(gruposEstudio.responseDatosVacio);
});
server.get("/api/Acd_GrupoEstudio/GetDetalleHorarios/:nPrdCodigo/:nPlaEstLineaCodigo", (req, res) => {
    res.status(200).send(gruposEstudio.getGrupoDetalleHorario);
});

/************************* Acd Sub Grupos de Estudios **************************/
server.post("/api/Acd_SubGrupoEstudio/Insert", (req, res, next) => {
    res.status(200).send(subGruposEstudio.responseDatosVacio);
});
server.put("/api/Acd_SubGrupoEstudio/update", (req, res, next) => {
    res.status(200).send(subGruposEstudio.responseDatosVacio);
});
server.delete("/api/Acd_SubGrupoEstudio/Delete?:id", (req, res, next) => {
    res.status(200).send(subGruposEstudio.responseDatosVacio);
});

/************************* Acd Sub Grupos de Estudios Docentes **************************/
server.get("/api/Acd_SubGruEstDocentes/GetByPagination/:nAcdSubGruEstCodigo", (req, res, next) => {
    res.status(200).send(subGruposEstudioDocentes.getDocentesList);
});
server.post("/api/Acd_SubGruEstDocentes/Insert", (req, res, next) => {
    res.status(200).send(subGruposEstudioDocentes.responseDatosVacio);
});
server.put("/api/Acd_SubGruEstDocentes/update", (req, res, next) => {
    res.status(200).send(subGruposEstudioDocentes.responseDatosVacio);
});
server.delete("/api/Acd_SubGruEstDocentes/Delete/:nAcdSubGruEstCodigo/:cPerCodigo", (req, res, next) => {
    res.status(200).send(subGruposEstudioDocentes.responseDatosVacio);
});

/************************* Banco de Preguntas - Head **************************/
server.get("/api/Adm_BankQueHead/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(bankQuestionHead.getBankHeadList);
});
server.post("/api/Adm_BankQueHead/Insert", (req, res, next) => {
    res.status(200).send(bankQuestionHead.responseDatosVacio);
});
server.put("/api/Adm_BankQueHead/update", (req, res, next) => {
    res.status(200).send(bankQuestionHead.responseDatosVacio);
});
server.delete("/api/Adm_BankQueHead/Delete?:id", (req, res, next) => {
    res.status(200).send(bankQuestionHead.responseDatosVacio);
});

/************************* Banco de Preguntas - Question **************************/
server.get("/api/Adm_BankQuestion/GetByPaginationDetail/:nAdmBankCodigo", (req, res, next) => {
    res.status(200).send(bankQuestion.getBankQuestionList);
});
server.post("/api/Adm_BankQuestion/Insert", (req, res, next) => {
    res.status(200).send(bankQuestion.responseDatosVacio);
});
server.put("/api/Adm_BankQuestion/update", (req, res, next) => {
    res.status(200).send(bankQuestion.responseDatosVacio);
});
server.delete("/api/Adm_BankQuestion/Delete?:id", (req, res, next) => {
    res.status(200).send(bankQuestion.responseDatosVacio);
});

/************************* Banco de Preguntas - Response **************************/
server.get("/api/Adm_BankQueResponse/GetByPagination/:nAdmBankQueCodigo", (req, res, next) => {
    res.status(200).send(bankQuestionResponse.getBankResponseList(req.params));
});
server.post("/api/Adm_BankQueResponse/Insert", (req, res, next) => {
    res.status(200).send(bankQuestionResponse.responseDatosVacio);
});
server.put("/api/Adm_BankQueResponse/update", (req, res, next) => {
    res.status(200).send(bankQuestionResponse.responseDatosVacio);
});
server.delete("/api/Adm_BankQueResponse/Delete?:id", (req, res, next) => {
    res.status(200).send(bankQuestionResponse.responseDatosVacio);
});
/************************* Niveles **************************/
server.get("/api/AcdNiveles/GetByPagination/:cPerCodigo", (req, res, next) => {
    res.status(200).send(nivelesSubnivelesData.getNivelesSubniveles);
});
server.get("/api/AcdNiveles/GetByPagination/:cPerCodigo", (req, res, next) => {
    res.status(200).send(nivelesSubnivelesData.getNivelesSubniveles);
});
server.post("/api/AcdNiveles/Insert", (req, res, next) => {
    req.params;
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = nivelesSubnivelesData.responseErrorNiv;
    } else {
        estado = STATUS_SUCCESS;
        response = nivelesSubnivelesData.responseDatosVacio;
    }
    res.status(estado).send(response);
    //res.status(200).send(nivelesSubnivelesData.responseDatosVacio);
});
server.put("/api/AcdNiveles/update", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = nivelesSubnivelesData.responseErrorNiv;
    } else {
        estado = STATUS_SUCCESS;
        response = nivelesSubnivelesData.responseDatosVacio;
    }
    res.status(estado).send(response);
});
server.delete("/api/AcdNiveles/Delete?:id", (req, res, next) => {
    res.status(200).send(nivelesSubnivelesData.responseDatosVacio);
});

/************************* SubNiveles **************************/
server.post("/api/AcdSubNiveles/Insert", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = nivelesSubnivelesData.responseErrorSubNiv;
    } else {
        estado = STATUS_SUCCESS;
        response = nivelesSubnivelesData.responseDatosVacio;
    }
    res.status(estado).send(response);
    //res.status(200).send(nivelesSubnivelesData.responseDatosVacio);
});
server.put("/api/AcdSubNiveles/update", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = nivelesSubnivelesData.responseErrorSubNiv;
    } else {
        estado = STATUS_SUCCESS;
        response = nivelesSubnivelesData.responseDatosVacio;
    }
    res.status(estado).send(response);
});
server.delete("/api/AcdSubNiveles/Delete?:id", (req, res, next) => {
    res.status(200).send(nivelesSubnivelesData.responseDatosVacio);
});

/************************* Grupos Académicos **************************/
server.get("/api/AcdGrupos/GetByPagination/:cPerCodigo", (req, res, next) => {
    res.status(200).send(gruposAcademicosData.getGruposAcademicos);
});
server.post("/api/AcdGrupos/Insert", (req, res, next) => {
    res.status(200).send(gruposAcademicosData.responseDatosVacio);
});
server.put("/api/AcdGrupos/update", (req, res, next) => {
    res.status(200).send(gruposAcademicosData.responseDatosVacio);
});
server.delete("/api/AcdGrupos/Delete?:id", (req, res, next) => {
    res.status(200).send(gruposAcademicosData.responseDatosVacio);
});

/************************* Constantes **************************/
server.get("/api/Constante/GetByPagination/:nConCodigo", (req, res, next) => {
    res.status(200).send(constantesData.getConstantes(req.params));
});
server.post("/api/Constante/Insert", (req, res, next) => {
    res.status(200).send(constantesData.responseDatosVacio);
});
server.put("/api/Constante/update", (req, res, next) => {
    res.status(200).send(constantesData.responseDatosVacio);
});
server.delete("/api/Constante/Delete?:nid", (req, res, next) => {
    res.status(200).send(constantesData.responseDatosVacio);
});

/************************* Interfaces **************************/
server.get("/api/Interface/GetByPagination/:idClase", (req, res, next) => {
    res.status(200).send(interfacesData.getInterfaces(req.params));
});
server.post("/api/Interface/Insert", (req, res, next) => {
    res.status(200).send(interfacesData.responseDatosVacio);
});
server.put("/api/Interface/update", (req, res, next) => {
    res.status(200).send(interfacesData.responseDatosVacio);
});
server.delete("/api/Interface/Delete?:id", (req, res, next) => {
    //en
    res.status(200).send(interfacesData.responseDatosVacio);
});

/************************* Instituciones Académicas **************************/
server.get("/api/InstitucionAcademica/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(institucionesData.getInstituciones);
});
server.get("/api/InstitucionAcademica/GetByPaginationNombre?:cInsAcaNombre", (req, res, next) => {
    res.status(200).send(institucionesData.getInstitucionesNombres);
});
server.get("/api/InstitucionAcademica/:nInstitucionAcaCodigo", (req, res, next) => {
    res.status(200).send(institucionesData.getInstitucionById(req.params));
});
server.get("/api/InstitucionAcademica/GetByCodigoModular/:cInsAcaCodigoModular", (req, res, next) => {
    res.status(200).send(institucionesData.getInstitucionByCodigoModular(req.params));
});
server.get("/api/InstitucionAcademica/Escale/:cInsAcaCodigoModular", (req, res, next) => {
    res.status(200).send(institucionesData.getInstitucionesScaleCodigoModular(req.params));
});
server.get("/api/InstitucionAcademica/GetByPaginationEscale/:cInsAcaNombre/:cInsAcaCodigoModular", (req, res, next) => {
    res.status(200).send(institucionesData.getInstituciones);
});
server.put("/api/InstitucionAcademica/update", (req, res, next) => {
    res.status(200).send(institucionesData.responseDatosVacio);
});
server.post("/api/InstitucionAcademica/Insert", (req, res, next) => {
    res.status(200).send(institucionesData.responseDatosVacio);
});
server.delete("/api/InstitucionAcademica/Delete?:id", (req, res, next) => {
    res.status(200).send(institucionesData.responseDatosVacio);
});

/************************* Funciones de elementos de Listas de Control **************************/
server.post("/api/AcdFuncion/Insert", (req, res, next) => {
    res.status(200).send(funcionesElementosData.responseDatosVacio);
});
server.get("/api/AcdFuncion/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(funcionesElementosData.getFuncionesElementos);
});
server.put("/api/AcdFuncion/update", (req, res, next) => {
    res.status(200).send(funcionesElementosData.responseDatosVacio);
});
server.delete("/api/AcdFuncion/Delete?:id", (req, res, next) => {
    res.status(200).send(funcionesElementosData.responseDatosVacio);
});

/************************* GA EDIFICIO **************************/
server.get("/api/GA_Edificio/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(gaEdificio.getEdificioList);
});
server.post("/api/GA_Edificio/Insert", (req, res, next) => {
    res.status(200).send(gaEdificio.responseDatosVacio);
});
server.put("/api/GA_Edificio/update", (req, res, next) => {
    res.status(200).send(gaEdificio.responseDatosVacio);
});
server.delete("/api/GA_Edificio/Delete?:nIdEdificio", (req, res, next) => {
    res.status(200).send(gaEdificio.responseDatosVacio);
});

/************************* GA ESTRUCTURA **************************/
server.get("/api/GA_Estructura/GetByPaginationPadre/:cPerJurCodigo/:nGAEstAmbPadre", (req, res, next) => {
    res.status(200).send(estructura.getEstructuraList);
});
server.get("/api/GA_Estructura/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(estructura.getEstructuraList);
});
server.get("/api/GA_Estructura/:nGAEstAmbientes", (req, res, next) => {
    res.status(200).send(estructura.getEstructura);
});
server.post("/api/GA_Estructura/Insert", (req, res, next) => {
    res.status(200).send(estructura.responseDatosVacio);
});
server.put("/api/GA_Estructura/update", (req, res, next) => {
    res.status(200).send(estructura.responseDatosVacio);
});
server.delete("/api/GA_Estructura/Delete?:nGAEstAmbientes", (req, res, next) => {
    res.status(200).send(estructura.responseDatosVacio);
});

/************************* GA ESTRUCTURA PERMISOS **************************/
server.get("/api/GA_EstructuraPermisos/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(estructuraPermisos.getPermisosList);
});
server.get("/api/GA_EstructuraPermisos/:nGAEstAmbientes", (req, res, next) => {
    res.status(200).send(estructuraPermisos.getEstructura);
});
server.post("/api/GA_EstructuraPermisos/Insert", (req, res, next) => {
    res.status(200).send(estructuraPermisos.responseDatosVacio);
});
server.put("/api/GA_EstructuraPermisos/update", (req, res, next) => {
    res.status(200).send(estructuraPermisos.responseDatosVacio);
});
server.delete("/api/GA_EstructuraPermisos/Delete?:nGAEstpermisoCodigo", (req, res, next) => {
    res.status(200).send(estructuraPermisos.responseDatosVacio);
});
server.get("/api/GA_EstructuraPermisos/:cPerJurCodigo/:nPrdCodigo/:nGAEstAmbientes/:nAcdProCodigo/:nAcdGruCodigo/:nAcdNivCodigo/:nAcdSubNivCodigo", (req, res, next) => {
    res.status(200).send(estructuraPermisos.getPermisoByFK(req.params));
});

/************************* GA HORARIO **************************/
server.get("/api/GA_Horario/GetByPagination/:cPerJurCodigo/:GAHorarioFilter/:GAHorarioFilterType", (req, res, next) => {
    res.status(200).send(gaHorario.getHorarioList);
});
server.post("/api/GA_Horario/Insert", (req, res, next) => {
    res.status(200).send(gaHorario.responseDatosVacio);
});
server.put("/api/GA_Horario/update", (req, res, next) => {
    res.status(200).send(gaHorario.responseDatosVacio);
});
server.delete("/api/GA_Horario/Delete?:id", (req, res, next) => {
    res.status(200).send(gaHorario.responseDatosVacio);
});

/************************* GA HORARIO DETALLE **************************/
server.post("/api/GA_HorDetalle/Insert", (req, res, next) => {
    res.status(200).send(gaHorarioDetalle.responseDatosVacio);
});
server.post("/api/GA_HorDetalle/InsertLst", (req, res, next) => {
    res.status(200).send(gaHorarioDetalle.responseDatosVacio);
});
server.put("/api/GA_HorDetalle/update", (req, res, next) => {
    res.status(200).send(gaHorarioDetalle.responseDatosVacio);
});
server.put("/api/GA_HorDetalle/Update_AllDocente", (req, res, next) => {
    res.status(200).send(gaHorario.responseDatosVacio);
});
server.delete("/api/GA_HorDetalle/Delete?:id", (req, res, next) => {
    res.status(200).send(gaHorarioDetalle.responseDatosVacio);
});

/************************* Elementos de Listas de Control **************************/
server.post("/api/AcdElementoControl/Insert", (req, res, next) => {
    res.status(200).send(elementosListasControlData.responseDatosVacio);
});
server.get("/api/AcdElementoControl/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(elementosListasControlData.getElementosListas);
});
server.put("/api/AcdElementoControl/update", (req, res, next) => {
    res.status(200).send(elementosListasControlData.responseDatosVacio);
});
server.delete("/api/AcdElementoControl/Delete?:id", (req, res, next) => {
    res.status(200).send(elementosListasControlData.responseDatosVacio);
});

/************************* Listas de Control **************************/
server.get("/api/AcdListaControl/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(listasControlData.getListasControl);
});
server.get("/api/AcdListaControl/:nLstControlCodigo", (req, res, next) => {
    res.status(200).send(listasControlData.getListaControl(req.params));
});
server.post("/api/AcdListaControl/Insert", (req, res, next) => {
    res.status(200).send(listasControlData.responseDatosVacio);
});
server.put("/api/AcdListaControl/update", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = listasControlData.responseErrorUpdDetalle;
    } else {
        estado = STATUS_SUCCESS;
        response = listasControlData.responseDatosVacio;
    }
    res.status(estado).send(response);
});

/************************* Listas de Control Detalle **************************/
server.post("/api/AcdLisCtlDetalle/Insert", (req, res, next) => {
    res.status(200).send(listasControlData.responseDatosVacio);
});
server.get("/api/AcdLisCtlDetalle/GetByPagination/:nLstControlCodigo", (req, res, next) => {
    res.status(200).send(listasControlData.getListasControlDetalle(req.params));
});
server.put("/api/AcdLisCtlDetalle/update", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = listasControlData.responseErrUpdDetalle;
    } else {
        estado = STATUS_SUCCESS;
        response = listasControlData.responseDatosVacio;
    }
    res.status(estado).send(response);
});
server.delete("/api/AcdLisCtlDetalle/Delete?:id", (req, res, next) => {
    res.status(200).send(listasControlData.responseDatosVacio);
});

/************************* Modalidades **************************/
server.get("/api/AcdModalidad/GetByPagination/:cPerJurCodigo/:nAcdTipoCodigo", (req, res, next) => {
    res.status(200).send(modalidades.getModalidadesById(req.params));
});
server.delete("/api/AcdModalidad/Delete?:id", (req, res, next) => {
    res.status(200).send(modalidades.responseDatosVacio);
});
server.post("/api/AcdModalidad/Insert", (req, res, next) => {
    res.status(200).send(modalidades.responseDatosVacio);
});
server.put("/api/AcdModalidad/update", (req, res, next) => {
    res.status(200).send(modalidades.responseDatosVacio);
});

/************************* Tipo Modalidades **************************/
server.get("/api/AcdTipo/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(tipoModalidades.getTipoModalidadByEmpresa(req.params));
});
server.delete("/api/AcdTipo/Delete?:id", (req, res, next) => {
    res.status(200).send(tipoModalidades.responseDatosVacio);
});
server.post("/api/AcdTipo/Insert", (req, res, next) => {
    res.status(200).send(tipoModalidades.responseDatosVacio);
});
server.put("/api/AcdTipo/update", (req, res, next) => {
    res.status(200).send(tipoModalidades.responseDatosVacio);
});

/************************* Configuraciones **************************/
server.post("/api/SysConfEmpresa/Insert", (req, res, next) => {
    res.status(200).send(configuracionesData.responseDatosVacio);
});
server.get("/api/SysConfEmpresa/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(configuracionesData.getConfiguraciones);
});
server.put("/api/SysConfEmpresa/update", (req, res, next) => {
    res.status(200).send(configuracionesData.responseDatosVacio);
});
server.delete("/api/SysConfEmpresa/Delete?:id", (req, res, next) => {
    res.status(200).send(configuracionesData.responseDatosVacio);
});
server.get("/api/SysObject/ByPagination", (req, res, next) => {
    res.status(200).send(configuracionesData.getSysObject);
});
server.get("/api/SysColumns/:object_id", (req, res, next) => {
    res.status(200).send(configuracionesData.getSysColumns);
});
/****************** Sys Configuraciones - Gestion Admisión *****************/
server.post("/api/SysConfModGestionAdmision/Insert", (req, res, next) => {
    res.status(200).send(sysConfModGestionAdm.responseDatosVacio);
});
server.get("/api/SysConfModGestionAdmision/GetByPagination", (req, res, next) => {
    res.status(200).send(sysConfModGestionAdm.getConfGestionAdmision);
});
server.put("/api/SysConfModGestionAdmision/update", (req, res, next) => {
    res.status(200).send(sysConfModGestionAdm.responseDatosVacio);
});
server.get("/api/SysConfModGestionAdmision/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(sysConfModGestionAdm.getConfGestionAdmisionById(req.params));
});

/****************** Sys Configuraciones - Gestion Academica *****************/
server.post("/api/SysConfModGestionAcademica/Insert", (req, res, next) => {
    res.status(200).send(sysConfModGestionAcad.responseDatosVacio);
});
server.get("/api/SysConfModGestionAcademica/GetByPagination", (req, res, next) => {
    res.status(200).send(sysConfModGestionAcad.getConfGestionAcademica);
});
server.put("/api/SysConfModGestionAcademica/update", (req, res, next) => {
    res.status(200).send(sysConfModGestionAcad.responseDatosVacio);
});
server.get("/api/SysConfModGestionAcademica/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(sysConfModGestionAcad.getConfGestionAcademicaById(req.params));
});

/************************* Per contrato **************************/
server.get("/api/PerContrato/GetByPaginationPersonaMaxdPerConFecha/:cPerJurCodigo/:cPerApellidoscPerNombresDni/:nPerIdeTipo", (req, res, next) => {
    setTimeout(() => {
        res.status(200).send(perContratoDocentes.docentesLista);
    }, 2000);
});

/************************* Persona **************************/
server.get("/api/Persona/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(personaData.getPersonas);
});
server.get("/api/Persona/GetById/:cPerJurCodigo/?:cPerCodigo", (req, res, next) => {
    res.status(200).send(personaData.getPersonaCodigo(req.params));
});
server.get("/api/Persona/GetById?dni:dni", (req, res, next) => {
    res.status(200).send(personaData.getPersonaDni(req.params));
});
server.get("/api/Persona/GetByLastName/1000012312?:busqueda", (req, res, next) => {
    res.status(200).send(personaData.getPersonas);
});
server.post("/api/Persona/Insert", (req, res, next) => {
    res.status(200).send(personaData.responseDatosVacio);
});
server.put("/api/Persona/update", (req, res, next) => {
    res.status(200).send(personaData.responseDatosVacio);
});

/************************* PerUsuario **************************/
server.get("/api/PerUsuario/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(persUsuario.getPerUsuarios);
});
server.get("/api/PerUsuario/GetPermisosByUser/:cPerJurCodigo/:cPerCodigo", (req, res, next) => {
    res.status(200).send(persUsuario.getPermisos);
});
server.get("/api/PerUsuario/GetUser/:cPerJurCodigo/:cTextSearch", (req, res, next) => {
    res.status(200).send(persUsuario.getUserSearch);
});
server.post("/api/PerUsuario/Insert", (req, res, next) => {
    res.status(200).send(persUsuario.responseDatosVacio);
});
server.put("/api/PerUsuario/update", (req, res, next) => {
    res.status(200).send(persUsuario.responseDatosVacio);
});
server.delete("/api/PerUsuario/Delete?:cPerCodigo", (req, res, next) => {
    res.status(200).send(persUsuario.responseDatosVacio);
});

/**************** Asignacion Persona Detalle *****************/
server.get("/api/LstAsiPerDetalle/GetByPagination/:cPerJurCodigo/:cPerCodigo/:nLstControlCodigo", (req, res, next) => {
    res.status(200).send(asiPersonaDetalle.getPersonaDetalle);
});
server.get("/api/LstAsiPerDetalle/GetBySolicitud/:cPerJurCodigo/:nAdmSolCodigo", (req, res, next) => {
    res.status(200).send(asiPersonaDetalle.getSolicitudByPersona);
});
server.post("/api/LstAsiPerDetalle/Insert", (req, res, next) => {
    res.status(200).send(asiPersonaDetalle.responseDatosVacio);
});
server.put("/api/LstAsiPerDetalle/update", (req, res, next) => {
    res.status(200).send(asiPersonaDetalle.responseDatosVacio);
});
/**************** Asignacion Lista *****************/
server.post("/api/AcdAsignacionLst/Insert", (req, res, next) => {
    res.status(200).send(asignacionLista.responseDatosVacio);
});
server.get("/api/AcdAsignacionLst/:cPerJurCodigo/:cPerCodigo/:nLstControlCodigo", (req, res, next) => {
    res.status(200).send(asignacionLista.getAsignacionByIdAndControl(req.params));
});

/************************* Empresas **************************/
server.get("/api/SysPerRegistro_by_Persona/ByPagination", (req, res, next) => {
    res.status(200).send(perRegistroByPersona.getPerRegistroByPersona);
});

/************************* Planes de estudios **************************/
server.get("/api/Acd_ProPlanEstudios/GetByPagination/:nAcdProCodigo", (req, res, next) => {
    res.status(200).send(planEstudio.getPlanEstudios);
});
server.get("/api/Acd_ProPlanEstudios/GetByNivel/:nivel*", (req, res, next) => {
    res.status(200).send(planEstudio.getPlanEstudiosNiveles(req.params.nivel));
});
server.post("/api/Acd_ProPlanEstudios/Insert", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});
server.put("/api/Acd_ProPlanEstudios/update_Name", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});
server.delete("/api/Acd_ProPlanEstudios/Delete", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});

/************************* Planes de estudios detalles **************************/
server.get("/api/Acd_ProPlaEstDetalle/GetByPagination/:nAcdProPlanEstCodigo", (req, res, next) => {
    res.status(200).send(planEstudio.getPlanEstudioDetalle);
});
server.get("/api/Acd_ProPlaEstDetalle/GetByPagination/PreRequisitos/:nAcdProPlanEstCodigo", (req, res, next) => {
    res.status(200).send(planEstudio.getPlanEstudioDetalleOtrosDatos);
});
server.get("/api/Acd_ProPlaEstDetalle/GetByCiclo/:ciclo/:nAcdProPlanEstCodigo", (req, res, next) => {
    res.status(200).send(planEstudio.getPlanEstudioDetalle);
});
server.post("/api/Acd_ProPlaEstDetalle/Insert", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});
server.put("/api/Acd_ProPlaEstDetalle/update", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});
server.delete("/api/Acd_ProPlaEstDetalle/Delete", (req, res, next) => {
    res.status(200).send(planEstudio.responseDatosVacio);
});

/************************* Prerequisitos **************************/
server.get("/api/Acd_ProPlaEstRequisito/GetByPagination/:nPlaEstLineaCodigo", (req, res, next) => {
    res.status(200).send(preRequisitos.getPreRequisitos);
});
server.post("/api/Acd_ProPlaEstRequisito/InsertLst", (req, res, next) => {
    res.status(200).send(preRequisitos.responseDatosVacio);
});
server.delete("/api/Acd_ProPlaEstRequisito/Delete", (req, res, next) => {
    res.status(200).send(preRequisitos.responseDatosVacio);
});

/************************* Experiencia Curricular **************************/
server.get("/api/AcdExpCurricular/GetByPagination/:cPerJuridica/:1", (req, res, next) => {
    res.status(200).send(experienciaCurricular.getExperienciaCurricularLista);
});
server.get("/api/AcdExpCurricular/GetByNombre/:cPerJuridica/:nombre", (req, res, next) => {
    res.status(200).send(experienciaCurricular.getExperienciaCurricularLista);
});
server.get("/api/AcdExpCurricular/:nAcdExpCurCodigo", (req, res, next) => {
    res.status(200).send(experienciaCurricular.getExperienciaCurricular);
});
server.post("/api/AcdExpCurricular/Insert", (req, res, next) => {
    res.status(200).send(experienciaCurricular.responseDatosVacio);
});

/************************* Experiencia Curricular Tipos **************************/
server.get("/api/AcdExpCurricularTipo/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(experienciaCurricular.getTipoExperienciaCurricular);
});
server.delete("/api/AcdExpCurricularTipo/Delete?:id", (req, res, next) => {
    res.status(200).send(experienciaCurricular.responseDatosVacio);
});
server.post("/api/AcdExpCurricularTipo/Insert", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = experienciaCurricular.responseError;
    } else {
        estado = STATUS_SUCCESS;
        response = experienciaCurricular.responseDatosVacio;
    }
    res.status(estado).send(response);

    //res.status(200).send(experienciaCurricular.responseDatosVacio);
});
server.put("/api/AcdExpCurricularTipo/update", (req, res, next) => {
    let response = null;
    let estado = 0;
    if (ERROR) {
        estado = STATUS_ERROR;
        response = experienciaCurricular.responseError;
    } else {
        estado = STATUS_SUCCESS;
        response = experienciaCurricular.responseDatosVacio;
    }
    res.status(estado).send(response);
});

/************************* Periodo Academicos Fases **************************/
server.get("/api/Adm_PeriodoFase/GetByPagination/:nPrdCodigo/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(periodoAcademico.getperiodoAcademicoFases(req.params));
});
server.delete("/api/Adm_PeriodoFase/Delete?:id", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});
server.post("/api/Adm_PeriodoFase/Insert", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});
server.put("/api/Adm_PeriodoFase/update", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});

/************************* Periodo Academicos Registro **************************/
server.get("/api/Periodo/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(periodoAcademico.getperiodoAcademicoRegistro);
});
server.get("/api/Periodo/:nPrdCodigo", (req, res, next) => {
    res.status(200).send(periodoAcademico.getPeriodoAcademicoByID(req));
});
server.post("/api/Periodo/Insert", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});
server.put("/api/Periodo/update", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});
server.delete("/api/Periodo/Delete?:id", (req, res, next) => {
    res.status(200).send(periodoAcademico.responseDatosVacio);
});

/************************* Programa Estudio **************************/
server.get("/api/AcdPrograma/GetByPagination/*", (req, res, next) => {
    res.status(200).send(programaEstudio.getprogramaEstudio);
});
server.get("/api/AcdPrograma/:nAcdProCodigo", (req, res, next) => {
    res.status(200).send(programaEstudio.getProgramaEstudioByID(req.params));
});
server.post("/api/AcdPrograma/Insert", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});
server.put("/api/AcdPrograma/update", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});
server.delete("/api/AcdPrograma/Delete?:id", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});

/*********************** Definición Parametros Lista de Control **************************/
server.get("/api/Adm_DefParamListaControl/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(defParamListaControl.getDefLstCtl);
});
server.get("/api/Adm_DefParamListaControl/:nAcdModCodigo/:nAcdSubModCodigo", (req, res, next) => {
    res.status(200).send(defParamListaControl.getItemDefLstCtl);
});
server.post("/api/Adm_DefParamListaControl/Insert", (req, res, next) => {
    res.status(200).send(defParamListaControl.responseDatosVacio);
});
server.put("/api/Adm_DefParamListaControl/update", (req, res, next) => {
    res.status(200).send(defParamListaControl.responseDatosVacio);
});
server.delete("/api/Adm_DefParamListaControl/Delete?:id", (req, res, next) => {
    res.status(200).send(defParamListaControl.responseDatosVacio);
});

/*********************** Seguridad - Lista permiso modulo ***********************/
server.get("/api/SeguridadListaPermisoModulo/:cPerJurCodigo/:nCodListaPermiso", (req, res, next) => {
    res.status(200).send(permisoModulo.getPermisoModulo);
});
server.post("/api/SeguridadListaPermisoModulo/Insert", (req, res, next) => {
    res.status(200).send(permisoModulo.responseDatosVacio);
});
server.post("/api/SeguridadListaPermisoModulo/InsertLst", (req, res, next) => {
    res.status(200).send(permisoModulo.responseDatosVacio);
});
server.put("/api/SeguridadListaPermisoModulo/update", (req, res, next) => {
    res.status(200).send(permisoModulo.responseDatosVacio);
});
server.delete("/api/SeguridadListaPermisoModulo/Delete?:id", (req, res, next) => {
    res.status(200).send(permisoModulo.responseDatosVacio);
});

/*********************** Seguridad - Lista permisos **************************/
server.get("/api/SeguridadListaPermisos/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(permisos.getLstPermisos);
});
server.post("/api/SeguridadListaPermisos/Insert", (req, res, next) => {
    res.status(200).send(permisos.responseDatosVacio);
});
server.put("/api/SeguridadListaPermisos/update", (req, res, next) => {
    res.status(200).send(permisos.responseDatosVacio);
});
server.delete("/api/SeguridadListaPermisos/Delete?:id", (req, res, next) => {
    res.status(200).send(permisos.responseDatosVacio);
});

/*********************** Seguridad - Rol **************************/
server.get("/api/SeguridadRol/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(rol.getLstRoles);
});
server.post("/api/SeguridadRol/Insert", (req, res, next) => {
    res.status(200).send(rol.responseDatosVacio);
});
server.put("/api/SeguridadRol/update", (req, res, next) => {
    res.status(200).send(rol.responseDatosVacio);
});
server.delete("/api/SeguridadRol/Delete?:id", (req, res, next) => {
    res.status(200).send(rol.responseDatosVacio);
});

/*********************** Seguridad - Roles Persona **************************/
server.get("/api/SeguridadRolesPersona/GetByPagination/:cPerCodigo/:bool", (req, res, next) => {
    res.status(200).send(rolesPersona.getLstRolesPersona);
});
server.post("/api/SeguridadRolesPersona/Insert", (req, res, next) => {
    res.status(200).send(rolesPersona.responseDatosVacio);
});
server.put("/api/SeguridadRolesPersona/update", (req, res, next) => {
    res.status(200).send(rolesPersona.responseDatosVacio);
});
server.delete("/api/SeguridadRolesPersona/Delete?:id", (req, res, next) => {
    res.status(200).send(rolesPersona.responseDatosVacio);
});

/*********************** Seguridad - Rol Lista Permisos **************************/
server.get("/api/SeguridadRolListaPermisos/GetByPagination/:nCodRol", (req, res, next) => {
    res.status(200).send(rolListaPermiso.getLstRolesListaPermiso);
});
server.post("/api/SeguridadRolListaPermisos/Insert", (req, res, next) => {
    res.status(200).send(rolListaPermiso.responseDatosVacio);
});
server.put("/api/SeguridadRolListaPermisos/update", (req, res, next) => {
    res.status(200).send(rolListaPermiso.responseDatosVacio);
});
server.delete("/api/SeguridadRolListaPermisos/Delete?:id", (req, res, next) => {
    res.status(200).send(rolListaPermiso.responseDatosVacio);
});

/*********************** Servicio - Tipo de Cuenta **************************/
server.get("/api/ServTipoCuenta/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(servTipoCuenta.getLstTypAcc);
});
server.post("/apiServTipoCuenta/Insert", (req, res, next) => {
    res.status(200).send(servTipoCuenta.responseDatosVacio);
});
server.put("/api/ServTipoCuenta/update", (req, res, next) => {
    res.status(200).send(servTipoCuenta.responseDatosVacio);
});
server.delete("/api/ServTipoCuenta/Delete?:id", (req, res, next) => {
    res.status(200).send(servTipoCuenta.responseDatosVacio);
});

/*********************** Adm Acciones **************************/
server.get("/api/AdmAcciones/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(admAcciones.getAccionesList);
});
server.post("/api/AdmAcciones/Insert", (req, res, next) => {
    res.status(200).send(admAcciones.responseDatosVacio);
});
server.put("/api/AdmAcciones/update", (req, res, next) => {
    res.status(200).send(admAcciones.responseDatosVacio);
});
server.delete("/api/AdmAcciones/Delete?:id", (req, res, next) => {
    res.status(200).send(admAcciones.responseDatosVacio);
});

/*********************** Adm Motivo Acciones **************************/
server.get("/api/AdmMotivoAcciones/GetByPagination/:cPerJurCodigo/:nAdmAccCodigo", (req, res, next) => {
    res.status(200).send(admMotivoAcciones.getMotivoAccionesList);
});
server.post("/api/AdmMotivoAcciones/Insert", (req, res, next) => {
    res.status(200).send(admMotivoAcciones.responseDatosVacio);
});
server.put("/api/AdmMotivoAcciones/update", (req, res, next) => {
    res.status(200).send(admMotivoAcciones.responseDatosVacio);
});
server.delete("/api/AdmMotivoAcciones/Delete?:id", (req, res, next) => {
    res.status(200).send(admMotivoAcciones.responseDatosVacio);
});

/*********************** Sys Gestor Estructura Detalle **************************/
server.get("/api/SysGestorEstDetalle/GetByPagination/:idGestorCodigo", (req, res, next) => {
    res.status(200).send(sysGestorEstDetalle.getLstSysGestorEstDetalle);
});
server.post("/api/SysGestorEstDetalle/Insert", (req, res, next) => {
    res.status(200).send(sysGestorEstDetalle.responseDatosVacio);
});
server.put("/api/SysGestorEstDetalle/update", (req, res, next) => {
    res.status(200).send(sysGestorEstDetalle.responseDatosVacio);
});
server.delete("/api/SysGestorEstDetalle/Delete?:id", (req, res, next) => {
    res.status(200).send(sysGestorEstDetalle.responseDatosVacio);
});

/*********************** Sys Gestor Estructura **************************/
server.get("/api/SysGestorEstructura/GetByPagination/:idGestorCodigo", (req, res, next) => {
    res.status(200).send(sysGestorEstructura.getLstSysGestorEstructura);
});
server.get("/api/SysGestorEstructura/GetByPaginationTree/:idGestorCodigo/:idGestorCodigopadre", (req, res, next) => {
    res.status(200).send(sysGestorEstructura.getLstSysGestorEstructuraTree);
});
server.post("/api/SysGestorEstructura/Insert", (req, res, next) => {
    res.status(200).send(sysGestorEstructura.responseDatosVacio);
});
server.put("/api/SysGestorEstructura/update", (req, res, next) => {
    res.status(200).send(sysGestorEstructura.responseDatosVacio);
});
server.delete("/api/SysGestorEstructura/Delete?:id", (req, res, next) => {
    res.status(200).send(sysGestorEstructura.responseDatosVacio);
});

/*********************** Sys Gestor File **************************/
server.get("/api/SysGestorFile/GetByPagination/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(sysGestorFile.getLstSysGestorFile);
});
server.get("/api/SysGestorFile/:cPerJurCodigo/:idGestorCodigo", (req, res, next) => {
    res.status(200).send(sysGestorFile.getSysGestorFile);
});
server.post("/api/SysGestorFile/Insert", (req, res, next) => {
    res.status(200).send(sysGestorFile.responseDatosVacio);
});
server.put("/api/SysGestorFile/update", (req, res, next) => {
    res.status(200).send(sysGestorFile.responseDatosVacio);
});
server.delete("/api/SysGestorFile/Delete?:id", (req, res, next) => {
    res.status(200).send(sysGestorFile.responseDatosVacio);
});

/********************** Programa Estudio Definicion ***********************/
server.get("/api/AcdProDefinicion/GetByPagination/:nAcdProCodigo", (req, res, next) => {
    res.status(200).send(programaEstudio.getProgramaEstudioDef(req.params));
});
server.get("/api/AcdProDefinicion/GetByPaginationDetail/:nAcdProCodigo", (req, res, next) => {
    res.status(200).send(programaEstudio.getProgramaEstudioDef(req.params));
});
server.get("/api/AcdProDefinicion/:id", (req, res, next) => {
    res.status(200).send(programaEstudio.getprogramaEstudioDefinicionById);
});
server.post("/api/AcdProDefinicion/Insert", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});
server.put("/api/AcdProDefinicion/update", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});
server.delete("/api/AcdProDefinicion/Delete?:id", (req, res, next) => {
    res.status(200).send(programaEstudio.responseDatosVacio);
});

/********************** Admisión - Solicitud ***********************/
server.get("/api/Adm_Solicitud/GetByPagination/:cPerJurCodigo?:cPerCodigo", (req, res, next) => {
    res.status(200).send(solicitud.getSolicitudes(req.query));
});
server.post("/api/Adm_Solicitud/Insert", (req, res, next) => {
    res.status(200).send(solicitud.responseDatosVacio);
});
server.put("/api/Adm_Solicitud/update", (req, res, next) => {
    res.status(200).send(solicitud.responseDatosVacio);
});
server.delete("/api/Adm_Solicitud/Delete?:id", (req, res, next) => {
    res.status(200).send(solicitud.responseDatosVacio);
});

/********************** Admisión - Solicitud ***********************/
server.post("/api/Adm_SolDetalle/Insert", (req, res, next) => {
    res.status(200).send(solicitud.responseDatosVacio);
});

/************************* SysDataObject **************************/
server.get("/api/SysDataObject/GetViews", (req, res, next) => {
    res.status(200).send(dataObject.getViews);
});
server.get("/api/SysDataObject/GetColumns/:nombreTabla", (req, res, next) => {
    res.status(200).send(dataObject.getColumns);
});
server.get("/api/SysDataObject/*", (req, res, next) => {
    res.status(200).send(planEstudio.getSysDataObject);
});

/************************* Campus **************************/
server.get("/api/AcdCampus/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(campus.getCampus);
});
server.post("/api/AcdCampus/Insert", (req, res, next) => {
    res.status(200).send(campus.responseDatosVacio);
});
server.put("/api/AcdCampus/update", (req, res, next) => {
    res.status(200).send(campus.responseDatosVacio);
});
server.delete("/api/AcdCampus/Delete?:id", (req, res, next) => {
    res.status(200).send(campus.responseDatosVacio);
});

/************************* Modalidad **************************/
server.get("/api/AcdModalidad/GetByPagination/:cPerJurCodigo/:nAcdTipoCodigo", (req, res, next) => {
    res.status(200).send(modalidad.getModalidadByTipo(req.params));
});
/************************* PerParentesco **************************/
server.get("/api/PerParentesco/GetByPagination/:cPerCodigo", (req, res, next) => {
    res.status(200).send(parentesco.getParentesco);
});
/************** Seguridad Modulo - Estructura y contenido****************/
server.get("/api/SeguridadModulo/GetByPaginationTree", (req, res, next) => {
    res.status(200).send(modulos.getModulosTree);
});
server.get("/api/SeguridadModulo/GetByPaginationTreeListPermisos?:nCodListaPermiso", (req, res, next) => {
    res.status(200).send(modulos.getModulosTree);
});
server.get("/api/SeguridadModulo/GetByPagination", (req, res, next) => {
    res.status(200).send(modulos.getModulos);
});
server.post("/api/SeguridadModulo/Insert", (req, res, next) => {
    res.status(200).send(modulos.responseDatosVacio);
});
server.put("/api/SeguridadModulo/update", (req, res, next) => {
    res.status(200).send(modulos.responseDatosVacio);
});
server.delete("/api/SeguridadModulo/Delete?:nCodModulo", (req, res, next) => {
    res.status(200).send(modulos.responseDatosVacio);
});

/************************* Ubigeos **************************/
server.get("/api/Get_Ubigeo_Pais/GetByPagination", (req, res, next) => {
    res.status(200).send(ubigeo.getUbigeoPais);
});
server.get("/api/Get_Ubigeo_Departamento_By_Pais/:ubigeoPais/:tipoUbigeo", (req, res, next) => {
    res.status(200).send(ubigeo.getUbigeoDepartamento);
});
server.get("/api/Get_Ubigeo_Provincia_By_Departamento/:ubigeoPais/:ubigeoDepartamento/:tipoUbigeo", (req, res, next) => {
    res.status(200).send(ubigeo.getUbigeoProvincia);
});
server.get("/api/Get_Ubigeo_Distrito_By_Provincia/:ubigeoPais/:ubigeoDepartamento/:ubigeoProvincia/:tipoUbigeo", (req, res, next) => {
    res.status(200).send(ubigeo.getUbigeoDistrito);
});

/************************* Certificaciones **************************/
server.get("/api/Acd_ProPlaCertificacion/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(certificaciones.getCertificaciones);
});
server.post("/api/Acd_ProPlaCertificacion/Insert", (req, res, next) => {
    res.status(200).send(certificaciones.responseDatosVacio);
});
server.put("/api/Acd_ProPlaCertificacion/update", (req, res, next) => {
    res.status(200).send(certificaciones.responseDatosVacio);
});

/************************* Certificacion Detalle **************************/
server.delete("/api/Acd_ProPlaCerDetalle/Delete", (req, res, next) => {
    res.status(200).send(certificaciones.responseDatosVacio);
});

/************************* Login ****************************/
server.post("/api/LoginUser/GetByUserValidation", (req, res, next) => {
    res.status(200).send(login.postLoginUser);
});

/************************* Equivalencias **************************/
server.get("/api/Acd_ProPlaEstEquivalente/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(equivalencia.getEquivalencias(req.query));
});
server.get("/api/Acd_ProPlaEstEquivalente/:nAcdProPlaEstEquiCodigo/:cPerJuridica", (req, res, next) => {
    res.status(200).send(equivalencia.getEquivalencia);
});
server.post("/api/Acd_ProPlaEstEquivalente/InsertDetetalle", (req, res, next) => {
    res.status(200).send(equivalencia.responseDatosVacio);
});
server.put("/api/Acd_ProPlaEstEquivalente/update", (req, res, next) => {
    res.status(200).send(equivalencia.responseDatosVacio);
});
server.delete("/api/Acd_ProPlaEstEquivalente/Delete*", (req, res, next) => {
    res.status(200).send(certificaciones.responseDatosVacio);
});

/************************* Matrículas **************************/
server.get("/api/AcdMatricula/GetByPagination", (req, res, next) => {
    res.status(200).send(matriculas.getMatriculas);
});
server.get("/api/AcdMatricula/GetHistorialMatriculas/:cPerCodigo/:nAcdProDefCodigo", (req, res, next) => {
    res.status(200).send(matriculas.getHistorialMatriculas);
});
server.post("/api/AcdMatricula/Insert", (req, res, next) => {
    res.status(200).send(matriculas.responseDatosVacio);
});

/************************* MatCursos **************************/
server.get("/api/AcdMatCursos/GetByPagination/:nAcdMatCodigo", (req, res, next) => {
    //está por definir
    res.status(200).send(matCursos.getMatCursos);
});
server.get("/api/AcdMatCursos/GetByPersona/:cPerJurCodigo/:nPrdCodigo", (req, res, next) => {
    res.status(200).send(matCursos.getMatCursosPersona);
});

/************************* Per Estudiante **************************/
server.get("/api/Acd_PerEstudiante/GetPerDetalle*", (req, res, next) => {
    res.status(200).send(estudiante.getDetallePerEstudiante);
});
server.get("/api/Acd_PerEstudiante/:nAcdPerEstCodigo", (req, res, next) => {
    res.status(200).send(estudiante.getPerEstudiante);
});
server.post("/api/Acd_PerEstudiante/Insert", (req, res, next) => {
    res.status(200).send(estudiante.responseDatosVacio);
});

/************************* WorkFlow **************************/
server.get("/api/WorkFlow/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(workflow.getLstWorkFlow);
});
server.post("/api/WorkFlow/Insert", (req, res, next) => {
    res.status(200).send(workflow.responseDatosVacio);
});
server.put("/api/WorkFlow/update", (req, res, next) => {
    res.status(200).send(workflow.responseDatosVacio);
});
server.delete("/api/WorkFlow/Delete?:id", (req, res, next) => {
    res.status(200).send(workflow.responseDatosVacio);
});

/************************* Archivos **************************/
server.post("/api/Archivos", (req, res, next) => {
    res.status(200).send(archivos.getArchivos);
});

/************************* Vacantes **************************/
server.get("/api/AdmGesVacantes/GetByPagination/:nPrdCodigo", (req, res, next) => {
    res.status(200).send(vacantes.getVacantes);
});
server.get("/api/AdmGesVacantes/:nAdmGesVacCodigo", (req, res, next) => {
    res.status(200).send(vacantes.getVacante);
});
server.post("/api/AdmGesVacantes/Insert", (req, res, next) => {
    res.status(200).send(vacantes.responseDatosVacio);
});
server.put("/api/AdmGesVacantes/update", (req, res, next) => {
    res.status(200).send(vacantes.responseDatosVacio);
});
server.delete("/api/AdmGesVacantes/Delete?:nAdmGesVacCodigo", (req, res, next) => {
    res.status(200).send(workflow.responseDatosVacio);
});

/************************* Plantilla Vacante **************************/
server.get("/api/SysTemplateLoad/GetByPagination/:cPerJuridica", (req, res, next) => {
    res.status(200).send(systemTemplate.getSystemTemplateLoad);
});
server.get("/api/SysTemplateLoad/SysTemplateLoadDetalle/:codigoPlantilla/:cPerJurCodigo", (req, res, next) => {
    res.status(200).send(systemTemplate.getSystemLoadDetailsExcel);
});
server.post("/api/SysTemplateLoad/Insert", (req, res, next) => {
    res.status(200).send(systemTemplate.responseDatosVacio);
});
server.put("/api/SysTemplateLoad/update", (req, res, next) => {
    res.status(200).send(systemTemplate.responseDatosVacio);
});
server.delete("/api/SysTemplateLoad/Delete?:idTemplateLoad", (req, res, next) => {
    res.status(200).send(workflow.responseDatosVacio);
});

/*********************** Huawei OBS **************************/
server.post("/api/FileOBSHuawei", (req, res, next) => {
    res.status(200).send(obsFile.response);
});

server.listen(3000, () => {
    console.log("JSON server listening on port 3000");
});
