import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
    imports: [
        CommonModule, FormsModule,
        RouterModule.forChild(DashboardRoutes),
    ],
    declarations: [DashboardComponent]
})

export class DashboardModule { }
