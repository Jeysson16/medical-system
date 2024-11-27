import { Injectable, inject, signal } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { EcSpinnerComponent } from "@components/ec-spinner/ec-spinner.component";

@Injectable({
    providedIn: "root"
})
export class LoadingService {
    respDialogo: MatDialogRef<EcSpinnerComponent>;
    public readonly dialog = inject(MatDialog);

    showSpinner = signal(false);

    open(tittle?: string): void {
        this.showSpinner.set(true);
    }

    close(): void {
        this.showSpinner.set(false);
    }
}
