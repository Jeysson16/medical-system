const preRequisitos = require("../data/pre-requisitos/pre-requisitos.json");
const preRequisitosOtrosDatos = require("../data/pre-requisitos/pre-requisitos-otros-datos.json");

module.exports = {
    getPreRequisitos: response(preRequisitos, true),
    getPreRequisitosDatosAdicionales: response(preRequisitosOtrosDatos, true),
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
