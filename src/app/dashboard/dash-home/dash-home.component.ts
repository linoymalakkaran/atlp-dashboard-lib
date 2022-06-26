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
import { DashService } from '../services/dash.service';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'app-dash-home',
  templateUrl: './dash-home.component.html',
  styleUrls: ['./dash-home.component.css']
})
export class DashHomeComponent implements OnInit {
  savedDashLayout = [];
  options: Safe;
  dashboard: any = [];
  activeLayout: any = null;

  constructor(
    private dashService: DashService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dashService.dataByEvent.subscribe(griditem => {
      this.options = griditem.options;
      this.dashboard = griditem.gridItemList;
      this.activeLayout = griditem;
      this.ref.detectChanges();
    });
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
