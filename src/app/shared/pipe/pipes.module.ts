import { NgModule } from "@angular/core";
import { EmptyPipe } from "./empty.pipe";
import { BooleanPipe } from "./boolean.pipe";
import { InterfaceDescripcionPipe } from "./interface-descripcion.pipe";
import { TipoModalidadPipe } from "./tipoModalidad-descripcion.pipe";
import { SeparacionMiles } from "./miles.pipe";
@NgModule({
    imports: [],
    exports: [EmptyPipe, BooleanPipe, InterfaceDescripcionPipe, TipoModalidadPipe, SeparacionMiles],
    declarations: [EmptyPipe, BooleanPipe, InterfaceDescripcionPipe, TipoModalidadPipe, SeparacionMiles]
})
export class PipesModule {}
