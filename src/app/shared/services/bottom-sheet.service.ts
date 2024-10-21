import { Injectable } from "@angular/core";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { BottomSheetComponent } from "@shared/components/bottom-sheet/bottom-sheet.component";
import { BottomSheetOpcion } from "@shared/interfaces/IGenerico";

@Injectable({
    providedIn: "root"
})
export class BottomSheetService<T> {
    constructor(private _bottomSheet: MatBottomSheet) {}

    openBottomSheet(listaMensajes: BottomSheetOpcion<T>[]): MatBottomSheetRef {
        const referenciaBottomSheet = this._bottomSheet.open(BottomSheetComponent, { data: listaMensajes });

        return referenciaBottomSheet;
    }
}
