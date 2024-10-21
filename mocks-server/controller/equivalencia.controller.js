const equivalencias = require("../data/equivalencias/plan-equivalencias.json");
const equivalenciaDetalle = require("../data/equivalencias/plan-equivalencia-detalle.json");

const equivalenciaById = param => {
    let obj = equivalencias.find(x => x.nAcdProPlaEstEquiCodigo == param.nAcdProPlaEstEquiCodigo);
    return responseByID(obj ? obj : null, true, []);
};

function filtrarEquivalencia(request) {
    const equivalenciasFiltradas = equivalencias.filter(equivalencia => equivalencia.nAcdProEstEquiTipo == request.nAcdProEstEquiTipo);
    return response(equivalenciasFiltradas, true, []);
}

module.exports = {
    getEquivalencias: filtrarEquivalencia,
    getEquivalencia: responseByID(equivalenciaDetalle, true, []),
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

function responseByID(dato, validoHtpp, arrErrores) {
    return {
        item: dato,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: validoHtpp,
        lstError: arrErrores,
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
