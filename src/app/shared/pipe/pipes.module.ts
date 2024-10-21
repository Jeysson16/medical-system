import { NgModule } from "@angular/core";
import { EmptyPipe } from "./empty.pipe";
import { BooleanPipe } from "./boolean.pipe";
import { ConstanteDescripcionPipe } from "./constante-descripcion.pipe";
import { InterfaceDescripcionPipe } from "./interface-descripcion.pipe";
import { TipoModalidadPipe } from "./tipoModalidad-descripcion.pipe";
import { FilterSelectionListPipe } from "./filter-selection-list.pipe";
import { SeparacionMiles } from "./miles.pipe";
@NgModule({
    imports: [],
    exports: [EmptyPipe, BooleanPipe, ConstanteDescripcionPipe, InterfaceDescripcionPipe, TipoModalidadPipe, FilterSelectionListPipe, SeparacionMiles],
    declarations: [EmptyPipe, BooleanPipe, ConstanteDescripcionPipe, InterfaceDescripcionPipe, TipoModalidadPipe, FilterSelectionListPipe, SeparacionMiles]
})
export class PipesModule {}
