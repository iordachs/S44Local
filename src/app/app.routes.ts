import { Routes } from '@angular/router';
import { CompaniesComponent } from './aisaac-pages/administration/companies/companies.component';
import { RolesComponent } from './aisaac-pages/administration/roles/roles.component';

export const routes: Routes = [
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
