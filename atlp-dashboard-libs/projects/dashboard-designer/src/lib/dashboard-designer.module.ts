import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { GridsterModule } from 'angular-gridster2';
import { AngularResizeElementModule } from 'angular-resize-element';
import { DynamicModule } from 'projects/ng-dynamic-component/src/public-api';
import { DashboardDesignerComponent } from './components/dashboard-designer/dashboard-designer.component';
import { DashboardWidgetDesignerComponent } from './components/dashboard-widget-designer/dashboard-widget-designer.component';
import { DashboardWidgetComponent } from './components/dashboard-widget-designer/dashboard-widget/dashboard-widget.component';
import { CenterBlockComponent, LeftBlockComponent, MainLayoutComponent, RightBlockComponent, TopBlockComponent } from './layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    DashboardWidgetDesignerComponent,
    DashboardWidgetComponent,
    DashboardDesignerComponent,
    MainLayoutComponent,
    LeftBlockComponent,
    RightBlockComponent,
    CenterBlockComponent,
    TopBlockComponent
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
    AngularResizeElementModule,
    DragDropModule,
    TabsModule.forRoot(),

  ],
  exports: [
    DashboardWidgetDesignerComponent,
    DashboardWidgetComponent,
    DashboardDesignerComponent,
    MainLayoutComponent,
    LeftBlockComponent,
    RightBlockComponent,
    CenterBlockComponent,
    TopBlockComponent,
    DynamicModule,
    AngularResizeElementModule,
    DragDropModule,

  ]
})
export class DashboardDesignerModule {}
