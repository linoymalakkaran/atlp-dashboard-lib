import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'ng-dynamic-component';
import { AtlpDashboardLibComponent } from './components/atlp-dashboard-lib/atlp-dashboard-lib.component';
import { AtlpDashboardWidgetComponent } from './components/atlp-dashboard-widget/atlp-dashboard-widget.component';

@NgModule({
  declarations: [AtlpDashboardLibComponent, AtlpDashboardWidgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule,
    MatFormFieldModule,
    DynamicModule
  ],
  exports: [AtlpDashboardLibComponent, AtlpDashboardWidgetComponent]
})
export class AtlpDashboardLibModule {}
