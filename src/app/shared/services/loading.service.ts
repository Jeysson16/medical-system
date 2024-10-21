import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EpLoadingComponent } from "app/modules/admin/components/ep-loading/ep-loading.component";
@Injectable({
    providedIn: "root"
})
export class LoadingService {
    respDialogo: MatDialogRef<EpLoadingComponent>;
    constructor(public dialog: MatDialog) {}

    open(tittle?: string): void {
        this.respDialogo = this.dialog.open(EpLoadingComponent, {
            data: { tittle: tittle ?? "" },
            autoFocus: false,
            disableClose: true
        });
    }

    close(): void {
        if (this.respDialogo) this.respDialogo.close();
    }
}
