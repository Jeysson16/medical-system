import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { FuseCardComponent } from "@fuse/components/card";
import { FuseAlertComponent } from "@fuse/components/alert";
import { SharedModule } from "app/shared/shared.module";
import { AuthUnlockSessionComponent } from "app/modules/auth/unlock-session/unlock-session.component";
import { authUnlockSessionRoutes } from "app/modules/auth/unlock-session/unlock-session.routing";

@NgModule({
    declarations: [AuthUnlockSessionComponent],
    imports: [
        RouterModule.forChild(authUnlockSessionRoutes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        FuseCardComponent,
        FuseAlertComponent,
        SharedModule
    ]
})
export class AuthUnlockSessionModule {}
