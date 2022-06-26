import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashHomeComponent } from './dash-home/dash-home.component';
import { DashDesignerComponent } from './dash-designer/dash-designer.component';
import { DashService } from './services/dash.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';

@NgModule({
  declarations: [DashHomeComponent, DashDesignerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule
  ]
})
export class DashboardModule {}
