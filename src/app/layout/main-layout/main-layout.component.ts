import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { createGridInstance } from 'src/app/dashboard/models/dash.models';
import { DashService } from 'src/app/dashboard/services/dash.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isCollapsed = false;
  panelOpenState = false;

  savedDashLayout: any = [];

  constructor(
    private _icon: IconsService,
    private dashService: DashService,
    private ref: ChangeDetectorRef,
    private route: Router
  ) {
    this._icon.registerIcons(this.icons);
  }
  ngOnInit(): void {
    const item = {
      layoutName: 'Layout One',
      layoutId: '1',
      options: null,
      gridItemList: [
        { cols: 2, rows: 1, y: 0, x: 0 },
        { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
        { cols: 1, rows: 1, y: 0, x: 4 },
        { cols: 1, rows: 1, y: 2, x: 5 },
        { cols: 1, rows: 1, y: 1, x: 0 },
        { cols: 1, rows: 1, y: 1, x: 0 }
      ]
    };

    this.prepareDashList(item);

    const itemTwo = {
      layoutName: 'Layout Two',
      layoutId: '2',
      options: null,
      gridItemList: [
        { cols: 2, rows: 1, y: 0, x: 0 },
        { cols: 2, rows: 2, y: 0, x: 2, hasContent: true },
        { cols: 1, rows: 1, y: 0, x: 4 },
        { cols: 1, rows: 1, y: 2, x: 5 },
        { cols: 1, rows: 1, y: 1, x: 0 },
        { cols: 1, rows: 1, y: 1, x: 0 }
      ]
    };

    this.prepareDashList(itemTwo);
  }

  prepareDashList(item) {
    this.savedDashLayout.push(item);
  }

  loadDashboard(item): void {
    this.route.navigate(['dashboard/dashhome']);
    setTimeout(() => {
      let gridObj = new createGridInstance();
      item.options = gridObj.options;
      localStorage.setItem('activeLayout', item);
      this.dashService.sendDataByEvent(item);
    }, 1000);
  }

  toggleSidebar(e): void {
    this.isCollapsed = !this.isCollapsed;
  }

  private get icons(): Array<string> {
    return [
      'pdf-icon',
      'jpg-icon',
      'pdf-file-icon',
      'png-icon',
      'file-remove',
      'folder',
      'view-files',
      'icon-calender',
      'icon-profile',
      'management-icon',
      'folder-1439',
      'skill-8805',
      'burger-menu',
      'icon-dashboard'
    ];
  }
}
