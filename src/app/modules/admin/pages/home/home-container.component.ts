import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { HomeListComponent } from "./home-list/home-list.component";
import { AuthService } from "app/core/auth/auth.service";
import { User } from "app/core/user/user.types";
import { HomeDoctorListComponent } from "./home-doctor-list/home-doctor-list.component";
import { CapsuleService } from "@services/capsule.service";
import { RequestOption } from "@shared/interfaces/IRequestOption";
import { CapsuleEntity } from "@entities/ICapsuleEntity";
import { ResponseModel } from "@shared/models/IResponseModel";
import { Capsule } from "@models/ICapsule";
import { CapsuleAdapter } from "@adapters/CapsuleAdapter";

@Component({
    selector: "app-home-container",
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [HomeListComponent, HomeDoctorListComponent],
    template: `@if(user.type=='patient'){ <ui-home-doctor-list class="w-full" [capsules]="capsules()"></ui-home-doctor-list>}@else{ <ui-home-list class="w-full"></ui-home-list>}`,
    styleUrl: "./home-container.component.scss"
})
export class HomeContainerComponent {
    private _authService = inject(AuthService);
    private readonly _capsuleService = inject(CapsuleService);
    private readonly _capsuleadapter = new CapsuleAdapter();
    user: User;

    capsules = signal<Capsule[]>([]);

    ngOnInit(): void {
        this.user = this._authService.user;
        this.loadInfoForCapsules();
    }

    loadInfoForCapsules(): void {
        const capsules: Capsule[] = [];

        for (let i = 0; i < this.user.capsules.length; i++) {
            const requestOption = new RequestOption();
            requestOption.resource = this.user.capsules[i];

            this._capsuleService.get(requestOption).subscribe({
                next: (data: ResponseModel<CapsuleEntity>) => {
                    const converted = this._capsuleadapter.convertEntityToModel(data.item);

                    // Asegurar que siempre sea un array
                    capsules.push(...(Array.isArray(converted) ? converted : [converted]));
                    this.capsules.set(capsules);
                    console.log(this.capsules());
                },
                error: err => {
                    console.error("Error al obtener información de la cápsula:", err);
                }
            });
        }

        // Actualizar la longitud de las cápsulas
        this._capsuleService.capsuleLength.set(capsules.length);
    }
}
