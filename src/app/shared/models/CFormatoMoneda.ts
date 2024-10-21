export class FormatearMoneda {
    public format(tipo: number): string {
        switch (tipo) {
            case 1:
                return "S/ ";
            case 2:
                return "$ ";
            case 3:
                return "€ ";
            default:
                return " ";
        }
    }
}

export const FORMAT_MONEDA = new FormatearMoneda();
