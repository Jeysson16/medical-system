export interface IconoGenerico<T> {
    id: string;
    nombre: string;
    tipo: string;
    tooltip?: string;
    transicionIcono?: IconoGenerico<T>;
    ejecutarAccion(dato: T): void;
}

export class IconoOpcion<T> implements IconoGenerico<T> {
    id: string;
    nombre: string;
    tipo: string;
    tooltip?: string;
    transicionIcono: IconoOpcion<T>;
    color?: string;
    accionIcono: (data?: T) => void;

    constructor(nombre: string, tipo: string, tooltip?: string, transicionIcono?: IconoOpcion<T>, id?: string, color?: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.tooltip = tooltip ?? null;
        this.transicionIcono = transicionIcono ?? null;
        this.id = id ?? null;
        this.color = color ? color : "black";
    }

    ejecutarAccion(elemento: T): void {
        this.accionIcono(elemento);
    }
}
