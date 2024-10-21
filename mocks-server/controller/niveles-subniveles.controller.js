const nivelesSubniveles = require("../data/niveles-subniveles.json");
const arregloErroresSubNiv = [
    "not_found: No existe el objeto en la base de datos: 0",
    "fk_nivel: No existe la clave foránea de nivel: 0",
    "fk_perJurCodigo: No existe el cPerJurCodigo: 0"
];
const arregloErroresNiv = ["not_found: No existe el objeto en la base de datos: 0", "fk_perJurCodigo: No existe el cPerJurCodigo: 0"];

module.exports = {
    getNivelesSubniveles: response(nivelesSubniveles, true, []),
    responseDatosVacio: response([], true, []),
    responseErrorSubNiv: response([], false, arregloErroresSubNiv),
    responseErrorNiv: response([], false, arregloErroresNiv)
};

function response(datos, esValitoHttp, arrErrores) {
    return {
        lstItem: datos,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: esValitoHttp,
        lstError: arrErrores,
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
