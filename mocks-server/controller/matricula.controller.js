const matriculas = require("../data/matricula/matriculas.json");
const matriculasHistorial = require("../data/matricula/historial.json");

module.exports = {
    getMatriculas: response(matriculas, true, []),
    getHistorialMatriculas: response(matriculasHistorial, true, []),
    responseDatosVacio: response([], true, [])
};

function response(datos, validoHtpp, arrErrores) {
    return {
        lstItem: datos,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: validoHtpp,
        lstError: arrErrores,
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
