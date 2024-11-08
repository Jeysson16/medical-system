import { NgModule } from "@angular/core";
import { EmptyPipe } from "./empty.pipe";
import { BooleanPipe } from "./boolean.pipe";
import { SeparacionMiles } from "./miles.pipe";
@NgModule({
    imports: [],
    exports: [EmptyPipe, BooleanPipe, SeparacionMiles],
    declarations: [EmptyPipe, BooleanPipe, SeparacionMiles]
})
export class PipesModule {}
