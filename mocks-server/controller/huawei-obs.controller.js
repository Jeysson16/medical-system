const archivo = require("../data/funciones-elementos.json");

module.exports = {
    response: response([], true)
};

function response(datos, esValitoHttp) {
    return {
        item: datos,
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
