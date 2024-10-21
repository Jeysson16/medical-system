const asiPersonaDetalle = require("../data/asi-persona-detalle.json");
const asiPersonaDetalleSol = require("../data/asi-persona-detalle-solicitud.json");

module.exports = {
    getPersonaDetalle: response(asiPersonaDetalle, true),
    getSolicitudByPersona: response(asiPersonaDetalleSol, true),
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
