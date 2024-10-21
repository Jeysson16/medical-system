import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn } from "@angular/forms";
import moment from "moment";

@Injectable({
    providedIn: "root"
})
export class ValidationService {
    static validatePassword(control: AbstractControl): ValidatorFn {
        const password: string = control.get("cPerUsuClave").value;
        const confirmPassword: string = control.get("cPerUsuClaveConfirm").value;
        if (confirmPassword.length > 1) if (password !== confirmPassword) control.get("cPerUsuClaveConfirm").setErrors({ mismatch: true });

        return null;
    }

    static validateDateMinTsLuxon(control: AbstractControl): ValidatorFn {
        const startHour: AbstractControl = control.get("horaInicio");
        const endHour: AbstractControl = control.get("horaFin");
        if (startHour.valid && endHour.valid) {
            const hourStartNum = Number(startHour.value.substring(0, 2) + startHour.value.substring(3));
            const hourEndNum = Number(endHour.value.substring(0, 2) + endHour.value.substring(3));
            if (hourStartNum >= hourEndNum) endHour.setErrors({ errorMinHour: true });
        }
        return null;
    }

    fechaMinima(convertDate: boolean, minDate: AbstractControl): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const dateValue: Date = new Date(control.value);
            if (!control.value) return null;
            if (convertDate) {
                console.log(minDate);
                console.log(convertDate);
                if (moment(dateValue) < moment(minDate?.value)) return { minDateError: { message: "error message" } };
            }
            return null;
        };
    }

    rangeDate(dateFieldIni: string, dateFieldFin): ValidatorFn {
        return (controls: AbstractControl): { [key: string]: any } | null => {
            const dateIni = controls.get(dateFieldIni)?.value;
            const dateFin = controls.get(dateFieldFin)?.value;

            if (dateIni && dateFin) {
                if (dateFin < dateIni) {
                    controls.get(dateFieldFin)?.setErrors({ rangeDateInvalid: true });
                    return { rangeDateInvalid: true };
                } else return null;
            } else return null;
        };
    }

    fechaTest(dateField1: string, dateField2: string, validatorField: { [key: string]: boolean }): ValidatorFn {
        return (control: AbstractControl): { [key: string]: boolean } | null => {
            const date1 = control.get(dateField1).value;
            const date2 = control.get(dateField2).value;
            if (date1 !== null && date2 !== null && date1 > date2) return validatorField;

            return null;
        };
    }

    autocomplete(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if (typeof control.value === "string") return { invalidAutocompleteObject: { value: control.value } };

            return null;
        };
    }
}
