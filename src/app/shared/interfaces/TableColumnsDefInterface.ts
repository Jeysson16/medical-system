export interface TableColumnsDefInterface {
    id: number;
    name?: string | "none";
    maxPrice?: string;
    subName?: string;
    displayedName: string;
    estado?: string;
    nombreColumna?: string;
    typeCurrency?:boolean;
    type?:
        | "string"
        | "decimal"
        | "number"
        | "date"
        | "dateInput"
        | "datetime"
        | "boolean"
        | "time"
        | "acciones"
        | "mouseEvent"
        | "seleccionado"
        | "estado"
        | "estadoAdmision"
        | "accionesEvaluacionPe"
        | "accionesDescarga"
        | "moneda"
        | "monedaTC"
        | "input"
        | "input-number"
        | "select"
        | "accionesObservacionPO"
        | "accionesListaDetalle"
        | "construccion"
        | "url"
        | "porcentaje"
        | "checkbox"
        | "radiobutton"
        | "editable"
        | "slideToggle";
    format?: "fullDate" | "shortTime" | "shortTimeHour";
    customIcon?: string[][];
    minMaxDecimal?: [number, number];
    checked?: string;
    backgroundColorTitle?: string;
    components?: string[];
    alignTitle?: "left" | "center" | "right" | "fill" | "justify" | "centerContinuous" | "distributed";
    alignContent?: "left" | "center" | "right" | "fill" | "justify" | "centerContinuous" | "distributed";
}
