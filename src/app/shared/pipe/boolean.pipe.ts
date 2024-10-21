import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "boolean"
})
export class BooleanPipe implements PipeTransform {
    transform(value: unknown, ...args: unknown[]): unknown {
        if (value == 0 || value == false) return "No";
        else return "Sí";
    }
}
