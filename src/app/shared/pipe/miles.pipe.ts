import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "separacionMiles"
})
export class SeparacionMiles implements PipeTransform {
    transform(value: any, cantidad: number, moneda: string = "S/ "): string {
        if (Number(value) && Number(value) >= 0) {
            value = Number.parseFloat(value).toFixed(cantidad);
            const valorDecimal = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return moneda + valorDecimal;
        } else return moneda + ("0." + "0".padStart(cantidad, "0"));
    }
}
