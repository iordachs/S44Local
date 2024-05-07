import {
  faFileLines,
  faSitemap,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { CompaniesUsersComponent } from './tabs/companies-users/companies-users.component';
export const menuItems = [
  {
    title: 'Users',
    icon: faUser,
    id: 'comp-user-tab',
    template: CompaniesUsersComponent,
  },
  {
    title: 'Business Units',
    icon: faSitemap,
    id: 'comp-bu-tab',
    template: CompaniesUsersComponent,
  },
  {
    title: 'Details',
    icon: faFileLines,
    id: 'comp-details-tab',
    template: CompaniesUsersComponent,
  },
];
