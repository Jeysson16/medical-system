import { Pipe, PipeTransform } from "@angular/core";
import { Constante } from "@shared/interfaces/IConstante";

@Pipe({
    name: "constanteDescripcion"
})
export class ConstanteDescripcionPipe implements PipeTransform {
    transform(value: unknown, constantes: Constante[]): string {
        return constantes.find(constante => constante.nConValor == Number(value)).cConDescripcion;
    }
}
