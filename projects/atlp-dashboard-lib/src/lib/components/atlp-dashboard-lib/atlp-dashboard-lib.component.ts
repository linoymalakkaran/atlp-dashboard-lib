import { Component, Input } from '@angular/core';

@Component({
  selector: 'atlp-dashboard-lib',
  templateUrl: './atlp-dashboard-lib.component.html',
  styleUrls: ['./atlp-dashboard-lib.component.scss'],
  styles: []
})
export class AtlpDashboardLibComponent {
  @Input() dashboard: any = null;
  @Input() options: any = null;
  @Input() widgetOptions: any = null;
  @Input() widgetSelectFn?: (widgetName: string) => string;

  constructor() {}
}
