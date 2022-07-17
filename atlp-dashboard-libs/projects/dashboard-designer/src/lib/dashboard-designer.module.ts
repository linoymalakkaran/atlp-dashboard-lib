import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { DynamicModule } from 'projects/ng-dynamic-component/src/public-api';
import { DashboardDesignerComponent } from './components/dashboard-designer/dashboard-designer.component';
import { DashboardWidgetDesignerComponent } from './components/dashboard-widget-designer/dashboard-widget-designer.component';
import { DashboardWidgetComponent } from './components/dashboard-widget-designer/dashboard-widget/dashboard-widget.component';

@NgModule({
  declarations: [
    DashboardWidgetDesignerComponent,
    DashboardWidgetComponent,
    DashboardDesignerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    GridsterModule,
    MatMenuModule,
    MatFormFieldModule,
    DynamicModule,
  ],
  exports: [
    DashboardWidgetDesignerComponent,
    DashboardWidgetComponent,
    DashboardDesignerComponent,
    DynamicModule
  ]
})
export class DashboardDesignerModule {}
