import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleBarChartComponent } from './components/sample-bar-chart.component';
import { RouterModule } from '@angular/router';
import { BarChartComponent } from '../../shared/bar-chart/bar-chart.component';

const routes = [
  {
    path: '',
    component: SampleBarChartComponent,
  },
];

@NgModule({
  declarations: [SampleBarChartComponent, BarChartComponent],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [SampleBarChartComponent, BarChartComponent]
})
export class SampleBarChartModule {}
