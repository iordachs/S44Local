import { Routes } from '@angular/router';
import { CompaniesComponent } from './aisaac-pages/administration/companies/companies.component';
import { RolesComponent } from './aisaac-pages/administration/roles/roles.component';
import { DashboardComponent } from './aisaac-pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    data: { breadcrumb: 'Dashboard' },
  },
  {
    path: 'administration',
    title: 'Administration',
    data: { breadcrumb: 'Administration' },
    children: [
      {
        path: 'companies',
        component: CompaniesComponent,
        title: 'Companies',
        data: { breadcrumb: 'Companies' },
      },
      {
        path: 'roles',
        component: RolesComponent,
        title: 'Roles',
        data: { breadcrumb: 'Roles' },
      },
    ],
  },
];
