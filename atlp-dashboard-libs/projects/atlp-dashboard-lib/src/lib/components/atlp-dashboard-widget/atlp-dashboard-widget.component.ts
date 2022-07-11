import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlp-dashboard-widget',
  templateUrl: './atlp-dashboard-widget.component.html',
  styleUrls: ['./atlp-dashboard-widget.component.scss']
})
export class AtlpDashboardWidgetComponent {
  widgetComponent: any = null;
  @Input() widgetOptions: any = null;
  @Input() widgetSelectFn?: (widgetName: string) => string;

  constructor() {}

  widgetSelect(widgetName: string) {
    this.widgetComponent = this.widgetSelectFn(widgetName);
  }
}
