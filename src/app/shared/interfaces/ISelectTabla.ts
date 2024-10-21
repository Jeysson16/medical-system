import { SelectGenerico } from "./IGenericoSelect";

export interface SelectTabla<T> {
    select: SelectGenerico<T>;
    name: string;
    placeHolder: string;
}
