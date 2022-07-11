import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { createGridInstance } from '../models/dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class DashboardDesignerService {
  selectedLayoutEvent: EventEmitter<any> = new EventEmitter<any>();
  savedGridItems: createGridInstance[] = [];
  savedGridItems$: BehaviorSubject<createGridInstance[]> = new BehaviorSubject<
    createGridInstance[]
  >([]);

  constructor() {}

  saveLayoutByEvent(gridItem: createGridInstance) {
    this.savedGridItems.push(gridItem);
    this.savedGridItems$.next(this.savedGridItems);
  }

  setActiveLayout(data: createGridInstance) {
    this.selectedLayoutEvent.emit(data);
  }

  getSavedLayouts(moduleId: string) {
    //call api to get all saved layout by moduleId
    const gridItemList = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 2, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 }
    ];
    const gridItem = new createGridInstance();
    gridItem.setValue(false, 'Layout One', '1', gridItemList, null);
    this.savedGridItems.push(gridItem);
    this.savedGridItems$.next(this.savedGridItems);
  }
}
