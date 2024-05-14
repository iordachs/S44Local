import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import {} from '@ng-bootstrap/ng-bootstrap';
import { AddNewDrpComponent } from './add-new-drp/add-new-drp.component';
import { ContextDrpComponent } from './context-drp/context-drp.component';

@Component({
  selector: 'app-companies-users',
  standalone: true,
  imports: [FontAwesomeModule, AddNewDrpComponent, ContextDrpComponent],
  templateUrl: './companies-users.component.html',
  styleUrl: './companies-users.component.scss',
})
export class CompaniesUsersComponent {
  faXmark = faXmark;
  faMagnifyingGlass = faMagnifyingGlass;
}
