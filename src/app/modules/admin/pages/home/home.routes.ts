import { Routes } from "@angular/router";
import { HomeContainerComponent } from "./home-container.component";

export default [
    {
        path: "",
        component: HomeContainerComponent,
        // resolve: {
        //     data: () => inject(ProjectService).getData()
        // }
    }
] as Routes;
