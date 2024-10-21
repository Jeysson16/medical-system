const gestionadm = require("../../data/sys-config-modulos/gestion-admision.json");

const getGestionAdmByID = req => {
    let gestionAdmision;
    gestionAdmision = gestionadm.find(data => data.cPerJurCodigo === req.cPerJurCodigo);
    if (!gestionAdmision) gestionAdmision = null;
    return responseByID(gestionAdmision, true);
};

module.exports = {
    getConfGestionAdmision: response(gestionadm, true),
    getConfGestionAdmisionById: getGestionAdmByID,
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
