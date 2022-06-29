import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'projects/ng-dynamic-component/src/public-api';
import { DashboardRoutingModule } from 'src/app/dashboard/dashboard-routing.module';
import { AtlpDashboardLibComponent } from './components/atlp-dashboard-lib/atlp-dashboard-lib.component';
import { AtlpDashboardWidgetComponent } from './components/atlp-dashboard-widget/atlp-dashboard-widget.component';

@NgModule({
  declarations: [AtlpDashboardLibComponent, AtlpDashboardWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule,
    MatFormFieldModule,
    DynamicModule
  ],
  exports: [
    AtlpDashboardLibComponent,
    AtlpDashboardLibComponent,
    AtlpDashboardWidgetComponent
  ]
})
export class AtlpDashboardLibModule {}
