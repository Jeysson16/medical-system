const gestionaca = require("../../data/sys-config-modulos/gestion-academica.json");

const getGestionAcadByID = req => {
    let gestionAcademica;
    gestionAcademica = gestionaca.find(data => data.cPerJurCodigo === req.cPerJurCodigo);
    if (!gestionAcademica) gestionAcademica = null;
    return responseByID(gestionAcademica, true);
};

module.exports = {
    getConfGestionAcademica: response(gestionaca, true),
    getConfGestionAcademicaById: getGestionAcadByID,
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
