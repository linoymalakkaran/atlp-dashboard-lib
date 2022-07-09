import { Component } from '@angular/core';
import { WidgetsBarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { NotificationComponent } from 'src/app/widgets/notification/notification.component';
import { WidgetsPieChartComponent } from 'src/app/widgets/pie-chart/pie-chart.component';

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.scss']
})
export class DashHomeComponent {
  widgetOptions = {
    filter: true,
    report: { excel: true, pdf: true },
    widgetTypes: ['bar-chart', 'notification', 'pie-chart']
  };
  constructor() {}

  widgetSelect(widgetName): any {
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
}
