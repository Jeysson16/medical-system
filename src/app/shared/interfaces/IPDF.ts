export interface PDF<T> {
    tittle?: string;
    head?: string[];
    body?: Array<any>;
    data?: T;
    user?: string;
    nameEnterprise?: string;
    rucEnterprise?: string;
    printedByUser?: string;
}

type AlignText = "left" | "center" | "right" | "justify";

export interface ConfigText {
    posicionX: number;
    posicionY: number;
    fuente: string;
    texto: string;
    size?: number;
    align?: AlignText;
}
