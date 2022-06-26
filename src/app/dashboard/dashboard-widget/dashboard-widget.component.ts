import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent implements OnInit {
  @Input() sourceData: any = null;
  @Input() widgetType: any = null;
  @Input() widgetOptions: any = null;

  constructor() {}

  ngOnInit(): void {}
}
