const programaEstudio = require("../data/programaEstudio/programa-estudio.json");
const programaEstudioDefinicion = require("../data/programaEstudio/programa-estudio-def.json");

const buscarProgramaEstudio = req => {
    let index = programaEstudio.findIndex(x => x.nAcdProCodigo.toString() === req.nAcdProCodigo);
    return responseItem(programaEstudio[index]);
};

const buscarDeficionesPorID = req => {
    let obj = [];
    if (req.nAcdProCodigo == 0) {
        return response(programaEstudioDefinicion, true);
    }

    programaEstudioDefinicion.map(x => {
        if (x.nAcdProCodigo.toString() === req.nAcdProCodigo) {
            obj.push(x);
        }
    });
    return response(obj, true);
};

module.exports = {
    getprogramaEstudio: response(programaEstudio, true),
    getProgramaEstudioByID: buscarProgramaEstudio,
    getProgramaEstudioDef: buscarDeficionesPorID,
    responseDatosVacio: response([], true)
};

function response(dato, esValitoHttp) {
    return {
        lstItem: dato,
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
