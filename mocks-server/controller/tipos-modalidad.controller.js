const tipoModalidades = require("../data/tipos-modalidades.json");

const modalidadesByEmpresa = req => {
    let arregloEmpresa = [];
    arregloEmpresa = tipoModalidades.filter(data => data.cPerJurCodigo === req.cPerJurCodigo);
    return response(arregloEmpresa, true);
};

module.exports = {
    getTipoModalidad: response(tipoModalidades, true),
    getTipoModalidadByEmpresa: modalidadesByEmpresa,
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
