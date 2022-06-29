import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  Draggable,
  GridsterConfig,
  GridsterItem,
  PushDirections,
  Resizable
} from 'angular-gridster2';
import { WidgetsBarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { NotificationComponent } from 'src/app/widgets/notification/notification.component';
import { WidgetsPieChartComponent } from 'src/app/widgets/pie-chart/pie-chart.component';
import { DashBoardService } from '../services/dash.service';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent implements OnInit {
  savedDashLayout = [];
  options: Safe;
  dashboard: any = [];
  activeLayout: any = null;
  widgetOptions: any = null;

  constructor(
    private dashService: DashBoardService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.widgetOptions = {
      filter: true,
      report: { excel: true, pdf: true },
      widgetTypes: ['bar-chart', 'notification', 'pie-chart']
    };
    this.dashService.dataByEvent.subscribe(griditem => {
      this.options = griditem.options;
      this.dashboard = griditem.dashboardItems;
      this.activeLayout = griditem;
      this.ref.detectChanges();
    });
  }

  widgetSelectFn(widgetName): any {
    switch (widgetName) {
      case 'bar-chart': {
        return WidgetsBarChartComponent;
      }
      case 'notification': {
        return NotificationComponent;
      }
      case 'pie-chart': {
        return WidgetsPieChartComponent;
      }
      default:
        return null;
    }
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
