const tiposListasControl = require("../data/tipos-listas-control.json");

const obtenerConstantes = req => {
    switch (req.nConCodigo) {
        case "999":
            return response(tipoDeEmail, true);
        case "1002":
            return response(tipoDeGenero, true);
        case "1003":
            return response(tipoTelefono, true);
        case "1006":
            return response(tipoParentesco, true);
        case "1009":
            return response(ocupaciones, true);
        case "1011":
            return response(estadoCivil, true);
        case "1012":
            return response(tipoDocJuridico, true);
        case "1013":
            return response(tipoDeDocumento, true);
        case "1014":
            return response(tipoResidencia, true);
        case "1017":
            return response(horarioCincuentaMin, true);
        case "1023":
            return response(tipoInstitucion, true);
        case "1024":
            return response(tipoRubroEmpresa, true);
        case "1037":
            return response(tratadoPersona, true);
        case "1081":
            return response(tiposDocente, true);
        case "1093":
            return response(secciones, true);
        case "1095":
            return response(idiomas, true);
        case "1111":
            return response(habilidadIdioma, true);
        case "1174":
            return response(condicionContribuyente, true);
        case "1450":
            return response(estadoContribuyente, true);
        case "1451":
            return response(estadoActividad, true);
        case "1560":
            return response(nivelIdioma, true);
        case "1799":
            return response(situacionLaboral, true);
        case "1083":
            return response(tipoHora, true);
        case "1090":
            return response(horarioCondiciones, true);
        case "1993":
            return response(horarioSesentaMin, true);
        case "2500":
            return response(tipoNavegacion, true);
        case "2501":
            return response(iconoNavegacion, true);
        case "3800":
            return response(TipoBancoHead, true);
        case "3801":
            return response(TipoBankRespuesta, true);
        case "4005":
            return response(tipoDireccion, true);
        case "4006":
            return response(zonaDireccion, true);
        case "4007":
            return response(tipoDptoPiso, true);
        case "4008":
            return response(etapaSector, true);
        case "4014":
            return response(motivoDeBaja, true);
        case "4500":
            return response(respuestaBooleana, true);
        case "8100":
            return response(tipoUsoEstructura, true);
        case "8101":
            return response(tipoAmbiente, true);
        case "11000":
            return response(tipoWorkFlow, true);
        case "11001":
            return response(aprobacionWorkFlow, true);
        case "400000":
            return response(modalidadEstudios, true);
        case "500000":
            return response(tipoMatriculas, true);
        case "500001":
            return response(tiposInstituciones, true);
        case "500002":
            return response(generosInstituciones, true);
        case "500003":
            return response(tiposCurricula, true);
        case "500004":
            return response(tiposLineaPlanEstudio, true);
        case "500005":
            return response(periodoAcademico, true);
        case "500006":
            return response(programaEstudioCons, true);
        case "500007":
            return response(solicitudCons, true);
        case "500008":
            return response(asiPerDetalleCons, true);
        case "500009":
            return response(solDetalleAcc, true);
        case "500010":
            return response(solDetalleAccMotivo, true);
        case "500011":
            return response(solDetalleEstados, true);
        case "500012":
            return response(tipoEquivalencias, true);
        case "850011":
            return response(tiposListasControl, true);
        case "950011":
            return response(tiposModalidad, true);
    }
};

module.exports = {
    getConstantes: obtenerConstantes,
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

const tiposInstituciones = [
    {
        nConCodigo: 500001,
        nConValor: 0,
        cConDescripcion: "Tipos de Instituciones Académicas"
    },
    {
        nConCodigo: 500001,
        nConValor: 1,
        cConDescripcion: "Pública de gestión directa"
    },
    {
        nConCodigo: 500001,
        nConValor: 2,
        cConDescripcion: "Pública de gestión privada"
    },
    {
        nConCodigo: 500001,
        nConValor: 3,
        cConDescripcion: "Privada"
    }
];

const generosInstituciones = [
    {
        nConCodigo: 500002,
        nConValor: 0,
        cConDescripcion: "Niveles de Instituciones Académicas"
    },
    {
        nConCodigo: 500002,
        nConValor: 1,
        cConDescripcion: "Varones"
    },
    {
        nConCodigo: 500002,
        nConValor: 2,
        cConDescripcion: "Mujeres"
    },
    {
        nConCodigo: 500002,
        nConValor: 3,
        cConDescripcion: "Mixto"
    }
];

const tiposCurricula = [
    {
        nConCodigo: 500003,
        nConValor: 0,
        cConDescripcion: "Tipo de Currícula"
    },
    {
        nConCodigo: 500003,
        nConValor: 1,
        cConDescripcion: "Regular"
    },
    {
        nConCodigo: 500003,
        nConValor: 2,
        cConDescripcion: "Especial"
    }
];

const modalidadEstudios = [
    {
        nConCodigo: 400000,
        nConValor: 0,
        cConDescripcion: "Modalidad de Estudios"
    },
    {
        nConCodigo: 400000,
        nConValor: 1,
        cConDescripcion: "Presencial"
    },
    {
        nConCodigo: 400000,
        nConValor: 2,
        cConDescripcion: "Semipresencial"
    },
    {
        nConCodigo: 400000,
        nConValor: 3,
        cConDescripcion: "A Distancia"
    }
];

const tiposLineaPlanEstudio = [
    {
        nConCodigo: 500004,
        nConValor: 0,
        cConDescripcion: "Tipos de línea de plan de estudio"
    },
    {
        nConCodigo: 500004,
        nConValor: 1,
        cConDescripcion: "Obligatorio"
    },
    {
        nConCodigo: 500004,
        nConValor: 2,
        cConDescripcion: "Electivo"
    },
    {
        nConCodigo: 500004,
        nConValor: 3,
        cConDescripcion: "Opcional"
    }
];

const periodoAcademico = [
    {
        nConCodigo: 500005,
        nConValor: 0,
        cConDescripcion: "Tipos de Frencuencia"
    },
    {
        nConCodigo: 500005,
        nConValor: 1,
        cConDescripcion: "Trimestre"
    },
    {
        nConCodigo: 500005,
        nConValor: 2,
        cConDescripcion: "Cuatrimestre"
    },
    {
        nConCodigo: 500005,
        nConValor: 3,
        cConDescripcion: "Anual"
    },
    {
        nConCodigo: 500005,
        nConValor: 4,
        cConDescripcion: "Semestre"
    }
];

const programaEstudioCons = [
    {
        nConCodigo: 500006,
        nConValor: 0,
        cConDescripcion: "Modo de Calificación"
    },
    {
        nConCodigo: 500006,
        nConValor: 1,
        cConDescripcion: "Vigesimal"
    },
    {
        nConCodigo: 500006,
        nConValor: 2,
        cConDescripcion: "Centesimal"
    },
    {
        nConCodigo: 500006,
        nConValor: 3,
        cConDescripcion: "Alfabético"
    },
    {
        nConCodigo: 500006,
        nConValor: 4,
        cConDescripcion: "Alfanumérico"
    }
];

const tiposModalidad = [
    {
        nConCodigo: 950011,
        nConValor: 0,
        cConDescripcion: "Tipo de modalidad"
    },
    {
        nConCodigo: 950011,
        nConValor: 1,
        cConDescripcion: "Académica"
    },
    {
        nConCodigo: 950011,
        nConValor: 2,
        cConDescripcion: "Estudios"
    },
    {
        nConCodigo: 950011,
        nConValor: 3,
        cConDescripcion: "Admisión"
    },
    {
        nConCodigo: 950011,
        nConValor: 4,
        cConDescripcion: "Traslado"
    },
    {
        nConCodigo: 950011,
        nConValor: 5,
        cConDescripcion: "Egreso"
    }
];

const solicitudCons = [
    {
        nConCodigo: 500007,
        nConValor: 0,
        cConDescripcion: "Tipo de solicitud"
    },
    {
        nConCodigo: 500007,
        nConValor: 1,
        cConDescripcion: "Admision"
    },
    {
        nConCodigo: 500007,
        nConValor: 2,
        cConDescripcion: "Movimiento Académico"
    }
];

const asiPerDetalleCons = [
    {
        nConCodigo: 500008,
        nConValor: 0,
        cConDescripcion: "Estado de documentos para revisión"
    },
    {
        nConCodigo: 500008,
        nConValor: 1,
        cConDescripcion: "Pendiente"
    },
    {
        nConCodigo: 500008,
        nConValor: 2,
        cConDescripcion: "Aprobado"
    },
    {
        nConCodigo: 500008,
        nConValor: 3,
        cConDescripcion: "Rechazado"
    }
];

const solDetalleAcc = [
    {
        nConCodigo: 500009,
        nConValor: 0,
        cConDescripcion: "Accion detalle solicitud"
    },
    {
        nConCodigo: 500009,
        nConValor: 1,
        cConDescripcion: "Registro de solicitud"
    },
    {
        nConCodigo: 500009,
        nConValor: 2,
        cConDescripcion: "Cambio de Cursos"
    }
];

const solDetalleAccMotivo = [
    {
        nConCodigo: 500010,
        nConValor: 0,
        cConDescripcion: "Motivo de la Accion detalle solicitud"
    },
    {
        nConCodigo: 500010,
        nConValor: 1,
        cConDescripcion: "Postulación"
    },
    {
        nConCodigo: 500010,
        nConValor: 2,
        cConDescripcion: "Traslado"
    }
];

const solDetalleEstados = [
    {
        nConCodigo: 500011,
        nConValor: 0,
        cConDescripcion: "Estados - Detalle Solicitud"
    },
    {
        nConCodigo: 500011,
        nConValor: 1,
        cConDescripcion: "Solicitante"
    },
    {
        nConCodigo: 500011,
        nConValor: 2,
        cConDescripcion: "Postulante"
    },
    {
        nConCodigo: 500011,
        nConValor: 3,
        cConDescripcion: "Ingresante"
    },
    {
        nConCodigo: 500011,
        nConValor: 4,
        cConDescripcion: "Matriculado"
    }
];

const tipoDeDocumento = [
    {
        nConCodigo: 1013,
        nConValor: 0,
        cConDescripcion: "TIPO DOCUMENTO NATURAL"
    },
    {
        nConCodigo: 1013,
        nConValor: 19,
        cConDescripcion: "CARNÉ DE IDENTIDAD -RREE"
    },
    {
        nConCodigo: 1013,
        nConValor: 20,
        cConDescripcion: "CARNÉ DE PERM.TEMP.PERMANENCIA"
    },
    {
        nConCodigo: 1013,
        nConValor: 21,
        cConDescripcion: "DOC. DE IDENTIDAD EXTRANJERO"
    },
    {
        nConCodigo: 1013,
        nConValor: 22,
        cConDescripcion: "CARNET DE EXTR."
    },
    {
        nConCodigo: 1013,
        nConValor: 23,
        cConDescripcion: "CARNET FFAA"
    },
    {
        nConCodigo: 1013,
        nConValor: 24,
        cConDescripcion: "CARNET FFPP"
    },
    {
        nConCodigo: 1013,
        nConValor: 25,
        cConDescripcion: "D.N.I."
    },
    {
        nConCodigo: 1013,
        nConValor: 26,
        cConDescripcion: "LIBRETA MILITAR"
    },
    {
        nConCodigo: 1013,
        nConValor: 27,
        cConDescripcion: "CARNÉ SOLIC REFUGIO"
    },
    {
        nConCodigo: 1013,
        nConValor: 28,
        cConDescripcion: "PASAPORTE"
    },
    {
        nConCodigo: 1013,
        nConValor: 29,
        cConDescripcion: "CARNET  DE COLEGIADO"
    }
];

const tipoDeEmail = [
    {
        nConCodigo: 999,
        nConValor: 0,
        cConDescripcion: "TIPO EMAIL"
    },
    {
        nConCodigo: 999,
        nConValor: 1,
        cConDescripcion: "PERSONAL"
    },
    {
        nConCodigo: 999,
        nConValor: 2,
        cConDescripcion: "COORPORATIVO"
    },
    {
        nConCodigo: 999,
        nConValor: 3,
        cConDescripcion: "RECLAMO"
    },
    {
        nConCodigo: 999,
        nConValor: 4,
        cConDescripcion: "NOTIFICACIONES"
    }
];

const tipoTelefono = [
    {
        nConCodigo: 1003,
        nConValor: 0,
        cConDescripcion: "TIPO TELEFONO"
    },
    {
        nConCodigo: 1003,
        nConValor: 1,
        cConDescripcion: "Teléfono Fijo"
    },
    {
        nConCodigo: 1003,
        nConValor: 2,
        cConDescripcion: "Teléfono Celular"
    },
    {
        nConCodigo: 1003,
        nConValor: 3,
        cConDescripcion: "Teléfono Fijo Oficina"
    },
    {
        nConCodigo: 1003,
        nConValor: 4,
        cConDescripcion: "Anexo Oficina"
    }
];

const estadoCivil = [
    {
        nConCodigo: 1011,
        nConValor: 0,
        cConDescripcion: "ESTADO CIVIL"
    },
    {
        nConCodigo: 1011,
        nConValor: 1,
        cConDescripcion: "Soltero"
    },
    {
        nConCodigo: 1011,
        nConValor: 2,
        cConDescripcion: "Casado"
    },
    {
        nConCodigo: 1011,
        nConValor: 3,
        cConDescripcion: "Viudo"
    },
    {
        nConCodigo: 1011,
        nConValor: 4,
        cConDescripcion: "Divorciado"
    },
    {
        nConCodigo: 1011,
        nConValor: 5,
        cConDescripcion: "Conviviente"
    }
];

const tipoDeGenero = [
    {
        nConCodigo: 1002,
        nConValor: 0,
        cConDescripcion: "SEXO"
    },
    {
        nConCodigo: 1002,
        nConValor: 1,
        cConDescripcion: "Masculino"
    },
    {
        nConCodigo: 1002,
        nConValor: 2,
        cConDescripcion: "Femenino"
    },
    {
        nConCodigo: 1002,
        nConValor: 3,
        cConDescripcion: "Indefinido"
    }
];

const tipoResidencia = [
    {
        nConCodigo: 1014,
        nConValor: 0,
        cConDescripcion: "TIPO RESIDENCIA"
    },
    {
        nConCodigo: 1014,
        nConValor: 1,
        cConDescripcion: "PROPIA"
    },
    {
        nConCodigo: 1014,
        nConValor: 2,
        cConDescripcion: "ALQUILER"
    },
    {
        nConCodigo: 1014,
        nConValor: 3,
        cConDescripcion: "NO ESPECIFICA"
    },
    {
        nConCodigo: 1014,
        nConValor: 11,
        cConDescripcion: "Propia de la persona"
    },
    {
        nConCodigo: 1014,
        nConValor: 12,
        cConDescripcion: "Propia de los padres"
    },
    {
        nConCodigo: 1014,
        nConValor: 21,
        cConDescripcion: "Alquiler - pension"
    },
    {
        nConCodigo: 1014,
        nConValor: 22,
        cConDescripcion: "Alquiler - casa"
    },
    {
        nConCodigo: 1014,
        nConValor: 23,
        cConDescripcion: "Alquiler - departamento"
    }
];

const situacionLaboral = [
    {
        nConCodigo: 1799,
        nConValor: 0,
        cConDescripcion: "situacion laboral"
    },
    {
        nConCodigo: 1799,
        nConValor: 1,
        cConDescripcion: "T. P. dependiente"
    },
    {
        nConCodigo: 1799,
        nConValor: 2,
        cConDescripcion: "T. P. independiente"
    },
    {
        nConCodigo: 1799,
        nConValor: 3,
        cConDescripcion: "Solo cesante o jubilado"
    },
    {
        nConCodigo: 1799,
        nConValor: 4,
        cConDescripcion: "Desempleado/sin actividad laboral"
    },
    {
        nConCodigo: 1799,
        nConValor: 5,
        cConDescripcion: "T. P. dependiente o independiente"
    },
    {
        nConCodigo: 1799,
        nConValor: 6,
        cConDescripcion: "Trabajo profesional dependiente o independiente y cesante o jubilado"
    },
    {
        nConCodigo: 1799,
        nConValor: 7,
        cConDescripcion: "Trabajo no profesional estable"
    },
    {
        nConCodigo: 1799,
        nConValor: 8,
        cConDescripcion: "Trabajo no profesional contratado"
    },
    {
        nConCodigo: 1799,
        nConValor: 9,
        cConDescripcion: "Trabajo no profesional estable o contratado y cesante o jubilado"
    },
    {
        nConCodigo: 1799,
        nConValor: 10,
        cConDescripcion: "Trabajo tecnico o artesanal estable"
    },
    {
        nConCodigo: 1799,
        nConValor: 11,
        cConDescripcion: "Trabajo tecnico o artesanal eventual"
    },
    {
        nConCodigo: 1799,
        nConValor: 12,
        cConDescripcion: "Trabajo tecnico o artesanal estable o eventual y cesante o jubilado"
    },
    {
        nConCodigo: 1799,
        nConValor: 9999,
        cConDescripcion: "Otro (sin especificar)"
    }
];

const ocupaciones = [
    {
        nConCodigo: 1009,
        nConValor: 0,
        cConDescripcion: "OCUPACIONES"
    },
    {
        nConCodigo: 1009,
        nConValor: 1,
        cConDescripcion: "OTRO"
    },
    {
        nConCodigo: 1009,
        nConValor: 1000,
        cConDescripcion: "INGENIERO"
    },
    {
        nConCodigo: 1009,
        nConValor: 2000,
        cConDescripcion: "AGRICULTOR"
    },
    {
        nConCodigo: 1009,
        nConValor: 3000,
        cConDescripcion: "OBRERO"
    },
    {
        nConCodigo: 1009,
        nConValor: 4000,
        cConDescripcion: "ABOGADO"
    },
    {
        nConCodigo: 1009,
        nConValor: 9999,
        cConDescripcion: "SIN ESPECIFICAR"
    }
];

const tratadoPersona = [
    {
        nConCodigo: 1037,
        nConValor: 0,
        cConDescripcion: "TRATAMIENTO PERSONA"
    },
    {
        nConCodigo: 1037,
        nConValor: 1,
        cConDescripcion: "SR."
    },
    {
        nConCodigo: 1037,
        nConValor: 2,
        cConDescripcion: "SRTA."
    },
    {
        nConCodigo: 1037,
        nConValor: 3,
        cConDescripcion: "JV."
    },
    {
        nConCodigo: 1037,
        nConValor: 4,
        cConDescripcion: "DOC."
    },
    {
        nConCodigo: 1037,
        nConValor: 5,
        cConDescripcion: "C,P,C."
    },
    {
        nConCodigo: 1037,
        nConValor: 6,
        cConDescripcion: " ING."
    }
];

const idiomas = [
    {
        nConCodigo: 1095,
        nConValor: 0,
        cConDescripcion: "LENGUA MATERNA"
    },
    {
        nConCodigo: 1095,
        nConValor: 1,
        cConDescripcion: "Aymara"
    },
    {
        nConCodigo: 1095,
        nConValor: 2,
        cConDescripcion: "Ninguno"
    },
    {
        nConCodigo: 1095,
        nConValor: 3,
        cConDescripcion: "Quechua"
    },
    {
        nConCodigo: 1095,
        nConValor: 4,
        cConDescripcion: "Aymara"
    },
    {
        nConCodigo: 1095,
        nConValor: 5,
        cConDescripcion: "Ashaninka"
    },
    {
        nConCodigo: 1095,
        nConValor: 6,
        cConDescripcion: "Aguaruna"
    },
    {
        nConCodigo: 1095,
        nConValor: 7,
        cConDescripcion: "Shipiba"
    },
    {
        nConCodigo: 1095,
        nConValor: 8,
        cConDescripcion: "Huitoto"
    },
    {
        nConCodigo: 1095,
        nConValor: 9,
        cConDescripcion: "Cocama - cocamilla"
    },
    {
        nConCodigo: 1095,
        nConValor: 10,
        cConDescripcion: "Machiguenga"
    },
    {
        nConCodigo: 1095,
        nConValor: 11,
        cConDescripcion: "Piro"
    },
    {
        nConCodigo: 1095,
        nConValor: 12,
        cConDescripcion: "Cashanihua"
    },
    {
        nConCodigo: 1095,
        nConValor: 13,
        cConDescripcion: "Cacataibo"
    },
    {
        nConCodigo: 1095,
        nConValor: 14,
        cConDescripcion: "Yaminahua"
    },
    {
        nConCodigo: 1095,
        nConValor: 15,
        cConDescripcion: "Culina"
    },
    {
        nConCodigo: 1095,
        nConValor: 16,
        cConDescripcion: "Sharanahua"
    },
    {
        nConCodigo: 1095,
        nConValor: 17,
        cConDescripcion: "Matsanaua"
    },
    {
        nConCodigo: 1095,
        nConValor: 18,
        cConDescripcion: "Anahuaca"
    },
    {
        nConCodigo: 1095,
        nConValor: 19,
        cConDescripcion: "Huambisa"
    },
    {
        nConCodigo: 1095,
        nConValor: 20,
        cConDescripcion: "Achuar"
    },
    {
        nConCodigo: 1095,
        nConValor: 21,
        cConDescripcion: "Bora"
    },
    {
        nConCodigo: 1095,
        nConValor: 22,
        cConDescripcion: "JAPONES"
    },
    {
        nConCodigo: 1095,
        nConValor: 23,
        cConDescripcion: "CHINO"
    },
    {
        nConCodigo: 1095,
        nConValor: 33,
        cConDescripcion: "ALEMAN"
    },
    {
        nConCodigo: 1095,
        nConValor: 90,
        cConDescripcion: "Ingles"
    },
    {
        nConCodigo: 1095,
        nConValor: 91,
        cConDescripcion: "Frances"
    },
    {
        nConCodigo: 1095,
        nConValor: 92,
        cConDescripcion: "Italianao"
    },
    {
        nConCodigo: 1095,
        nConValor: 93,
        cConDescripcion: "Otro extranjero"
    }
];

const habilidadIdioma = [
    {
        nConCodigo: 1111,
        nConValor: 0,
        cConDescripcion: "NIVEL DE HABILIDAD"
    },
    {
        nConCodigo: 1111,
        nConValor: 1,
        cConDescripcion: "NADA"
    },
    {
        nConCodigo: 1111,
        nConValor: 2,
        cConDescripcion: "BASICO"
    },
    {
        nConCodigo: 1111,
        nConValor: 3,
        cConDescripcion: "INTERMEDIO"
    },
    {
        nConCodigo: 1111,
        nConValor: 4,
        cConDescripcion: "AVANZADO"
    }
];

const nivelIdioma = [
    {
        nConCodigo: 1560,
        nConValor: 0,
        cConDescripcion: "NIVEL DE IDIOMA"
    },
    {
        nConCodigo: 1560,
        nConValor: 1,
        cConDescripcion: "A1"
    },
    {
        nConCodigo: 1560,
        nConValor: 2,
        cConDescripcion: "A2"
    },
    {
        nConCodigo: 1560,
        nConValor: 3,
        cConDescripcion: "B1"
    },
    {
        nConCodigo: 1560,
        nConValor: 4,
        cConDescripcion: "B2"
    },
    {
        nConCodigo: 1560,
        nConValor: 3,
        cConDescripcion: "C1"
    },
    {
        nConCodigo: 1560,
        nConValor: 4,
        cConDescripcion: "C2"
    }
];

const tipoDireccion = [
    {
        nConCodigo: 4005,
        nConValor: 0,
        cConDescripcion: 'TABLA D: "VÍA"'
    },
    {
        nConCodigo: 4005,
        nConValor: 1,
        cConDescripcion: "Av. Avenida"
    },
    {
        nConCodigo: 4005,
        nConValor: 2,
        cConDescripcion: "Jr. Jiron"
    },
    {
        nConCodigo: 4005,
        nConValor: 3,
        cConDescripcion: "Cal. Calle"
    },
    {
        nConCodigo: 4005,
        nConValor: 4,
        cConDescripcion: "Pje. Pasaje"
    },
    {
        nConCodigo: 4005,
        nConValor: 5,
        cConDescripcion: "Alm. Alameda"
    },
    {
        nConCodigo: 4005,
        nConValor: 6,
        cConDescripcion: "Mlc. Malecón"
    },
    {
        nConCodigo: 4005,
        nConValor: 7,
        cConDescripcion: "Ovl. Ovalo"
    },
    {
        nConCodigo: 4005,
        nConValor: 8,
        cConDescripcion: "Pqe. Parque"
    },
    {
        nConCodigo: 4005,
        nConValor: 9,
        cConDescripcion: "Pza. Plaza"
    },
    {
        nConCodigo: 4005,
        nConValor: 10,
        cConDescripcion: "Car. Carretera"
    },
    {
        nConCodigo: 4005,
        nConValor: 13,
        cConDescripcion: "Tr. Trocha"
    },
    {
        nConCodigo: 4005,
        nConValor: 14,
        cConDescripcion: "Cru. Camino Rural"
    },
    {
        nConCodigo: 4005,
        nConValor: 15,
        cConDescripcion: "Ba. Bajada"
    },
    {
        nConCodigo: 4005,
        nConValor: 16,
        cConDescripcion: "Ga. Galeria"
    },
    {
        nConCodigo: 4005,
        nConValor: 17,
        cConDescripcion: "Prol. Prolongacion"
    },
    {
        nConCodigo: 4005,
        nConValor: 18,
        cConDescripcion: "Pa. Paseo"
    },
    {
        nConCodigo: 4005,
        nConValor: 19,
        cConDescripcion: "Pz Plazuela"
    },
    {
        nConCodigo: 4005,
        nConValor: 20,
        cConDescripcion: "Portal"
    },
    {
        nConCodigo: 4005,
        nConValor: 21,
        cConDescripcion: "Camino afirmado"
    },
    {
        nConCodigo: 4005,
        nConValor: 22,
        cConDescripcion: "Trocha Carrozable"
    },
    {
        nConCodigo: 4005,
        nConValor: 23,
        cConDescripcion: "OTROS"
    }
];

const zonaDireccion = [
    {
        nConCodigo: 4006,
        nConValor: 0,
        cConDescripcion: 'TABLA E: "ZONA"'
    },
    {
        nConCodigo: 4006,
        nConValor: 1,
        cConDescripcion: "Urb. Urbanización"
    },
    {
        nConCodigo: 4006,
        nConValor: 2,
        cConDescripcion: "P.J. Pueblo Joven"
    },
    {
        nConCodigo: 4006,
        nConValor: 3,
        cConDescripcion: "U.V. Unidad Vecinal"
    },
    {
        nConCodigo: 4006,
        nConValor: 4,
        cConDescripcion: "C.H. Conjunto Habitacional"
    },
    {
        nConCodigo: 4006,
        nConValor: 5,
        cConDescripcion: "A.H. Asentamiento Humano"
    },
    {
        nConCodigo: 4006,
        nConValor: 6,
        cConDescripcion: "Coo. Cooperativa"
    },
    {
        nConCodigo: 4006,
        nConValor: 7,
        cConDescripcion: "Res. Residencial"
    },
    {
        nConCodigo: 4006,
        nConValor: 8,
        cConDescripcion: "Z.I. Zona Industrial"
    },
    {
        nConCodigo: 4006,
        nConValor: 9,
        cConDescripcion: "Gru. Grupo"
    },
    {
        nConCodigo: 4006,
        nConValor: 10,
        cConDescripcion: "Cas. Caserio"
    },
    {
        nConCodigo: 4006,
        nConValor: 11,
        cConDescripcion: "Fnd. Fundo"
    },
    {
        nConCodigo: 4006,
        nConValor: 12,
        cConDescripcion: "OTROS"
    }
];

const tipoDptoPiso = [
    {
        nConCodigo: 4007,
        nConValor: 0,
        cConDescripcion: "Tipo Dpto Piso"
    },
    {
        nConCodigo: 4007,
        nConValor: 1,
        cConDescripcion: "Ninguno"
    },
    {
        nConCodigo: 4007,
        nConValor: 2,
        cConDescripcion: "Departamento"
    },
    {
        nConCodigo: 4007,
        nConValor: 3,
        cConDescripcion: "Interior"
    }
];

const etapaSector = [
    {
        nConCodigo: 4008,
        nConValor: 0,
        cConDescripcion: "Etapa / Sector"
    },
    {
        nConCodigo: 4008,
        nConValor: 1,
        cConDescripcion: "Ninguno"
    },
    {
        nConCodigo: 4008,
        nConValor: 2,
        cConDescripcion: "Etapa"
    },
    {
        nConCodigo: 4008,
        nConValor: 3,
        cConDescripcion: "Sector"
    },
    {
        nConCodigo: 4008,
        nConValor: 4,
        cConDescripcion: "Zona"
    }
];

const tipoDocJuridico = [
    {
        nConCodigo: 1012,
        nConValor: 0,
        cConDescripcion: "TIPO DOCUMENTO JURIDICO"
    },
    {
        nConCodigo: 1012,
        nConValor: 11,
        cConDescripcion: "RUC - Registro unico del contribuyente"
    },
    {
        nConCodigo: 1012,
        nConValor: 12,
        cConDescripcion: "RUS - Registro unico simplificado"
    },
    {
        nConCodigo: 1012,
        nConValor: 13,
        cConDescripcion: "RUT - Registro Unico Tributario"
    },
    {
        nConCodigo: 1012,
        nConValor: 40,
        cConDescripcion: "Código AFP SisIntegra"
    },
    {
        nConCodigo: 1012,
        nConValor: 99,
        cConDescripcion: "OTROS (Ejm: CIF)"
    },
    {
        nConCodigo: 1012,
        nConValor: 2000,
        cConDescripcion: "CODIGO ANR"
    },
    {
        nConCodigo: 1012,
        nConValor: 6000,
        cConDescripcion: "CIIU"
    }
];

const tipoInstitucion = [
    {
        nConCodigo: 1023,
        nConValor: 0,
        cConDescripcion: "TIPO INSTITUCIÓN"
    },
    {
        nConCodigo: 1023,
        nConValor: 1,
        cConDescripcion: "RELIGIOSA"
    },
    {
        nConCodigo: 1023,
        nConValor: 2,
        cConDescripcion: "PUBLICA"
    },
    {
        nConCodigo: 1023,
        nConValor: 3,
        cConDescripcion: "PRIVADA"
    },
    {
        nConCodigo: 1023,
        nConValor: 4,
        cConDescripcion: "OTROS"
    },
    {
        nConCodigo: 1023,
        nConValor: 5,
        cConDescripcion: "UNIVERSIDADES"
    },
    {
        nConCodigo: 1023,
        nConValor: 6,
        cConDescripcion: "INSTITUCIONES FINANCIERAS"
    }
];

const tipoRubroEmpresa = [
    {
        nConCodigo: 1024,
        nConValor: 0,
        cConDescripcion: "TIPO RUBRO EMPRESA"
    },
    {
        nConCodigo: 1024,
        nConValor: 1,
        cConDescripcion: "Educacion escolar"
    },
    {
        nConCodigo: 1024,
        nConValor: 2,
        cConDescripcion: "Informatica"
    },
    {
        nConCodigo: 1024,
        nConValor: 3,
        cConDescripcion: "Comunicación"
    },
    {
        nConCodigo: 1024,
        nConValor: 4,
        cConDescripcion: "Cancelario - oficina"
    },
    {
        nConCodigo: 1024,
        nConValor: 5,
        cConDescripcion: "Editorial"
    },
    {
        nConCodigo: 1024,
        nConValor: 6,
        cConDescripcion: "Librería"
    },
    {
        nConCodigo: 1024,
        nConValor: 7,
        cConDescripcion: "Educación superior técnica"
    },
    {
        nConCodigo: 1024,
        nConValor: 8,
        cConDescripcion: "Educación superior pregrado"
    },
    {
        nConCodigo: 1024,
        nConValor: 9,
        cConDescripcion: "Educación superior postgrado"
    },
    {
        nConCodigo: 1024,
        nConValor: 10,
        cConDescripcion: "AFP"
    },
    {
        nConCodigo: 1024,
        nConValor: 11,
        cConDescripcion: "Servicios públicos"
    },
    {
        nConCodigo: 1024,
        nConValor: 12,
        cConDescripcion: "Financieras"
    },
    {
        nConCodigo: 1024,
        nConValor: 13,
        cConDescripcion: "Entretenimiento"
    },
    {
        nConCodigo: 1024,
        nConValor: 14,
        cConDescripcion: "Hardware"
    },
    {
        nConCodigo: 1024,
        nConValor: 15,
        cConDescripcion: "Industria ligera (Mobiliario, Oficina)"
    },
    {
        nConCodigo: 1024,
        nConValor: 16,
        cConDescripcion: "Industria pesada (Acero)"
    },
    {
        nConCodigo: 1024,
        nConValor: 17,
        cConDescripcion: "Instituciones y Gobierno"
    },
    {
        nConCodigo: 1024,
        nConValor: 18,
        cConDescripcion: "Internet y Nuevos Medios"
    },
    {
        nConCodigo: 1024,
        nConValor: 19,
        cConDescripcion: "Materias Primas"
    },
    {
        nConCodigo: 1024,
        nConValor: 20,
        cConDescripcion: "Medios y Editoriales"
    },
    {
        nConCodigo: 1024,
        nConValor: 21,
        cConDescripcion: "Productos de Consumo (Ropa, Hogar, Moda)"
    },
    {
        nConCodigo: 1024,
        nConValor: 22,
        cConDescripcion: "Publicidad y RRPP"
    },
    {
        nConCodigo: 1024,
        nConValor: 23,
        cConDescripcion: "Salud"
    },
    {
        nConCodigo: 1024,
        nConValor: 24,
        cConDescripcion: "Servicios (Hostelería, Viajes, Restauración)"
    },
    {
        nConCodigo: 1024,
        nConValor: 25,
        cConDescripcion: "Servicios Consultoría TI"
    },
    {
        nConCodigo: 1024,
        nConValor: 26,
        cConDescripcion: "Servicios financieros (Banca, Inversiones)"
    },
    {
        nConCodigo: 1024,
        nConValor: 27,
        cConDescripcion: "Servicios profesionales (Consultoría, contabilidad)"
    },
    {
        nConCodigo: 1024,
        nConValor: 28,
        cConDescripcion: "Servicios RRHH (Consultoras, ETT´s, Otros RRHH)"
    },
    {
        nConCodigo: 1024,
        nConValor: 29,
        cConDescripcion: "Software"
    },
    {
        nConCodigo: 1024,
        nConValor: 30,
        cConDescripcion: "Telecomunicaciones"
    },
    {
        nConCodigo: 1024,
        nConValor: 31,
        cConDescripcion: "Transporte (Líneas aéreas, Mensajería, Transportes)"
    },
    {
        nConCodigo: 1024,
        nConValor: 32,
        cConDescripcion: "Otros / Sin especificar"
    },
    {
        nConCodigo: 1024,
        nConValor: 33,
        cConDescripcion: "Aeronaútica y Defensa"
    },
    {
        nConCodigo: 1024,
        nConValor: 34,
        cConDescripcion: "Agricultura"
    },
    {
        nConCodigo: 1024,
        nConValor: 35,
        cConDescripcion: "Alimentación"
    },
    {
        nConCodigo: 1024,
        nConValor: 36,
        cConDescripcion: "Construcción"
    },
    {
        nConCodigo: 1024,
        nConValor: 37,
        cConDescripcion: "Derecho"
    },
    {
        nConCodigo: 1024,
        nConValor: 38,
        cConDescripcion: "Electrónica de Consumo"
    },
    {
        nConCodigo: 1024,
        nConValor: 39,
        cConDescripcion: "Energía"
    },
    {
        nConCodigo: 1024,
        nConValor: 40,
        cConDescripcion: "ONPE"
    },
    {
        nConCodigo: 1024,
        nConValor: 41,
        cConDescripcion: "Servicios Religiosos"
    },
    {
        nConCodigo: 1024,
        nConValor: 101,
        cConDescripcion: "UNIVERSIDAD"
    },
    {
        nConCodigo: 1024,
        nConValor: 102,
        cConDescripcion: "INSTITUTOS"
    },
    {
        nConCodigo: 1024,
        nConValor: 103,
        cConDescripcion: "COLEGIOS"
    },
    {
        nConCodigo: 1024,
        nConValor: 104,
        cConDescripcion: "EMPRESAS"
    },
    {
        nConCodigo: 1024,
        nConValor: 106,
        cConDescripcion: "ACADEMIAS"
    },
    {
        nConCodigo: 1024,
        nConValor: 107,
        cConDescripcion: "UNIVERSIDADES EXTRANJERAS"
    },
    {
        nConCodigo: 1024,
        nConValor: 109,
        cConDescripcion: "ESCUELAS MILITARES"
    },
    {
        nConCodigo: 1024,
        nConValor: 110,
        cConDescripcion: "ESCUELA DE OFICIALES DE LA PNP"
    },
    {
        nConCodigo: 1024,
        nConValor: 111,
        cConDescripcion: "JARDINES"
    },
    {
        nConCodigo: 1024,
        nConValor: 112,
        cConDescripcion: "PERIODICO"
    },
    {
        nConCodigo: 1024,
        nConValor: 113,
        cConDescripcion: "RADIO"
    },
    {
        nConCodigo: 1024,
        nConValor: 114,
        cConDescripcion: "TELEVISION"
    },
    {
        nConCodigo: 1024,
        nConValor: 119,
        cConDescripcion: "OTROS"
    },
    {
        nConCodigo: 1024,
        nConValor: 120,
        cConDescripcion: "MERCADO"
    },
    {
        nConCodigo: 1024,
        nConValor: 127,
        cConDescripcion: "CENTRO DE SALUD"
    },
    {
        nConCodigo: 1024,
        nConValor: 128,
        cConDescripcion: "HOSPITALES"
    },
    {
        nConCodigo: 1024,
        nConValor: 129,
        cConDescripcion: "CASINOS"
    },
    {
        nConCodigo: 1024,
        nConValor: 130,
        cConDescripcion: "CLUBES"
    },
    {
        nConCodigo: 1024,
        nConValor: 131,
        cConDescripcion: "BANCOS"
    },
    {
        nConCodigo: 1024,
        nConValor: 132,
        cConDescripcion: "PARROQUIA"
    },
    {
        nConCodigo: 1024,
        nConValor: 133,
        cConDescripcion: "HOTELES"
    },
    {
        nConCodigo: 1024,
        nConValor: 134,
        cConDescripcion: "GRUPO"
    },
    {
        nConCodigo: 1024,
        nConValor: 135,
        cConDescripcion: "EXTRANJERO"
    },
    {
        nConCodigo: 1024,
        nConValor: 136,
        cConDescripcion: "ESCUELAS PROFESIONALES"
    },
    {
        nConCodigo: 1024,
        nConValor: 137,
        cConDescripcion: "SEMINARIO"
    },
    {
        nConCodigo: 1024,
        nConValor: 138,
        cConDescripcion: "Comisarias"
    }
];

const condicionContribuyente = [
    {
        nConCodigo: 1174,
        nConValor: 0,
        cConDescripcion: "CONDICIÓN DEL CONTRIBUYENTE"
    },
    {
        nConCodigo: 1174,
        nConValor: 1,
        cConDescripcion: "HABIDO"
    },
    {
        nConCodigo: 1174,
        nConValor: 2,
        cConDescripcion: "NO APLICABLE"
    },
    {
        nConCodigo: 1174,
        nConValor: 3,
        cConDescripcion: "NO HABIDO"
    },
    {
        nConCodigo: 1174,
        nConValor: 4,
        cConDescripcion: "NO HALLADO"
    },
    {
        nConCodigo: 1174,
        nConValor: 5,
        cConDescripcion: "NO HALLADO CERRADO"
    },
    {
        nConCodigo: 1174,
        nConValor: 6,
        cConDescripcion: "NO HALLADO DESTINATA"
    },
    {
        nConCodigo: 1174,
        nConValor: 7,
        cConDescripcion: "NO HALLADO FALLECIO"
    },
    {
        nConCodigo: 1174,
        nConValor: 8,
        cConDescripcion: "NO HALLADO NO EXISTE"
    },
    {
        nConCodigo: 1174,
        nConValor: 9,
        cConDescripcion: "NO HALLADO NRO.PUERT"
    },
    {
        nConCodigo: 1174,
        nConValor: 10,
        cConDescripcion: "NO HALLADO OTROS MOT"
    },
    {
        nConCodigo: 1174,
        nConValor: 11,
        cConDescripcion: "NO HALLADO SE MUDO D"
    },
    {
        nConCodigo: 1174,
        nConValor: 12,
        cConDescripcion: "NO HALLADO OTROS MOT"
    },
    {
        nConCodigo: 1174,
        nConValor: 13,
        cConDescripcion: "PENDIENTE"
    },
    {
        nConCodigo: 1174,
        nConValor: 14,
        cConDescripcion: "POR VERIFICAR"
    },
    {
        nConCodigo: 1174,
        nConValor: 15,
        cConDescripcion: "-"
    },
    {
        nConCodigo: 1174,
        nConValor: 16,
        cConDescripcion: "NO HALLADO DESTINATARIO DESCONOCIDO"
    },
    {
        nConCodigo: 1174,
        nConValor: 17,
        cConDescripcion: "ACTIVO"
    }
];

const estadoContribuyente = [
    {
        nConCodigo: 1450,
        nConValor: 0,
        cConDescripcion: "ESTADO DEL CONTRIBUYENTE"
    },
    {
        nConCodigo: 1450,
        nConValor: 1,
        cConDescripcion: "ACTIVO"
    },
    {
        nConCodigo: 1450,
        nConValor: 2,
        cConDescripcion: "SUSPENSIÓN TEMPORAL"
    },
    {
        nConCodigo: 1450,
        nConValor: 3,
        cConDescripcion: "BAJA PROVISIONAL"
    },
    {
        nConCodigo: 1450,
        nConValor: 4,
        cConDescripcion: "BAJA DEFINITIVA"
    },
    {
        nConCodigo: 1450,
        nConValor: 5,
        cConDescripcion: "BAJA PROVISIONAL DE OFICIO"
    },
    {
        nConCodigo: 1450,
        nConValor: 6,
        cConDescripcion: "BAJA DEFINITIVA DE OFICIO"
    }
];

const estadoActividad = [
    {
        nConCodigo: 1451,
        nConValor: 0,
        cConDescripcion: "ESTADO DE ACTIVIDAD"
    },
    {
        nConCodigo: 1451,
        nConValor: 1,
        cConDescripcion: "ACTIVO"
    },
    {
        nConCodigo: 1451,
        nConValor: 2,
        cConDescripcion: "NO ACTIVO"
    }
];

const respuestaBooleana = [
    {
        cConDescripcion: 4500,
        nConValor: 0,
        cConDescripcion: "Eval Booleana"
    },
    {
        cConDescripcion: 4500,
        nConValor: 1,
        cConDescripcion: "SI"
    },
    {
        cConDescripcion: 4500,
        nConValor: 2,
        cConDescripcion: "NO"
    }
];

const tipoParentesco = [
    {
        nConCodigo: 1006,
        nConValor: 0,
        cConDescripcion: "PARENTESCO DE PERSONAS"
    },
    {
        nConCodigo: 1006,
        nConValor: 1001,
        cConDescripcion: "PADRE"
    },
    {
        nConCodigo: 1006,
        nConValor: 1002,
        cConDescripcion: "HIJO (A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1003,
        cConDescripcion: "HERMANO (A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1004,
        cConDescripcion: "TIO (A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1005,
        cConDescripcion: "SOBRINO (A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1006,
        cConDescripcion: "AHIJADO (A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1007,
        cConDescripcion: "MADRE"
    },
    {
        nConCodigo: 1006,
        nConValor: 1008,
        cConDescripcion: "PRIMO(A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1009,
        cConDescripcion: "CONYUGUE"
    },
    {
        nConCodigo: 1006,
        nConValor: 1010,
        cConDescripcion: "CONCUBINO(A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1011,
        cConDescripcion: "ABUELO(A)"
    },
    {
        nConCodigo: 1006,
        nConValor: 1012,
        cConDescripcion: "GESTANTE"
    },
    {
        nConCodigo: 1006,
        nConValor: 1013,
        cConDescripcion: "CONVIVIENTE"
    }
];

const motivoDeBaja = [
    {
        nConCodigo: 4014,
        nConValor: 0,
        cConDescripcion: "TABLA W: TIPO DE BAJA COMO DERECHO HABIENTE"
    },
    {
        nConCodigo: 4014,
        nConValor: 1,
        cConDescripcion: "Fallecimiento"
    },
    {
        nConCodigo: 4014,
        nConValor: 2,
        cConDescripcion: "Otros"
    },
    {
        nConCodigo: 4014,
        nConValor: 3,
        cConDescripcion: "Divorcio o disolución "
    },
    {
        nConCodigo: 4014,
        nConValor: 4,
        cConDescripcion: "Fin de comncubinato"
    },
    {
        nConCodigo: 4014,
        nConValor: 5,
        cConDescripcion: "FIn de la gestación"
    },
    {
        nConCodigo: 4014,
        nConValor: 6,
        cConDescripcion: "Hijo mayor de edad"
    },
    {
        nConCodigo: 4014,
        nConValor: 7,
        cConDescripcion: "Motivo de Baja"
    }
];

const TipoBancoHead = [
    {
        nConCodigo: 3800,
        nConValor: 0,
        cConDescripcion: "TIPO DE REFERENCIA"
    },
    {
        nConCodigo: 3800,
        nConValor: 1,
        cConDescripcion: "Componente"
    },
    {
        nConCodigo: 3800,
        nConValor: 2,
        cConDescripcion: "Experiencia curricular"
    }
];

const TipoBankRespuesta = [
    {
        nConCodigo: 3801,
        nConValor: 0,
        cConDescripcion: "TIPO DE RESPUESTA"
    },
    {
        nConCodigo: 3801,
        nConValor: 1,
        cConDescripcion: "Única"
    },
    {
        nConCodigo: 3801,
        nConValor: 2,
        cConDescripcion: "Múltiple"
    },
    {
        nConCodigo: 3801,
        nConValor: 3,
        cConDescripcion: "Relacionada"
    },
    {
        nConCodigo: 3801,
        nConValor: 4,
        cConDescripcion: "Matriz"
    }
];

const secciones = [
    {
        nConCodigo: 1093,
        nConValor: 0,
        cConDescripcion: "SECCIONES"
    },
    {
        nConCodigo: 1093,
        nConValor: 1,
        cConDescripcion: "A"
    },
    {
        nConCodigo: 1093,
        nConValor: 2,
        cConDescripcion: "B"
    },
    {
        nConCodigo: 1093,
        nConValor: 3,
        cConDescripcion: "C"
    },
    {
        nConCodigo: 1093,
        nConValor: 4,
        cConDescripcion: "D"
    },
    {
        nConCodigo: 1093,
        nConValor: 5,
        cConDescripcion: "E"
    },
    {
        nConCodigo: 1093,
        nConValor: 6,
        cConDescripcion: "F"
    },
    {
        nConCodigo: 1093,
        nConValor: 7,
        cConDescripcion: "G"
    },
    {
        nConCodigo: 1093,
        nConValor: 8,
        cConDescripcion: "H"
    },
    {
        nConCodigo: 1093,
        nConValor: 9,
        cConDescripcion: "I"
    },
    {
        nConCodigo: 1093,
        nConValor: 10,
        cConDescripcion: "J"
    },
    {
        nConCodigo: 1093,
        nConValor: 11,
        cConDescripcion: "K"
    },
    {
        nConCodigo: 1093,
        nConValor: 12,
        cConDescripcion: "L"
    },
    {
        nConCodigo: 1093,
        nConValor: 13,
        cConDescripcion: "M"
    },
    {
        nConCodigo: 1093,
        nConValor: 14,
        cConDescripcion: "N"
    },
    {
        nConCodigo: 1093,
        nConValor: 15,
        cConDescripcion: "O"
    },
    {
        nConCodigo: 1093,
        nConValor: 16,
        cConDescripcion: "P"
    },
    {
        nConCodigo: 1093,
        nConValor: 17,
        cConDescripcion: "Q"
    },
    {
        nConCodigo: 1093,
        nConValor: 18,
        cConDescripcion: "R"
    },
    {
        nConCodigo: 1093,
        nConValor: 19,
        cConDescripcion: "S"
    },
    {
        nConCodigo: 1093,
        nConValor: 20,
        cConDescripcion: "T"
    },
    {
        nConCodigo: 1093,
        nConValor: 21,
        cConDescripcion: "U"
    },
    {
        nConCodigo: 1093,
        nConValor: 22,
        cConDescripcion: "V"
    },
    {
        nConCodigo: 1093,
        nConValor: 23,
        cConDescripcion: "W"
    },
    {
        nConCodigo: 1093,
        nConValor: 24,
        cConDescripcion: "X"
    },
    {
        nConCodigo: 1093,
        nConValor: 25,
        cConDescripcion: "Y"
    },
    {
        nConCodigo: 1093,
        nConValor: 26,
        cConDescripcion: "Z"
    },
    {
        nConCodigo: 1093,
        nConValor: 27,
        cConDescripcion: "PEAD"
    }
];

const tiposDocente = [
    {
        nConCodigo: 1081,
        nConValor: 0,
        cConDescripcion: "CATEGORIAS"
    },
    {
        nConCodigo: 1081,
        nConValor: 1001,
        cConDescripcion: "FUNCIONARIO"
    },
    {
        nConCodigo: 1081,
        nConValor: 1002,
        cConDescripcion: "ADMINISTRATIVO"
    },
    {
        nConCodigo: 1081,
        nConValor: 1003,
        cConDescripcion: "JEFE DE AREA"
    },
    {
        nConCodigo: 1081,
        nConValor: 1004,
        cConDescripcion: "PERSONAL TECNICO"
    },
    {
        nConCodigo: 1081,
        nConValor: 1005,
        cConDescripcion: "PERSONAL DE APOYO"
    },
    {
        nConCodigo: 1081,
        nConValor: 1006,
        cConDescripcion: "PERSONAL DE MANTENIMIENTO"
    },
    {
        nConCodigo: 1081,
        nConValor: 2000,
        cConDescripcion: "DOCENTE"
    },
    {
        nConCodigo: 1081,
        nConValor: 2001,
        cConDescripcion: "DOCENTE PRINCIPAL"
    },
    {
        nConCodigo: 1081,
        nConValor: 2002,
        cConDescripcion: "DOCENTE ASOCIADO"
    },
    {
        nConCodigo: 1081,
        nConValor: 2003,
        cConDescripcion: "DOCENTE AUXILIAR"
    },
    {
        nConCodigo: 1081,
        nConValor: 2004,
        cConDescripcion: "JEFE PRACTICA"
    },
    {
        nConCodigo: 1081,
        nConValor: 2005,
        cConDescripcion: "PROFESOR HONORARIO"
    },
    {
        nConCodigo: 1081,
        nConValor: 2006,
        cConDescripcion: "PROFESOR INVITADO"
    },
    {
        nConCodigo: 1081,
        nConValor: 2007,
        cConDescripcion: "PRACTICANTE PRE_PROFESIONAL"
    },
    {
        nConCodigo: 1081,
        nConValor: 2008,
        cConDescripcion: "DOCTORES NOBLES"
    },
    {
        nConCodigo: 1081,
        nConValor: 2009,
        cConDescripcion: "PROFESOR TITULACION"
    },
    {
        nConCodigo: 1081,
        nConValor: 2010,
        cConDescripcion: "EXPOSITOR(CONFERISISTA)"
    },
    {
        nConCodigo: 1081,
        nConValor: 2011,
        cConDescripcion: "Pract. Profesional"
    },
    {
        nConCodigo: 1081,
        nConValor: 2099,
        cConDescripcion: "-"
    }
];

const horarioCondiciones = [
    {
        nConCodigo: 1090,
        nConValor: 0,
        cConDescripcion: "ESTADO DEL GRUPO DE ESTUDIO"
    },
    {
        nConCodigo: 1090,
        nConValor: 1,
        cConDescripcion: "PENDIENTE"
    },
    {
        nConCodigo: 1090,
        nConValor: 2,
        cConDescripcion: "APROBADO ABIERTO"
    },
    {
        nConCodigo: 1090,
        nConValor: 3,
        cConDescripcion: "EJECUTADO"
    },
    {
        nConCodigo: 1090,
        nConValor: 4,
        cConDescripcion: "CERRADO"
    },
    {
        nConCodigo: 1090,
        nConValor: 5,
        cConDescripcion: "ANULADO"
    }
];

const tipoHora = [
    {
        nConCodigo: 1083,
        nConValor: 0,
        cConDescripcion: "JORNALES"
    },
    {
        nConCodigo: 1083,
        nConValor: 1,
        cConDescripcion: "HORA (50min)"
    },
    {
        nConCodigo: 1083,
        nConValor: 2,
        cConDescripcion: "HORA (60min)"
    },
    {
        nConCodigo: 1083,
        nConValor: 3,
        cConDescripcion: "MES"
    },
    {
        nConCodigo: 1083,
        nConValor: 4,
        cConDescripcion: "Semana"
    },
    {
        nConCodigo: 1083,
        nConValor: 5,
        cConDescripcion: "Anual"
    },
    {
        nConCodigo: 1083,
        nConValor: 6,
        cConDescripcion: "Contrato"
    },
    {
        nConCodigo: 1083,
        nConValor: 7,
        cConDescripcion: "Diaria"
    },
    {
        nConCodigo: 1083,
        nConValor: 8,
        cConDescripcion: "Cada 4 Semanas"
    },
    {
        nConCodigo: 1083,
        nConValor: 9,
        cConDescripcion: "Trimestral"
    },
    {
        nConCodigo: 1083,
        nConValor: 10,
        cConDescripcion: "Quincenal"
    }
];

const tipoUsoEstructura = [
    {
        nConCodigo: 8100,
        nConValor: 0,
        cConDescripcion: "TIPO DE USO DEL AMBIENTE"
    },
    {
        nConCodigo: 8100,
        nConValor: 1,
        cConDescripcion: "Clases"
    },
    {
        nConCodigo: 8100,
        nConValor: 2,
        cConDescripcion: "Almacén"
    },
    {
        nConCodigo: 8100,
        nConValor: 3,
        cConDescripcion: "Conferencias"
    }
];

const tipoAmbiente = [
    {
        nConCodigo: 8101,
        nConValor: 0,
        cConDescripcion: "TIPO DE AMBIENTE"
    },
    {
        nConCodigo: 8101,
        nConValor: 1,
        cConDescripcion: "Aula"
    },
    {
        nConCodigo: 8101,
        nConValor: 2,
        cConDescripcion: "Laboratorio"
    },
    {
        nConCodigo: 8101,
        nConValor: 3,
        cConDescripcion: "Servicios"
    }
];

const horarioCincuentaMin = [
    {
        nConCodigo: 1017,
        nConValor: 0,
        cConDescripcion: "HORARIO DOCENTE"
    },
    {
        nConCodigo: 1017,
        nConValor: 10,
        cConDescripcion: "07:30 - 08:20"
    },
    {
        nConCodigo: 1017,
        nConValor: 11,
        cConDescripcion: "08:20 - 09:10"
    },
    {
        nConCodigo: 1017,
        nConValor: 12,
        cConDescripcion: "09:10 - 10:00"
    },
    {
        nConCodigo: 1017,
        nConValor: 13,
        cConDescripcion: "10:00 - 10:20"
    },
    {
        nConCodigo: 1017,
        nConValor: 14,
        cConDescripcion: "10:20 - 11:10"
    },
    {
        nConCodigo: 1017,
        nConValor: 15,
        cConDescripcion: "11:10 - 12:00"
    },
    {
        nConCodigo: 1017,
        nConValor: 30,
        cConDescripcion: "12:00 - 13:00"
    },
    {
        nConCodigo: 1017,
        nConValor: 31,
        cConDescripcion: "13:00 - 13:50"
    },
    {
        nConCodigo: 1017,
        nConValor: 32,
        cConDescripcion: "13:50 - 14:40"
    },
    {
        nConCodigo: 1017,
        nConValor: 33,
        cConDescripcion: "14:40 - 15:30"
    },
    {
        nConCodigo: 1017,
        nConValor: 34,
        cConDescripcion: "15:30 - 16:40"
    },
    {
        nConCodigo: 1017,
        nConValor: 35,
        cConDescripcion: "16:40 - 17:30"
    },
    {
        nConCodigo: 1017,
        nConValor: 50,
        cConDescripcion: "17:30 - 18:00"
    },
    {
        nConCodigo: 1017,
        nConValor: 51,
        cConDescripcion: "18:00 - 18:20"
    },
    {
        nConCodigo: 1017,
        nConValor: 52,
        cConDescripcion: "18:20 - 19:10"
    },
    {
        nConCodigo: 1017,
        nConValor: 53,
        cConDescripcion: "19:10 - 19:40"
    },
    {
        nConCodigo: 1017,
        nConValor: 54,
        cConDescripcion: "19:40 - 20:50"
    },
    {
        nConCodigo: 1017,
        nConValor: 55,
        cConDescripcion: "20:50 - 21:40"
    },
    {
        nConCodigo: 1017,
        nConValor: 56,
        cConDescripcion: "21:40 - 22:10"
    },
    {
        nConCodigo: 1017,
        nConValor: 57,
        cConDescripcion: "22:10 - 22:30"
    }
];

const tipoNavegacion = [
    {
        nConCodigo: 2500,
        nConValor: 0,
        cConDescripcion: "TIPO BARRA DE NAVEGACIÓN"
    },
    {
        nConCodigo: 2500,
        nConValor: 1,
        cConDescripcion: "aside"
    },
    {
        nConCodigo: 2500,
        nConValor: 2,
        cConDescripcion: "collapsable"
    },
    {
        nConCodigo: 2500,
        nConValor: 3,
        cConDescripcion: "basic"
    }
];

const iconoNavegacion = [
    {
        nConCodigo: 2501,
        nConValor: 0,
        cConDescripcion: "ICONO DE NAVEGACIÓN"
    },
    {
        nConCodigo: 2501,
        nConValor: 1,
        cConDescripcion: "heroicons_outline:cog"
    },
    {
        nConCodigo: 2501,
        nConValor: 2,
        cConDescripcion: "heroicons_outline:globe-alt"
    },
    {
        nConCodigo: 2501,
        nConValor: 3,
        cConDescripcion: "heroicons_outline:trending-up"
    },
    {
        nConCodigo: 2501,
        nConValor: 4,
        cConDescripcion: "heroicons_outline:collection"
    },
    {
        nConCodigo: 2501,
        nConValor: 5,
        cConDescripcion: "heroicons_outline:database"
    },
    {
        nConCodigo: 2501,
        nConValor: 6,
        cConDescripcion: "heroicons_outline:clipboard-list"
    },
    {
        nConCodigo: 2501,
        nConValor: 7,
        cConDescripcion: "heroicons_outline:clipboard"
    },
    {
        nConCodigo: 2501,
        nConValor: 8,
        cConDescripcion: "heroicons_outline:cube"
    },
    {
        nConCodigo: 2501,
        nConValor: 9,
        cConDescripcion: "heroicons_outline:office-building"
    },
    {
        nConCodigo: 2501,
        nConValor: 10,
        cConDescripcion: "heroicons_outline:puzzle"
    },
    {
        nConCodigo: 2501,
        nConValor: 11,
        cConDescripcion: "heroicons_outline:chart-pie"
    },
    {
        nConCodigo: 2501,
        nConValor: 12,
        cConDescripcion: "heroicons_outline:library"
    },
    {
        nConCodigo: 2501,
        nConValor: 13,
        cConDescripcion: "heroicons_outline:briefcase"
    },
    {
        nConCodigo: 2501,
        nConValor: 14,
        cConDescripcion: "heroicons_outline:user-add"
    },
    {
        nConCodigo: 2501,
        nConValor: 15,
        cConDescripcion: "heroicons_outline:user-circle"
    },
    {
        nConCodigo: 2501,
        nConValor: 16,
        cConDescripcion: "heroicons_outline:lock-closed"
    },
    {
        nConCodigo: 2501,
        nConValor: 17,
        cConDescripcion: "heroicons_outline:folder-open"
    },
    {
        nConCodigo: 2501,
        nConValor: 18,
        cConDescripcion: "heroicons_outline:book-open"
    },
    {
        nConCodigo: 2501,
        nConValor: 19,
        cConDescripcion: "heroicons_outline:selector"
    },
    {
        nConCodigo: 2501,
        nConValor: 20,
        cConDescripcion: "heroicons_outline:document-text"
    },
    {
        nConCodigo: 2501,
        nConValor: 21,
        cConDescripcion: "heroicons_outline:clipboard-check"
    },
    {
        nConCodigo: 2501,
        nConValor: 22,
        cConDescripcion: "heroicons_outline:document-duplicate"
    },
    {
        nConCodigo: 2501,
        nConValor: 23,
        cConDescripcion: "heroicons_outline:academic-cap"
    },
    {
        nConCodigo: 2501,
        nConValor: 24,
        cConDescripcion: "heroicons_outline:pencil-square"
    },
    {
        nConCodigo: 2501,
        nConValor: 25,
        cConDescripcion: "heroicons_outline:list-bullet"
    },
    {
        nConCodigo: 2501,
        nConValor: 26,
        cConDescripcion: "heroicons_outline:question-mark-circle"
    },
    {
        nConCodigo: 2501,
        nConValor: 27,
        cConDescripcion: "heroicons_outline:shield-check"
    },
    {
        nConCodigo: 2501,
        nConValor: 28,
        cConDescripcion: "heroicons_outline:clock"
    }
];

const tipoEquivalencias = [
    {
        nConCodigo: 500012,
        nConValor: 0,
        cConDescripcion: "Tipos de Equivalencia"
    },
    {
        nConCodigo: 500012,
        nConValor: 2,
        cConDescripcion: "Diferentes Escuelas"
    },
    {
        nConCodigo: 500012,
        nConValor: 1,
        cConDescripcion: "Misma Escuela"
    },
    {
        nConCodigo: 500012,
        nConValor: 3,
        cConDescripcion: "Diferentes Instituciones Externas"
    }
];

const tipoMatriculas = [
    {
        nConCodigo: 500000,
        nConValor: 0,
        cConDescripcion: "Tipos de Matricula"
    },
    {
        nConCodigo: 500000,
        nConValor: 2,
        cConDescripcion: "Especial"
    },
    {
        nConCodigo: 500000,
        nConValor: 1,
        cConDescripcion: "Regular"
    },
    {
        nConCodigo: 500000,
        nConValor: 3,
        cConDescripcion: "Convalidaciones"
    },
    {
        nConCodigo: 500000,
        nConValor: 4,
        cConDescripcion: "Examen de Suficiencia"
    }
];

const horarioSesentaMin = [
    {
        nConCodigo: 1993,
        nConValor: 0,
        cConDescripcion: "HORARIO DOCENTE - 60 MIN"
    },
    {
        nConCodigo: 1993,
        nConValor: 1,
        cConDescripcion: "08:00 - 09:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 2,
        cConDescripcion: "09:00 - 10:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 3,
        cConDescripcion: "10:00 - 11:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 4,
        cConDescripcion: "11:00 - 12:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 5,
        cConDescripcion: "12:00 - 13:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 6,
        cConDescripcion: "13:00 - 14:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 7,
        cConDescripcion: "15:00 - 16:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 8,
        cConDescripcion: "16:00 - 17:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 9,
        cConDescripcion: "17:00 - 18:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 10,
        cConDescripcion: "18:00 - 19:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 11,
        cConDescripcion: "19:00 - 20:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 12,
        cConDescripcion: "20:00 - 21:00"
    },
    {
        nConCodigo: 1993,
        nConValor: 13,
        cConDescripcion: "21:00 - 22:00"
    }
];

const tipoWorkFlow = [
    {
        nConCodigo: 11000,
        nConValor: 0,
        cConDescripcion: "TIPO DE WORKFLOW"
    },
    {
        nConCodigo: 11000,
        nConValor: 1,
        cConDescripcion: "APROBACIÓN"
    },
    {
        nConCodigo: 11000,
        nConValor: 2,
        cConDescripcion: "REVISIÓN"
    }
];

const aprobacionWorkFlow = [
    {
        nConCodigo: 11001,
        nConValor: 0,
        cConDescripcion: "APROBACIÓN DEL WORKFLOW"
    },
    {
        nConCodigo: 11001,
        nConValor: 1,
        cConDescripcion: "DEPENDIENTE DE LA FASE"
    },
    {
        nConCodigo: 11001,
        nConValor: 2,
        cConDescripcion: "INDEPENDIENTE DE LA FASE"
    }
];
