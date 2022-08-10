import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { QueryComponent } from './query.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [QueryComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
    DashboardModule
  ]
})
export class QueryModule { }
