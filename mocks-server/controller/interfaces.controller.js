const interfaces0 = require("../data/interface-0.json");

const obtenerInterfaces = req => {
    switch (req.idClase) {
        case "0":
            return response(interfaces0, true);
        case "1008":
            return response(tipoAdmision, true);
        case "8000":
            return response(nivelesInstituciones, true);
        case "9000":
            return response(ensenanzaInstituciones, true);
        case "10000":
            return response(dependenciaInstituciones, true);
        default:
            return response(interfaceDefecto, true);
    }
};

module.exports = {
    getInterfaces: obtenerInterfaces,
    responseDatosVacio: response([], true)
};

function response(datos, validoHtpp) {
    return {
        lstItem: datos,
        pagination: {
            pageIndex: 0,
            pageSize: 0,
            totalRows: 0
        },
        isSuccess: validoHtpp,
        lstError: [],
        ticket: "2f350d46-4ee8-4417-bd35-6503cfaf3324",
        clientName: "",
        userName: "",
        serverName: "",
        resultado: 2147483647
    };
}

const nivelesInstituciones = [
    {
        nIntCodigo: 8001,
        nIntClase: 8000,
        cIntJerarquia: "0101",
        cIntNombre: "A2",
        cIntDescripcion: "Inicial - Jardín",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8002,
        nIntClase: 8000,
        cIntJerarquia: "0102",
        cIntNombre: "B0",
        cIntDescripcion: "Primaria",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8003,
        nIntClase: 8000,
        cIntJerarquia: "0103",
        cIntNombre: "F0",
        cIntDescripcion: "Secundaria",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8004,
        nIntClase: 8000,
        cIntJerarquia: "0104",
        cIntNombre: "D2",
        cIntDescripcion: "Básica Alternativa - Avanzado",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8005,
        nIntClase: 8000,
        cIntJerarquia: "0105",
        cIntNombre: "E1",
        cIntDescripcion: "Básica Especial - Inicial",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8006,
        nIntClase: 8000,
        cIntJerarquia: "0106",
        cIntNombre: "K0",
        cIntDescripcion: "Superior Pedagógica",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8007,
        nIntClase: 8000,
        cIntJerarquia: "0107",
        cIntNombre: "M0",
        cIntDescripcion: "Superior Formación Artística",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8008,
        nIntClase: 8000,
        cIntJerarquia: "0108",
        cIntNombre: "T0",
        cIntDescripcion: "Superior Tecnológica",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8009,
        nIntClase: 8000,
        cIntJerarquia: "0109",
        cIntNombre: "L0",
        cIntDescripcion: "Técnico Productiva",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 8010,
        nIntClase: 8000,
        cIntJerarquia: "0110",
        cIntNombre: "U0",
        cIntDescripcion: "Superior Universitario",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T21:35:00"
    },
    {
        nIntCodigo: 11000,
        nIntClase: 8000,
        cIntJerarquia: "0111",
        cIntNombre: "E0",
        cIntDescripcion: "Básica Especial",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-31T21:35:00"
    },
    {
        nIntCodigo: 11001,
        nIntClase: 8000,
        cIntJerarquia: "0111",
        cIntNombre: "E2",
        cIntDescripcion: "Básica Especial - Primaria",
        nIntTipo: 0,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-31T21:35:00"
    }
];

const ensenanzaInstituciones = [
    {
        nIntCodigo: 9001,
        nIntClase: 9000,
        cIntJerarquia: "0101",
        cIntNombre: "S",
        cIntDescripcion: "Escolarizado",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T23:01:00"
    },
    {
        nIntCodigo: 9002,
        nIntClase: 9000,
        cIntJerarquia: "0102",
        cIntNombre: "N",
        cIntDescripcion: "No escolarizado",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-13T23:01:00"
    }
];

const dependenciaInstituciones = [
    {
        nIntCodigo: 10001,
        nIntClase: 10000,
        cIntJerarquia: "0101",
        cIntNombre: "A1",
        cIntDescripcion: "Sector Educación",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-14T15:18:00"
    },
    {
        nIntCodigo: 10002,
        nIntClase: 10000,
        cIntJerarquia: "0102",
        cIntNombre: "A4",
        cIntDescripcion: "Convenio con Sector Educación",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-14T15:18:00"
    },
    {
        nIntCodigo: 10003,
        nIntClase: 10000,
        cIntJerarquia: "0103",
        cIntNombre: "B4",
        cIntDescripcion: "Particular",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2022-10-14T15:18:00"
    }
];

const interfaceDefecto = [
    {
        nIntCodigo: 1000000891,
        nIntClase: 1002,
        cIntJerarquia: "100101",
        cIntNombre: "Configuración",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2018-06-21T15:20:23.597"
    },
    {
        nIntCodigo: 1000000892,
        nIntClase: 1002,
        cIntJerarquia: "10010101",
        cIntNombre: "Definición del Modulo",
        cIntDescripcion: "SysConModContable",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:24:02.477"
    },
    {
        nIntCodigo: 1000000893,
        nIntClase: 1002,
        cIntJerarquia: "10010102",
        cIntNombre: "Definición de Claves Contables",
        cIntDescripcion: "ConClase",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2015-12-16T00:00:00"
    },
    {
        nIntCodigo: 1000000894,
        nIntClase: 1002,
        cIntJerarquia: "10010103",
        cIntNombre: "Tipo de Cambio",
        cIntDescripcion: "Tasa",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:24:26.09"
    },
    {
        nIntCodigo: 1000006228,
        nIntClase: 1002,
        cIntJerarquia: "10010105",
        cIntNombre: "Definición de Impuestos",
        cIntDescripcion: "SysConTasImpuesto",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:31:31.93"
    },
    {
        nIntCodigo: 1000006229,
        nIntClase: 1002,
        cIntJerarquia: "10010106",
        cIntNombre: "Definición Cuentas Cierre Anual",
        cIntDescripcion: "SysConfModContProcesoCierreCuentas",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:30:55.07"
    },
    {
        nIntCodigo: 1000006231,
        nIntClase: 1002,
        cIntJerarquia: "10010107",
        cIntNombre: "Apertura y Cierre de Periodos",
        cIntDescripcion: "SysConfModConPeriodo",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:32:15.823"
    },
    {
        nIntCodigo: 1000000895,
        nIntClase: 1002,
        cIntJerarquia: "100102",
        cIntNombre: "Registros",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2014-04-05T00:00:00"
    },
    {
        nIntCodigo: 1000000896,
        nIntClase: 1002,
        cIntJerarquia: "10010201",
        cIntNombre: "Asientos Contables Manuales",
        cIntDescripcion: "ConAsiento",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:37:40.423"
    },
    {
        nIntCodigo: 1000000897,
        nIntClase: 1002,
        cIntJerarquia: "10010202",
        cIntNombre: "Aprobación de Asientos Contables",
        cIntDescripcion: "AprobacionAsiento",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2015-12-16T00:00:00"
    },
    {
        nIntCodigo: 1000006230,
        nIntClase: 1002,
        cIntJerarquia: "10010203",
        cIntNombre: "Petición de Asientos de  Submodulos",
        cIntDescripcion: "PeticionAsiento",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:26:14.96"
    },
    {
        nIntCodigo: 1000006341,
        nIntClase: 1002,
        cIntJerarquia: "10010204",
        cIntNombre: "Eliminación de Asientos Contables",
        cIntDescripcion: "EliminacionAsiento",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2016-03-16T18:40:44.003"
    },
    {
        nIntCodigo: 1000006465,
        nIntClase: 1002,
        cIntJerarquia: "10010205",
        cIntNombre: "Proceso Mensual Destino Clase 9",
        cIntDescripcion: "ProcesoCtaDestino",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:30:04.913"
    },
    {
        nIntCodigo: 1000006647,
        nIntClase: 1002,
        cIntJerarquia: "10010206",
        cIntNombre: "Proceso Cierre Contable Anual",
        cIntDescripcion: "ConAsiProcesoCierre",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:27:35.493"
    },
    {
        nIntCodigo: 1000006648,
        nIntClase: 1002,
        cIntJerarquia: "10010207",
        cIntNombre: "Actz/ Modif Asientos Contables",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:28:19.433"
    },
    {
        nIntCodigo: 1000006649,
        nIntClase: 1002,
        cIntJerarquia: "10010208",
        cIntNombre: "Proceso Automático Tipo Cambio",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:29:08.92"
    },
    {
        nIntCodigo: 1000006684,
        nIntClase: 1002,
        cIntJerarquia: "10010209",
        cIntNombre: "Importación Data de Ventas",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-05T15:00:47.483"
    },
    {
        nIntCodigo: 1000000898,
        nIntClase: 1002,
        cIntJerarquia: "100103",
        cIntNombre: "Plantillas Contables",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2014-03-18T00:00:00"
    },
    {
        nIntCodigo: 1000000899,
        nIntClase: 1002,
        cIntJerarquia: "10010301",
        cIntNombre: "Definición de Modelos de Asientos",
        cIntDescripcion: "SysModAsset",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2016-03-16T18:42:11.78"
    },
    {
        nIntCodigo: 1000000910,
        nIntClase: 1002,
        cIntJerarquia: "100104",
        cIntNombre: "Reportes",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:33:01.993"
    },
    {
        nIntCodigo: 1000000911,
        nIntClase: 1002,
        cIntJerarquia: "10010401",
        cIntNombre: "Gestión de Reportes",
        cIntDescripcion: "ConReportesContabilidad",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T12:33:21.4"
    },
    {
        nIntCodigo: 1000006233,
        nIntClase: 1002,
        cIntJerarquia: "100201",
        cIntNombre: "Configuración",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-06-12T15:54:05.3"
    },
    {
        nIntCodigo: 1000006234,
        nIntClase: 1002,
        cIntJerarquia: "10020101",
        cIntNombre: "Definición de  Modulo",
        cIntDescripcion: "#",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T13:44:07.823"
    },
    {
        nIntCodigo: 1000006237,
        nIntClase: 1002,
        cIntJerarquia: "10020102",
        cIntNombre: "Definición Grupo de Pagos",
        cIntDescripcion: "CtaPayGrupo",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2020-08-04T13:47:39.197"
    }
];

const tipoAdmision = [
    {
        nIntCodigo: 2,
        nIntClase: 1008,
        cIntJerarquia: "SOLACD",
        cIntNombre: "SOLICITUD DE TRASLADO",
        cIntDescripcion: "SOLICITUD DE TRASLADO",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2023-03-01T16:55:34.89",
        children: [],
        isRemoved: true,
        nodeLevel: 1
    },
    {
        nIntCodigo: 1,
        nIntClase: 1008,
        cIntJerarquia: "SOLADM",
        cIntNombre: "SOLICITUD DE ADMISION",
        cIntDescripcion: "SOLICITUD DE ADMISION",
        nIntTipo: 1,
        nIntEstado: 1,
        dIntFecRegistro: "2023-03-01T16:55:10.51",
        children: [],
        isRemoved: true,
        nodeLevel: 1
    }
];
