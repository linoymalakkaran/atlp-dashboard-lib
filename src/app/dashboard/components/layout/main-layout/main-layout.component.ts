import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createGridInstance } from 'projects/dashboard-designer/src/lib/models/dashboard.models';
import { DashboardDesignerService } from 'projects/dashboard-designer/src/public-api';
import { BehaviorSubject } from 'rxjs';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  isCollapsed = false;
  panelOpenState = true;

  savedDashLayout: createGridInstance[] = [];

  constructor(
    private _icon: IconsService,
    private ref: ChangeDetectorRef,
    private route: Router,
    private dashboardDesignerService: DashboardDesignerService
  ) {
    this._icon.registerIcons(this.icons);
  }
  ngOnInit(): void {
    this.dashboardDesignerService.savedGridItems$.subscribe(
      (gridLayoutItems: createGridInstance[]) => {
        this.savedDashLayout = gridLayoutItems;
        this.toggleSidebar(null);
        this.panelOpenState = true;
        this.ref.detectChanges();
      }
    );
  }

  loadDashboard(item): void {
    this.toggleSidebar(null);
    this.route.navigate(['dashboard/dashhome']);
    setTimeout(() => {
      localStorage.setItem('activeLayout', item);
      this.dashboardDesignerService.setActiveLayout(item);
    }, 1000);
  }

  toggleSidebar(e): void {
    this.isCollapsed = !this.isCollapsed;
  }

  private get icons(): Array<string> {
    return ['icon-dashboard'];
  }
}
