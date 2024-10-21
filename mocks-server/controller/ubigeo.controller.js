const ubigeoPais = require("../data/ubigeo/pais.json");
const ubigeoDepartamento = require("../data/ubigeo/departamento.json");
const ubigeoProvincia = require("../data/ubigeo/provincia.json");
const ubigeoDistrito = require("../data/ubigeo/distrito.json");

module.exports = {
    getUbigeoPais: response(ubigeoPais, true),
    getUbigeoDepartamento: response(ubigeoDepartamento, true),
    getUbigeoProvincia: response(ubigeoProvincia, true),
    getUbigeoDistrito: response(ubigeoDistrito, true)
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
