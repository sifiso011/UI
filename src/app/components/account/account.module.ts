import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LeftMenuComponent } from 'src/app/left-menu/left-menu.component';

import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    DashboardModule
  ]
})
export class AccountModule { }
