import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: "app-dialog-capsule",
    standalone: true,
    imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
    template: `
        <h1 mat-dialog-title>Registrar Cápsula</h1>
        <div mat-dialog-content>
            <mat-form-field appearance="fill" class="w-full">
                <mat-label>Nombre de la Cápsula</mat-label>
                <input matInput [(ngModel)]="capsule.title" />
            </mat-form-field>
            <mat-form-field appearance="fill" class="w-full">
                <mat-label>Descripción</mat-label>
                <textarea matInput rows="3" [(ngModel)]="capsule.description"></textarea>
            </mat-form-field>
        </div>
        <div mat-dialog-actions align="end">
            <button mat-button (click)="close()">Cancelar</button>
            <button mat-button color="primary" (click)="save()">Guardar</button>
        </div>
    `
})
export class DialogCapsuleComponent {
    capsule = {
        title: "",
        description: ""
    };

    constructor(private dialogRef: MatDialogRef<DialogCapsuleComponent>, @Inject(MAT_DIALOG_DATA) public data: { contactId: string }) {}

    save(): void {
        if (this.capsule.title.trim()) {
            this.dialogRef.close({ ...this.capsule, contactId: this.data.contactId });
        }
    }

    close(): void {
        this.dialogRef.close(null);
    }
}
