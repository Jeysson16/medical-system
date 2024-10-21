const periodoAcademicoRegistro = require("../data/periodoAcademico/periodo-academico-registro.json");
const periodoAcademicoFases = require("../data/periodoAcademico/periodo-academico-fases.json");

const buscarFasePorID = req => {
    let obj = [];
    if (Number(req.nPrdCodigo) === 0) return response(periodoAcademicoFases, true);
    else {
        periodoAcademicoFases.map(x => {
            if (x.nPrdCodigo.toString() === req.nPrdCodigo) {
                obj.push(x);
            }
        });
        return response(obj, true);
    }
};

const periodoByID = req => {
    let item;
    item = periodoAcademicoRegistro.filter(data => data.nPrdCodigo === 16);
    return responseByID(...item, true);
};

module.exports = {
    getperiodoAcademicoRegistro: response(periodoAcademicoRegistro, true),
    getPeriodoAcademicoByID: periodoByID,
    //getperiodoAcademicoFases : response(periodoAcademicoFases,true),
    getperiodoAcademicoFases: buscarFasePorID,
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

function responseByID(dato, esValitoHttp) {
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
