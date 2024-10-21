export interface SelectGenerico<T> {
    id?: number | string;
    valor?: T;
    descripcion?: string | number;
}

export interface PanelSelectGenerico<T> {
    valor: T;
    indice: number;
    tipoDataObject: string;
}
