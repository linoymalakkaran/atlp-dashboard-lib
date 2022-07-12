import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { AtlpDashboardLibModule } from 'atlp-dashboard-lib';
import { DashDesignerComponent } from './components/dashboard-designer/dashboard-designer.component';
import { DashHomeComponent } from './components/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [DashHomeComponent, DashDesignerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule,
    MatFormFieldModule,
    AtlpDashboardLibModule
  ],
  exports: [DashHomeComponent, DashDesignerComponent]
})
export class DashboardDesignerModule {}
