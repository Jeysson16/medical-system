export interface FichaMatricula {
    nombre: string;
    codigo: string;
    tipoMat: string;
    dni: string;
    genero: string;
    escuela: string;
    semestre: string;
    credito: number;
    asignatura: Asignatura[];
    horarioClases: HorarioClase[];
}

export interface Asignatura {
    cod: string;
    asignatura: string;
    ciclo: number;
    campus: string;
    subNombre: string;
    seccion: string;
    fechaInicioFin: string;
    credito: number;
    nMatricula: number;
}

interface HorarioClase {
    cod: string;
    sec: string;
    gru: string;
    nombreCurso: string;
    horario: string;
    horaInicio: string;
    horaFin: string;
    docente: string;
}
