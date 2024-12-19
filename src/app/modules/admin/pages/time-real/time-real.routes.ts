import { Routes } from "@angular/router";
import { TimeRealCaptureContainerComponent } from "./time-real-capture-container/time-real-capture-container.component";
import { HomeListComponent } from "./home-list/home-list.component";
import { CompactComponent } from "./compact/compact.component";

export default [
    {
        path: "reproduccion",
        component: TimeRealCaptureContainerComponent
    },
    {
        path: "resultados",
        component: HomeListComponent
    },
    {
        path: "reporte",
        component: CompactComponent
    }
] as Routes;
