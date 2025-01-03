import { Route } from "@angular/router";
import { initialDataResolver } from "app/app.resolvers";
import { AuthGuard } from "app/core/auth/guards/auth.guard";
import { NoAuthGuard } from "app/core/auth/guards/noAuth.guard";
import { LayoutComponent } from "app/layout/layout.component";

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
    // Redirect empty path to '/dashboards/project'
    { path: "", pathMatch: "full", redirectTo: "inicio" },

    // Redirect signed-in user to the '/dashboards/project'
    //
    // After the user signs in, the sign-in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {
        path: "signed-in-redirect",
        pathMatch: "full",
        redirectTo: "inicio"
    },

    // Auth routes for guests
    {
        path: "",
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: "empty"
        },
        children: [
            { path: "confirmation-required", loadChildren: () => import("app/modules/auth/confirmation-required/confirmation-required.routes") },
            { path: "forgot-password", loadChildren: () => import("app/modules/auth/forgot-password/forgot-password.routes") },
            { path: "reset-password", loadChildren: () => import("app/modules/auth/reset-password/reset-password.routes") },
            { path: "sign-in", loadChildren: () => import("app/modules/auth/sign-in/sign-in.routes") },
            { path: "sign-up", loadChildren: () => import("app/modules/auth/sign-up/sign-up.routes") }
        ]
    },

    // Auth routes for authenticated users
    {
        path: "",
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: "empty"
        },
        children: [
            {
                path: "sign-out",
                loadChildren: () => import("app/modules/auth/sign-out/sign-out.module").then(m => m.AuthSignOutModule)
            }
        ]
    },
    // Landing routes
    {
        path: "",
        component: LayoutComponent,
        data: {
            layout: "empty"
        },
        children: [{ path: "home", loadChildren: () => import("app/modules/landing/home/home.routes") }]
    },

    // Admin routes
    {
        path: "",
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        children: [
            // Home
            { path: "inicio", loadChildren: () => import("app/modules/admin/pages/home/home.routes") },
            // Pacientes
            { path: "pacientes", loadChildren: () => import("app/modules/admin/pages/patients/patients-list.routes") },
            // Pacientes
            { path: "tiempo-real", loadChildren: () => import("app/modules/admin/pages/time-real/time-real.routes") },

            { path: "soporte", loadChildren: () => import("app/modules/admin/pages/help-center/help-center.routes") },

            // 404 & Catch all
            { path: "404-not-found", pathMatch: "full", loadChildren: () => import("app/modules/admin/pages/error/error-404/error-404.routes") },
            { path: "**", redirectTo: "404-not-found" }
        ]
    }
];
