import { Pipe, PipeTransform } from "@angular/core";
import { InterfaceModel } from "@shared/models/IInterface";

@Pipe({
    name: "interfaceDescripcion"
})
export class InterfaceDescripcionPipe implements PipeTransform {
    transform(value: unknown, interfaces: InterfaceModel[]): unknown {
        return interfaces.find(data => data.nIntCodigo == value).cIntDescripcion;
    }
}
