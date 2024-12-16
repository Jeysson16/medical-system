import { Routes } from "@angular/router";
import { HomeContainerComponent } from "./home-container.component";
import { HomeDashboardService } from "@services/analytics.service";
import { inject } from "@angular/core";

export default [
    {
        path: "",
        component: HomeContainerComponent,
        resolve: {
            data: () => inject(HomeDashboardService).getData()
        }
    }
] as Routes;
