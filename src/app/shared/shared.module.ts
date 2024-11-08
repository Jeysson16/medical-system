import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from "./components/bottom-sheet/bottom-sheet.component";
import { PipesModule } from "./pipe/pipes.module";

import { DynamicComponentDirective } from "./directives/dynamic-component.directive";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDialogModule,
        MatListModule,
        MatBottomSheetModule,
        PipesModule
    ],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, PipesModule, DynamicComponentDirective],
    declarations: [BottomSheetComponent, DynamicComponentDirective, ]
})
export class SharedModule {}
