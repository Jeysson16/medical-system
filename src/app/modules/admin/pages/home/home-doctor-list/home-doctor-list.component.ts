import { ChangeDetectionStrategy, Component, computed, inject, input, Input, SimpleChanges } from "@angular/core";
import { Capsule } from "@models/ICapsule";
import { Patient, PatientUser } from "@models/IPatient";
import { CapsuleService } from "@services/capsule.service";
import { AuthService } from "app/core/auth/auth.service";
import { User } from "app/core/user/user.types";

@Component({
    selector: "ui-home-doctor-list",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./home-doctor-list.component.html",
    styleUrl: "./home-doctor-list.component.scss"
})
export class HomeDoctorListComponent {
    private _authService = inject(AuthService);
    user: User;
    @Input() capsules: Capsule[];

    private _capsuleService = inject(CapsuleService);
    // Propiedades derivadas para mostrar datos
    capsulesProcessed: number = 0;
    anomaliesDetected: number = 0;
    activeCapsules: number = 0;

    ngOnInit(): void {
        // Asignar datos del usuario desde el servicio
        this.user = this._authService.user;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes["capsules"]) {
            this.updateIndicators();
        }
    }
    updateIndicators(): void {
        // Número total de cápsulas
        this.capsulesProcessed = this.capsules.length;
        console.log(this.capsules);

        // Contar cápsulas activas
        this.activeCapsules = this.capsules.filter(capsule => capsule.status === "activo").length;

        // Contar anomalías detectadas
        this.anomaliesDetected = this.capsules.reduce((total, capsule) => total + (capsule.anomalies || 0), 0);
    }
}
