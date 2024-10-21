const persona = require("../data/persona.json");

const buscarPersonaxCodigo = req => {
    let obj;
    persona.map(x => {
        if (x.cPerCodigo === "1009121972") {
            obj = x;
        }
    });
    return responseByID(obj, true);
};

const findPersonaDni = req => {
    let obj;
    obj = persona.find(per => per.cPerCodigo === "1009121975");
    return responseByID(obj, true);
};

module.exports = {
    getPersonaDni: findPersonaDni,
    getPersonaCodigo: buscarPersonaxCodigo,
    responseDatosVacio: response([], true),
    getPersonas: response(persona, true)
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

function responseByID(dato, esValitoHttp) {
    return {
        item: dato,
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
