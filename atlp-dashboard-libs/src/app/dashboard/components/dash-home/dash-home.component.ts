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
    ismfeWidgets: true,
    report: { excel: true, pdf: true },
    widgetTypes: ['bar-chart', 'notification', 'pie-chart'],
    mfeWidgetTypes: [
      {
        displayName: 'Flight Widget',
        description: 'Flight Widget',
        hostUrl: 'http://127.0.0.1:5555/flights_widget/remoteEntry.js',
        componentName: 'FlightsSearchStandalone',
        type: 'module',
        exposedModule: './Component'
      },
      {
        displayName: 'Bar Chart',
        description: 'Bar Chart',
        hostUrl: 'http://127.0.0.1:5555/dashboard-widgets/remoteEntry.js',
        componentName: 'SampleBarChartComponent',
        type: 'module',
        exposedModule: './Component'
      }
    ]
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
