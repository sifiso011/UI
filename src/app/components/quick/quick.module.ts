import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickRoutingModule } from './quick-routing.module';
import { QuickComponent } from './quick.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [QuickComponent],
  imports: [
    CommonModule,
    QuickRoutingModule,
    DashboardModule
  ]
})
export class QuickModule { }
