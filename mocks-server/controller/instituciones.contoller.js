const instituciones = require("../data/institucionesAcademicas/instituciones-academicas.json");
const institucionesNombres = require("../data/institucionesAcademicas/instituciones-academicas-nombre.json");

const buscarPorCodigoModular = req => {
    let index = instituciones.findIndex(x => x.cInsAcaCodigoModular.toString() === req.cInsAcaCodigoModular);
    return responseItem(instituciones[index]);
};

const buscarPorId = req => {
    let institucion = instituciones.filter(insti => String(insti.nInstitucionAcaCodigo) === req.nInstitucionAcaCodigo);
    return responseItem(...institucion);
};

module.exports = {
    getInstituciones: response(instituciones, true),
    getInstitucionesScaleCodigoModular: buscarPorCodigoModular,
    getInstitucionByCodigoModular: buscarPorCodigoModular,
    getInstitucionById: buscarPorId,
    getInstitucionesNombres: response(institucionesNombres, true),
    responseDatosVacio: response([], true)
};

function response(datos, esValitoHttp) {
    return {
        lstItem: datos,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: esValitoHttp,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}

function responseItem(dato, esValitoHttp) {
    return {
        item: dato,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: esValitoHttp,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
