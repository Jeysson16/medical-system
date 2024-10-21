const modalidades = require("../data/modalidades.json");

const filtrarPorTipoModalidad = req => {
    let obj = [];
    obj = modalidades.filter(mod => mod.nAcdTipoCodigo == req.nAcdTipoCodigo && mod.cPerJurCodigo == req.cPerJurCodigo);
    return response(obj, true);
};

module.exports = {
    getModalidades: response(modalidades, true),
    responseDatosVacio: response([], true),
    getModalidadesById: filtrarPorTipoModalidad
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
