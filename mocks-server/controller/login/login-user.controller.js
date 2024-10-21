const user = require("../../data/login/loginUser.json");

module.exports = {
    postLoginUser: responseItem(user, true)
};

function responseItem(dato, esValitoHttp) {
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
