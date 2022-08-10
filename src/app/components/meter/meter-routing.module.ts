import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeterComponent } from './meter.component';

const routes: Routes = [
  {
    path: '',
    component: MeterComponent
  },
  {
    path: 'meter',
    component: MeterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeterRoutingModule { }
