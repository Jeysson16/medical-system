const perUsuarios = require("../data/per-usuario.json");
const permisosUser = require("../data/seguridad/permisos-user.json");
const perUsuarioSearch = require("../data/per-usuario-search.json");

module.exports = {
    getPerUsuarios: response(perUsuarios, true),
    responseDatosVacio: response([]),
    getPermisos: responseItem(permisosUser, true),
    getUserSearch: response(perUsuarioSearch, true)
};

function response(datos, validoHtpp) {
    return {
        lstItem: datos,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: validoHtpp,
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
