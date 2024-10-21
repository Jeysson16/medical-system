const configuracionesSistema = require("../data/configuraciones/configuraciones.json");
const sysObjectLista = require("../data/configuraciones/sys-object.json");
const sysColumnas = require("../data/configuraciones/sys-columns.json");

module.exports = {
    getConfiguraciones: response(configuracionesSistema, true),
    getSysObject: response(sysObjectLista, true),
    getSysColumns: response(sysColumnas, true),
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
