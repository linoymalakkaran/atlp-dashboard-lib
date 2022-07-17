import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashDesignerComponent } from './components/dash-designer/dash-designer.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { DashboardDesignerModule } from 'projects/dashboard-designer/src/public-api';

@NgModule({
  declarations: [DashHomeComponent, DashDesignerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule,
    MatFormFieldModule,
    DashboardDesignerModule
  ]
})
export class DashboardModule {}
