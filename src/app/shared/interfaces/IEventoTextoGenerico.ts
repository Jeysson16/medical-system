export interface IeventoTextoGenerico<T> {
    nameEvent: string;
    nameAttribute: string;
    tooltip?: string;
    ejecutarEvento(elemento: T, evento: any): void;
}

export class IeventoTextoOpcion<T> implements IeventoTextoGenerico<T> {
    nameEvent: string;
    nameAttribute: string;
    tooltip?: string;
    accionEvento: (data: T, evento: any) => void;

    constructor(nameAttribute: string, tooltip?: string) {
        this.nameEvent = "mouseEvent";
        this.nameAttribute = nameAttribute;
        this.tooltip = tooltip ?? null;
    }

    ejecutarEvento(elemento: T, evento: any): void {
        this.accionEvento(elemento, evento);
    }
}
