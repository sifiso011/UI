import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'quick-links', loadChildren: () => import('./components/quick/quick.module').then(m => m.QuickModule)
  },
  {
    path: 'account-manager', loadChildren: () => import('./components/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'meter-readings', loadChildren: () => import('./components/meter/meter.module').then(m => m.MeterModule)
  },

  {
    path: 'manage-personal-information', loadChildren: () => import('./components/info/info.module').then(m => m.InfoModule)
  },

  {
    path: 'manage-company-information', loadChildren: () => import('./components/companyInfo/company.module').then(m => m.CompanyModule)
  },

  {
    path: 'lodge-new-query', loadChildren: () => import('./components/query/query.module').then(m => m.QueryModule)
  },



  {
    path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
