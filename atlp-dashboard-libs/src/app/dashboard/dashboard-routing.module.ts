import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashDesignerComponent } from './components/dash-designer/dash-designer.component';
import { DashHomeComponent } from './components/dash-home/dash-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashhome',
    pathMatch: 'full'
  },
  {
    path: 'dashhome',
    component: DashHomeComponent
  },
  {
    path: 'designer',
    component: DashDesignerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
