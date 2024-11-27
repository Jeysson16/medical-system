import { NgFor, NgIf } from "@angular/common";
import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { FormArray, FormGroup, FormsModule, NgForm, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOption, MatOptionModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioButton } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { Router, RouterLink } from "@angular/router";
import { fuseAnimations } from "@fuse/animations";
import { FuseAlertComponent, FuseAlertType } from "@fuse/components/alert";
import { AuthService } from "app/core/auth/auth.service";

@Component({
    selector: "auth-sign-up",
    templateUrl: "./sign-up.component.html",
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
    standalone: true,
    imports: [
        RouterLink,
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
    ]
})
export class AuthSignUpComponent implements OnInit {
    @ViewChild("signUpNgForm") signUpNgForm: NgForm;

    alert: { type: FuseAlertType; message: string } = {
        type: "success",
        message: ""
    };
    signUpForm: FormGroup;
    loading: boolean = false;
    showAlert: boolean = false;

    /**
     * Constructor
     */
    constructor(private _authService: AuthService, private _formBuilder: UntypedFormBuilder, private _router: Router) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Create the form
        this.signUpForm = this._formBuilder.group({
            name: ["", Validators.required],
            age: ["", [Validators.required, Validators.min(0)]],
            gender: ["", Validators.required],
            contactInfo: this._formBuilder.array([this.createContactGroup("email", "")]), // Default entry
            password: ["", Validators.required],
            identityDocument: this._formBuilder.group({
                type: ["", Validators.required],
                value: ["", Validators.required]
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

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign up
     */
    signUp(): void {
        // Do nothing if the form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        // Disable the form
        this.signUpForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Sign up
        this._authService.signUpPatient(this.signUpForm.value).subscribe(
            response => {
                // Navigate to the confirmation required page
                this._router.navigateByUrl("/confirmation-required");
            },
            response => {
                // Re-enable the form
                this.signUpForm.enable();

                // Reset the form
                this.signUpNgForm.resetForm();

                // Set the alert
                this.alert = {
                    type: "error",
                    message: "Something went wrong, please try again."
                };

                // Show the alert
                this.showAlert = true;
            }
        );
    }
}
