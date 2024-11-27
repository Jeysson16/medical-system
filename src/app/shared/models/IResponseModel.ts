export interface ResponseModel<T> {
    isSuccess: boolean;
    lstError: string[];
    lstItem: Array<T>;
    resultado: number;
    item: T;
    LstItem: Array<T>;
}
