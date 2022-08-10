import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeterRoutingModule } from './meter-routing.module';
import { MeterComponent } from './meter.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [MeterComponent],
  imports: [
    CommonModule,
    MeterRoutingModule,
    DashboardModule
  ]
})
export class MeterModule { }
