const tiposExperienciaCurricular = require("../data/experienciaCurricular/experiencia-curricular-tipos.json");
const experienciaCurricularLista = require("../data/experienciaCurricular/experiencia-curricular-lista.json");
const experienciaCurricular = require("../data/experienciaCurricular/experiencia-curricular.json");
const arregloError = ["not_found: No existe el objeto en la base de datos: 0", "fk_ExpCurricularTipo: No existe la clave foránea nAcdExpCurTipCodigo: 0"];
module.exports = {
    getTipoExperienciaCurricular: response(true, tiposExperienciaCurricular, true, []),
    getExperienciaCurricularLista: response(true, experienciaCurricularLista, true, []),
    getExperienciaCurricular: response(false, experienciaCurricular, true, []),
    responseDatosVacio: response(true, [], true, []),
    responseError: response(true, [], false, arregloError)
};

function response(esLista, data, esValitoHttp, arrErrores) {
    let json = {};
    if (esLista)
        json = {
            lstItem: data,
            pagination: {
                pageIndex: 0,
                pageSize: 0,
                totalRows: 0
            },
            isSuccess: esValitoHttp,
            lstError: arrErrores,
            ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
            clientName: "",
            userName: "",
            serverName: "",
            resultado: 2147483647
        };
    else
        json = {
            item: data,
            pagination: {
                pageIndex: 0,
                pageSize: 0,
                totalRows: 0
            },
            isSuccess: esValitoHttp,
            lstError: arrErrores,
            ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
            clientName: "",
            userName: "",
            serverName: "",
            resultado: 2147483647
        };

    return json;
}
