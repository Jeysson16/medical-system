import { Injectable } from "@angular/core";
import { DoctorEntity } from "@entities/IDoctorEntity";
import { RequestOption } from "@shared/interfaces/IRequestOption";
import { ResponseModel } from "@shared/models/IResponseModel";
import { HttpGenericService } from "@shared/services/http-generic.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DoctorService extends HttpGenericService<DoctorEntity> {
    constructor() {
        super(`${import.meta.env.NG_APP_API_URL_ENDPOINTS}/doctors`);
    }

    loginDoctor(credentials: { email: string; password: string }): Observable<ResponseModel<DoctorEntity>> {
        console.log(import.meta.env.NG_APP_API_URL_ENDPOINTS);
        const requestOption = new RequestOption();
        requestOption.resource = "login";
        requestOption.request = credentials;
        return this.post(requestOption);
    }

    registerDoctor(doctor: DoctorEntity): Observable<ResponseModel<DoctorEntity>> {
        const requestOption = new RequestOption();
        requestOption.resource = "register";
        requestOption.request = doctor;
        return this.post(requestOption);
    }
}
