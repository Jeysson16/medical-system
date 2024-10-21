import { Component, Inject, OnInit } from "@angular/core";
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from "@angular/material/bottom-sheet";
import { BottomSheetOpcion } from "@shared/interfaces/IGenerico";

@Component({
    selector: "app-bottom-sheet",
    templateUrl: "./bottom-sheet.component.html",
    styleUrls: ["./bottom-sheet.component.scss"]
})
export class BottomSheetComponent implements OnInit {
    listaMensaje: BottomSheetOpcion<any>[] = [];
    constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetOpcion<any>[], private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {
        this.listaMensaje = data;
    }

    ngOnInit(): void {}

    emitirClick(valor: any, evento: MouseEvent): void {
        this._bottomSheetRef.dismiss(valor);
        evento.preventDefault();
    }
}
