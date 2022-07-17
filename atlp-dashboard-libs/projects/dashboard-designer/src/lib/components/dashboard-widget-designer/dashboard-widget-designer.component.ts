import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  Draggable,
  GridsterConfig,
  PushDirections,
  Resizable
} from 'angular-gridster2';
import { DashboardDesignerService } from '../../services/dashboard-designer.service';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'ngx-dashboard-widget-designer',
  templateUrl: './dashboard-widget-designer.component.html',
  styleUrls: ['./dashboard-widget-designer.component.scss']
})
export class DashboardWidgetDesignerComponent implements OnInit {
  savedDashLayout = [];
  options: Safe;
  dashboard: any = [];
  activeLayout: any = null;
  @Input() widgetSelectFn: any;
  @Input() widgetOptions: any;

  constructor(
    private dashboardDesignerService: DashboardDesignerService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashboardDesignerService.selectedLayoutEvent.subscribe(griditem => {
      this.options = griditem.options;
      this.dashboard = griditem.dashboardItems;
      this.activeLayout = griditem;
      this.ref.detectChanges();
    });
    this.dashboardDesignerService.getSavedLayouts('moduleId');
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
