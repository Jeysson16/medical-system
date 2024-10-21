const bankResponse = require("../../data/admBankQuestion/adm-bankQueResponse.json");

const filtrarPorPregunta = req => {
    let obj;
    obj = bankResponse.filter(mod => mod.nAdmBankQueCodigo.toString() === req.nAdmBankQueCodigo);
    return response(obj, true);
};

module.exports = {
    getBankResponseList: filtrarPorPregunta,
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
