const listaVistas = ["View_ProDefinicionCampus", "View_ProDefinicionGrupos", "View_ProDefinicionNiveles", "View_ProDefinicionPrograma", "View_ProDefinicionSubNiveles"];

const listaColumnas = [
    "id",
    "nombre",
    "cPerJurCodigo",
    "nAcdProDefCodigo",
    "nAcdProCodigo",
    "nAcdProDefTipConfig",
    "nAcdGruCodigo",
    "nAcdNivCodigo",
    "nAcdSubNivCodigo",
    "nAcdCampusCodigo"
];

module.exports = {
    getViews: response(listaVistas, true),
    getColumns: response(listaColumnas, true)
};

function response(dato, isValidHttp) {
    return {
        lstItem: dato,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: isValidHttp,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}
