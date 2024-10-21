const listasControl = require("../data/listasControl/listas-control.json");
const listasControlDetalle = require("../data/listasControl/listas-control-detalle.json");
const arrULisCtlDetalle = [
    "not_found: No existe el objeto en la base de datos: 0",
    "dp_elementoLista: Las claves primarias nElemCtlCodigo y nLstControlCodigo ya se encuentran registradas:0",
    "fk_listaCtl: No existe la clave foránea nLstControlCodigo: 0",
    "fk_elementoCtl: No existe la clave foránea nElemCtlCodigo: 0"
];

const detalleById = req => {
    let obj = listasControlDetalle.filter(x => x.nLstControlCodigo == Number(req.nLstControlCodigo));
    return response(obj, true, []);
};

const lstControlById = req => {
    let obj = listasControl.filter(x => x.nLstControlCodigo == Number(req.nLstControlCodigo));
    return responseByID(...obj, true, []);
};

module.exports = {
    getListaControl: lstControlById,
    getListasControl: response(listasControl, true, []),
    getListasControlDetalle: detalleById,
    responseDatosVacio: response([], true, []),
    responseErrUpdDetalle: response([], false, arrULisCtlDetalle)
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

function responseByID(dato, validoHtpp, arrErrores) {
    return {
        item: dato,
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
