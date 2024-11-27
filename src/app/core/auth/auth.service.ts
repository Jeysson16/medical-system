import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PatientEntity } from "@entities/IPatientEntity";
import { DoctorEntity } from "@entities/IDoctorEntity";
import { User } from "../user/user.types";
import { DoctorService } from "@services/doctor.service";
import { PatientService } from "@services/patient.service";
import { ResponseModel } from "@shared/models/IResponseModel";
import { AuthUtils } from "app/core/auth/auth.utils";
import { UserService } from "app/core/user/user.service";
import { Observable, of, switchMap, throwError } from "rxjs";
import { PatientAdapter } from "@adapters/PatientAdapter";
import { DoctorAdapter } from "@adapters/DoctorAdapter";
import { Doctor } from "@models/IDoctor";
import { Patient, PatientUser } from "@models/IPatient";
import { UserAdapter } from "@adapters/UserAdapter";

@Injectable({ providedIn: "root" })
export class AuthService {
    private _authenticated: boolean = false;
    private _httpClient = inject(HttpClient);
    private _userService = inject(UserService);
    private _doctorService = inject(DoctorService);
    private _patientService = inject(PatientService);

    private _patientAdapter = new PatientAdapter();
    private _doctorAdapter = new DoctorAdapter();
    private _userAdapter = new UserAdapter();

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Setter & getter for user
     */
    set user(user: User) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    get user(): User | null {
        const storedUser = localStorage.getItem("user");
        return storedUser ? (JSON.parse(storedUser) as User) : null;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Forgot password
     */
    forgotPassword(email: string): Observable<any> {
        return this._httpClient.post("api/auth/forgot-password", email);
    }

    /**
     * Reset password
     */
    resetPassword(password: string): Observable<any> {
        return this._httpClient.post("api/auth/reset-password", password);
    }

    /**
     * Sign in
     */
    signIn(credentials: { email: string; password: string }, type: string): Observable<any> {
        if (this._authenticated) {
            return throwError("User is already logged in.");
        }

        if (type === "patient") {
            return this._patientService.loginPatient(credentials).pipe(
                switchMap((response: ResponseModel<PatientEntity>) => {
                    const patient = this._patientAdapter.convertEntityToModel(response.item);
                    const user: User = { ...patient, email: credentials.email, type: "patient" };

                    this.user = user;
                    this._authenticated = true;
                    this._userService.user = user;

                    return of(user);
                })
            );
        } else if (type === "doctor") {
            return this._doctorService.loginDoctor(credentials).pipe(
                switchMap((response: ResponseModel<DoctorEntity>) => {
                    const doctor = this._doctorAdapter.convertEntityToModel(response.item);
                    const user: User = { ...doctor, email: credentials.email, type: "doctor" };

                    this.user = user;
                    this._authenticated = true;
                    this._userService.user = user;

                    return of(user);
                })
            );
        }

        return throwError("Invalid user type.");
    }

    /**
     * Sign out
     */
    signOut(): Observable<any> {
        localStorage.removeItem("user");
        this._authenticated = false;
        return of(true);
    }
    /**
     * Sign up Patient
     *
     * @param patient
     */
    signUpPatient(patient: PatientUser): Observable<PatientUser> {
        const patientEntity = this._patientAdapter.convertModelToEntity(patient);
        return this._patientService.registerPatient(patientEntity).pipe(
            switchMap((response: ResponseModel<PatientEntity>) => {
                // Convertir PatientEntity a PatientUser usando el adaptador
                const newPatient = this._patientAdapter.convertEntityToModel(response.item);

                // Asignar el paciente autenticado al servicio de usuario
                const user = this._userAdapter.convertEntityToModel(newPatient); // Convertir a modelo User
                this.user = user;
                this._userService.user = user; // Asigna al servicio de usuario como User
                this._authenticated = true;

                return of(newPatient);
            })
        );
    }

    /**
     * Sign up Doctor
     *
     * @param doctor
     */
    signUpDoctor(doctor: Doctor): Observable<Doctor> {
        const doctorEntity = this._doctorAdapter.convertModelToEntity(doctor);
        return this._doctorService.registerDoctor(doctorEntity).pipe(
            switchMap((response: ResponseModel<DoctorEntity>) => {
                // Convertir DoctorEntity a Doctor usando el adaptador
                const newDoctor = this._doctorAdapter.convertEntityToModel(response.item);

                // Asignar el doctor autenticado al servicio de usuario
                const user = this._userAdapter.convertEntityToModel(newDoctor); // Convertir a modelo User
                this._userService.user = user; // Asigna al servicio de usuario como User
                this._authenticated = true;

                return of(newDoctor);
            })
        );
    }

    /**
     * Check authentication status
     */
    check(): Observable<boolean> {
        if (this._authenticated) {
            return of(true);
        }

        if (!this.user) {
            return of(false);
        }

        return of(true);
    }
}
