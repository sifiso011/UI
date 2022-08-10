import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';


@NgModule({
  declarations: [DashboardComponent, LeftMenuComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports : [
    LeftMenuComponent
  ]
})
export class DashboardModule { }
