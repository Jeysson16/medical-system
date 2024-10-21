const asignacionLista = require("../data/asignacion-lista.json");

const buscarAsignacionByIdAndControl = req => {
    let obj;
    asignacionLista.map(x => {
        if (x.cPerCodigo.toString() === req.cPerCodigo && x.nLstControlCodigo.toString() == req.nLstControlCodigo) {
            obj = x;
        }
    });
    return responseByItem(obj, true);
};

module.exports = {
    getAsignacionByIdAndControl: buscarAsignacionByIdAndControl,
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

function responseByItem(dato, validoHtpp) {
    return {
        item: dato,
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
