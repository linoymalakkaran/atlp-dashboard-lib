import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  GridsterConfig,
  Draggable,
  Resizable,
  PushDirections
} from 'angular-gridster2';
import { createGridInstance } from '../../models/dashboard.models';
import { DashboardDesignerService } from '../../services/dashboard-designer.service';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

@Component({
  selector: 'ngx-dashboard-designer',
  templateUrl: './dashboard-designer.component.html',
  styleUrls: ['./dashboard-designer.component.scss']
})
export class DashboardDesignerComponent implements OnInit {
  @Input() layout;

  savedDashLayout = [];
  options: Safe;
  dashboard: any = [];
  activeLayout: any = null;
  gridInstance: any;

  itemDetails:  any = [];

  form: FormGroup;

  constructor(
    private dashService: DashboardDesignerService,
    private fb: FormBuilder,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      layoutname: new FormControl('', [Validators.required]),
      layoutid: new FormControl('', [Validators.required])
    });

    this.gridInstance = new createGridInstance();

    this.options = this.gridInstance.options;
    this.dashboard = this.gridInstance.dashboardItems;
    this.ref.detectChanges();

    this.layout.resizeFn$.subscribe(() => {
      alert('resized');
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
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1, hasContent: true });
  }

  saveLayout() {
    this.gridInstance.setValue(
      false,
      this.form.controls.layoutname.value,
      this.form.controls.layoutid.value,
      this.dashboard,
      null
    );
    this.dashService.saveLayoutByEvent(this.gridInstance);
    alert('Layout Saved SuccessFully');
  }


  onDrop(event: any) {
    alert('Droped');
    // if (event.previousContainer === event.container) {
    //    moveItemInArray(event.container.data, 
    //       event.previousIndex, event.currentIndex);
    // } else {
    //    transferArrayItem(event.previousContainer.data,
    //    event.container.data,
    //    event.previousIndex,
    //    event.currentIndex);
    // }
 }
}
