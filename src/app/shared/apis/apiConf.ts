export interface IRecursosGenerales {
    getByPagination: string;
    create: string;
    update: string;
    delete: string;
}

export interface IRecursosAdicionales {
    [key: string]: string;
}

export interface IApiConfig {
    endpoint: string;
    recurso: RecursoConfig;
}

export type RecursoConfig = (IRecursosGenerales & IRecursosAdicionales) | IRecursosAdicionales;

export interface IApiEstructura {
    [key: string]: IApiConfig;
}
