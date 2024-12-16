import { NgFor, NgIf } from "@angular/common";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, ViewChild } from "@angular/core";
import { FormArray, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { Router } from "@angular/router";
import { FuseAlertComponent, FuseAlertType } from "@fuse/components/alert";
import { AuthService } from "app/core/auth/auth.service";

@Component({
    selector: "app-patients-new",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        NgIf,
        NgFor,
        FuseAlertComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatOptionModule,
        MatIconModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    templateUrl: "./patients-new.component.html",
    styleUrl: "./patients-new.component.scss"
})
export class PatientsNewComponent {
    @ViewChild("signUpNgForm") signUpNgForm: NgForm;

    signUpForm: FormGroup;
    alert: { type: FuseAlertType; message: string } = {
        type: "success",
        message: ""
    };
    loading: boolean = false;
    showAlert: boolean = false;
    private _authService = inject(AuthService);
    private _formBuilder = inject(UntypedFormBuilder);
    private _router = inject(Router);
    private _changeDetectorRef = inject(ChangeDetectorRef);

    ngOnInit(): void {
        // Create the form
        this.signUpForm = this._formBuilder.group({
            doctorName: ["", Validators.required], // Nombre del doctor
            doctorId: ["", Validators.required], // ID del doctor
            name: ["", Validators.required], // Nombre del paciente
            age: ["", [Validators.required, Validators.min(0)]], // Edad del paciente
            gender: ["", Validators.required], // Género del paciente
            contactInfo: this._formBuilder.array([this.createContactGroup("email", "")]), // Contactos del paciente
            password: ["", Validators.required],
            identityDocument: this._formBuilder.group({
                type: ["", Validators.required], // Tipo de documento del paciente
                value: ["", Validators.required] // Número de documento
            })
        });
    }

    createContactGroup(type: string, value: string): FormGroup {
        return this._formBuilder.group({
            type: [type, Validators.required],
            value: [value, Validators.required]
        });
    }
    get contactInfo(): FormArray {
        return this.signUpForm.get("contactInfo") as FormArray;
    }
    /**
     * Add a new contact entry
     */
    addContact(type: string = "", value: string = ""): void {
        this.contactInfo.push(this.createContactGroup(type, value));
    }

    /**
     * Remove a contact entry
     */
    removeContact(index: number): void {
        this.contactInfo.removeAt(index);
    }

    registerPatient(): void {
        // Validar el formulario
        if (this.signUpForm.invalid) {
            return;
        }

        // Deshabilitar el formulario y ocultar alertas
        this.signUpForm.disable();
        this.showAlert = false;

        // Llamar al servicio
        this._authService.signUpPatient(this.signUpForm.value).subscribe(
            response => {
                // Redirigir a una página de éxito
                this._router.navigateByUrl("/patients/lista");
            },
            response => {
                // Rehabilitar el formulario y mostrar errores
                this.signUpForm.enable();
                this.signUpNgForm.resetForm();
                this.alert = {
                    type: "error",
                    message: "No se pudo registrar al paciente, intente nuevamente."
                };
                this.showAlert = true;
            }
        );
    }

    trackByIndex(index: number, item: any): number {
        return index;
    }
}
