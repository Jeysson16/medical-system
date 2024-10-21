const planEstudios = require("../data/planEstudios/plan-estudios.json");
const planEstudioDetalle = require("../data/planEstudios/plan-estudio-detalle.json");
const planEstudioDetalleOtrosDatos = require("../data/planEstudios/plan-estudio-detalle-prerequisitos.json");
const sysDataObject = require("../data/planEstudios/plan-estudios-selects.json");

let responseJson = [
    {
        planEstudiosNivel1: null,
        planEstudiosNivel2: null,
        planEstudiosNivel3: null
    }
];

const planEstudiosNivelUno =
    '[{"nAcdProPlanEstCodigo":4,"cAcdProPlanEstName":"Pregrado","nAcdProPlanEstTipo":1,"nAcdProCodigo":4,"nAcdProModEstudios":1,"esPadre":true,"nProPlaEstEstado":1,"canDelete":false},{"nAcdProPlanEstCodigo":5,"cAcdProPlanEstName":"Electivo","nAcdProPlanEstTipo":1,"nAcdProCodigo":4,"nAcdProModEstudios":1,"esPadre":false,"nProPlaEstEstado":0},{"nAcdProPlanEstCodigo":6,"cAcdProPlanEstName":"No especial","nAcdProPlanEstTipo":2,"nAcdProCodigo":4,"nAcdProModEstudios":1,"esPadre":false,"nProPlaEstEstado":0,"canDelete":true}]';
const planEstudiosNivelDos =
    '[{"nAcdProPlanEstCodigo":4,"cAcdProPlanEstName":"Pregrado","nAcdProPlanEstTipo":1,"nAcdProCodigo":4,"nAcdProModEstudios":1,"ProPlaEstDetalle":[{"nPlaEstLineaCodigo":7,"nCicCodigo":1,"nAcdProPlanEstCodigo":4},{"nPlaEstLineaCodigo":9,"nCicCodigo":2,"nAcdProPlanEstCodigo":4}]}]';
const planEstudiosNivelTres =
    '[{"nAcdProPlanEstCodigo":4,"cAcdProPlanEstName":"Pregrado","nAcdProPlanEstTipo":1,"nAcdProCodigo":4,"nAcdProModEstudios":1,"ProPlaEstDetalle":[{"nPlaEstLineaCodigo":7,"nCicCodigo":1,"nAcdProPlanEstCodigo":4,"ExpCurricular":{"nAcdExpCurCodigo":9,"cAcdExpDescripcion":"Desarrollo ","cAcdExpNomCorto":"Des","nAcdExpCurTipCodigo":10,"nAcdExpEstado":0}}]}]';
const planEstudioDetalleCurso = [
    { nombre: "Introducción Ing Sistemas", ciclo: 1, nAcdExpCurCodigo: 6 },
    { nombre: "Comunicación Básica", ciclo: 1, nAcdExpCurCodigo: 7 },
    { nombre: "Introducción a la Programación", ciclo: 2, nAcdExpCurCodigo: 8 }
];

const responseNivel = nivel => {
    switch (Number(nivel)) {
        case 1:
            responseJson[0].planEstudiosNivel1 = planEstudiosNivelUno;
            responseJson[0].planEstudiosNivel2 = null;
            responseJson[0].planEstudiosNivel3 = null;
            return response(responseJson, true);
        case 2:
            responseJson[0].planEstudiosNivel1 = null;
            responseJson[0].planEstudiosNivel2 = planEstudiosNivelDos;
            responseJson[0].planEstudiosNivel3 = null;
            return response(responseJson, true);
        case 3:
            responseJson[0].planEstudiosNivel1 = null;
            responseJson[0].planEstudiosNivel2 = null;
            responseJson[0].planEstudiosNivel3 = planEstudiosNivelTres;
            return response(responseJson, true);
    }
};

module.exports = {
    getPlanEstudios: response(planEstudios, true),
    getPlanEstudiosNiveles: responseNivel,
    getPlanEstudioDetalle: response(planEstudioDetalle, true),
    getPlanEstudioDetalleOtrosDatos: response(planEstudioDetalleOtrosDatos, true),
    getSysDataObject: response(sysDataObject, true),
    responseDatosVacio: response([], true)
};

function response(dato, isValidHttp) {
    return {
        lstItem: dato,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: isValidHttp,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
