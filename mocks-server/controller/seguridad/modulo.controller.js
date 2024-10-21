const modulo = require("../../data/seguridad/modulo.json");
const moduloTree = require("../../data/seguridad/modulo-tree.json");

module.exports = {
    getModulosTree: response(moduloTree, true),
    getModulos: response(modulo, true),
    responseDatosVacio: response([], true)
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
