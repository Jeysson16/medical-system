export interface PersonaCebeceraTabla {
    [fila: string]: string;
}

export interface PersonaGenerico {
    codigo?: string;
    lugarNacimiento?: string;
    apellidos?: string;
    estadoCivil?: string;
    nombres?: string;
    telefono?: string;
    genero?: string;
    email?: string;
    dni?: string;
    direccion?: string;
    fechaNacimiento?: string;
    parientes?: null; //temporal
}
