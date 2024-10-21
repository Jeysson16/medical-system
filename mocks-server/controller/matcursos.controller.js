const matriculas = require("../data/matricula/matriculas-curso.json");

module.exports = {
    getMatCursos: response([], true, []),
    getMatCursosPersona: response(matriculas, true, [])
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
