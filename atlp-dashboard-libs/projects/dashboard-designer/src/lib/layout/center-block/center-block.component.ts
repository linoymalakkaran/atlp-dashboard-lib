import { Component, Input, OnInit } from '@angular/core';
import { WidgetsBarChartComponent } from 'src/app/widgets/bar-chart/bar-chart.component';
import { NotificationComponent } from 'src/app/widgets/notification/notification.component';
import { WidgetsPieChartComponent } from 'src/app/widgets/pie-chart/pie-chart.component';

@Component({
  selector: 'app-center-block',
  templateUrl: './center-block.component.html',
  styleUrls: ['./center-block.component.scss']
})
export class CenterBlockComponent implements OnInit {
  @Input() layout: any;
  @Input() editMode: boolean;
  widgetOptions = {
    filter: true,
    report: { excel: true, pdf: true },
    widgetTypes: ['bar-chart', 'notification', 'pie-chart']
  };
  constructor() {}
  
  ngOnInit(): void {

  }

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

