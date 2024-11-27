import { Injectable } from "@angular/core";
import { DoctorEntity } from "@entities/IDoctorEntity";
import { PatientEntity } from "@entities/IPatientEntity";
import { RequestOption } from "@shared/interfaces/IRequestOption";
import { ResponseModel } from "@shared/models/IResponseModel";
import { HttpGenericService } from "@shared/services/http-generic.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class PatientService extends HttpGenericService<PatientEntity> {
    constructor() {
        super(`${import.meta.env.NG_APP_API_URL_ENDPOINTS}/patients`);
    }

    loginPatient(credentials: { email: string; password: string }): Observable<ResponseModel<PatientEntity>> {
        const requestOption = new RequestOption();
        requestOption.resource = "login";
        requestOption.request = credentials;
        return this.post(requestOption);
    }

    registerPatient(patient: PatientEntity): Observable<ResponseModel<PatientEntity>> {
        const requestOption = new RequestOption();
        requestOption.resource = "register";
        requestOption.request = patient;
        return this.post(requestOption);
    }
}
