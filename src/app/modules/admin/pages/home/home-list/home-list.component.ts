import { NgFor, DecimalPipe } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { EcAnomaliesComponent } from "@components/ec-anomalies/ec-anomalies.component";
import { EcImageGalleryComponent } from "@components/ec-image-gallery/ec-image-gallery.component";
import { EcLiveProgressComponent } from "@components/ec-live-progress/ec-live-progress.component";
import { EcNotesComponent } from "@components/ec-notes/ec-notes.component";
import { EcPatientProfileComponent } from "@components/ec-patient-profile/ec-patient-profile.component";
import { EcVitalSignsComponent } from "@components/ec-vital-signs/ec-vital-signs.component";
import { TranslocoModule } from "@jsverse/transloco";
import { NgApexchartsModule } from "ng-apexcharts";

@Component({
    selector: "ui-home-list",
    standalone: true,
    imports: [
        TranslocoModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        EcAnomaliesComponent,
        EcLiveProgressComponent,
        EcPatientProfileComponent,
        EcVitalSignsComponent,
        EcImageGalleryComponent,
        EcNotesComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: "./home-list.component.html",
    styleUrl: "./home-list.component.scss"
})
export class HomeListComponent {}
