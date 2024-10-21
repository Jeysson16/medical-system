export interface SlideToggleGenerico<T> {
    clase: string;
    tooltip?: string;
    checked?: string;
    ejecutarAccion(dato: T): void;
}
export class SlideToggleOpcion<T> implements SlideToggleGenerico<T> {
    clase: string;
    tooltip?: string;
    checked?: string;
    accionSlide: (data: T) => void;

    constructor() {}

    ejecutarAccion(elemento: T): void {
        this.accionSlide(elemento);
    }
}
