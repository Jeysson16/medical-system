export class FormatearMonto {
    public format(monto: string): number {
        const digito = monto.toString().replace(/,/g, "");
        return Number(digito);
    }

    // public trnasform(monto:string): number {
    //     const digito = monto.toString().replace(/,/g, "");
    //     return Number(digito)
    // };
}

export const FORMAT_MONTO = new FormatearMonto();
