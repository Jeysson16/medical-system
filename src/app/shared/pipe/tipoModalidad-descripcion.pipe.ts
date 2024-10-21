import { Pipe, PipeTransform } from "@angular/core";
import { TipoModalidades } from "@shared/models/lTipoModalidad";

@Pipe({
    name: "tipoModalidad"
})
export class TipoModalidadPipe implements PipeTransform {
    transform(value: unknown, tipo: TipoModalidades[]): string {
        /*  console.log('tipoPipe;', tipo);
         console.log('tipoValue;', value);
         console.log('tipo:', tipo.find(data => data.nAcdTipoCodigo === value).cAcdTipoNombre); */
        return tipo.find(data => data.nAcdTipoCodigo === value).cAcdTipoNombre;
    }
}
