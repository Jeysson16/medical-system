import { WFFasForAtriValues } from "@shared/models/IWFFasForAtriValues";
import { WFFaseFormAtributos } from "@shared/models/IWFFaseFormAtributos";

export interface DynamicForm {
    label?: string;
    value?: string;
    valueOpc?: string;
    description?: string;
    textHelp?: string;
    typeInput: string;
    isRequired?: boolean;
    isDateTime?: boolean;
    isAutomatic?: boolean;
    placeHolder?: string;
    placeHolderOpc?: string;
    typeMoney?: number;
    multipleOptions?: WFFasForAtriValues[];
}
