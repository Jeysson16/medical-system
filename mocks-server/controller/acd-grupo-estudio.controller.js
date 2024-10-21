const grupoEstudio = require("../data/acdGruposEstudio/acd-grupo-estudio.json");
const grupoDetalleHorario = require("../data/acdGruposEstudio/acd-grupo-detalle-horario.json");

module.exports = {
    getGrupoEstudioList: response(grupoEstudio, true),
    getGrupoDetalleHorario: response(grupoDetalleHorario, true),
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
