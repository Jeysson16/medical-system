const systemplateload = require("../data/systemplateload.json");
const sysTemplateLoadDetail = require("../data/systemloaddetails.json");
const sysTemplateLoadDetailExcel = require("../data/sys-template-load-detalle-excel.json");

module.exports = {
    getSystemTemplateLoad: response(systemplateload, true),
    getSystemLoadDetails: response(sysTemplateLoadDetail, true),
    getSystemLoadDetailsExcel: response(sysTemplateLoadDetailExcel, true),
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
