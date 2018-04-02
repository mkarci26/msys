import { Routes } from '@angular/router';
import { errorComponent } from "./examples/error.component";

export const AppRoutes: Routes = [
    { path: '', loadChildren: './modules/dashboard/dashboard.module#DashboardModule' },
    { path: '404', component: errorComponent },
    {path: '**', redirectTo: '404', pathMatch: 'full'},
];
