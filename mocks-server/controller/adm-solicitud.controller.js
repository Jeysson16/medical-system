const solicitud = require("../data/admSolicitud/solicitud.json");

const buscarSolicitudxCodigo = req => {
    let obj = [];
    solicitud.map(x => {
        if (x.cPerCodigo.toString() === "1009121972" /*req.cPerCodigo*/) {
            obj.push(x);
        }
    });
    return response(obj, true);
};

module.exports = {
    getSolicitudes: buscarSolicitudxCodigo,
    getSolicitud: response(solicitud, true),
    //getPersonas : response(persona,true)
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

function responseByID(dato) {
    return {
        item: dato,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: true,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
