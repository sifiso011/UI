import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    DashboardModule
  ]
})
export class CompanyModule { }
