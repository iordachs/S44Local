import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-companies-users',
  standalone: true,
  imports: [FontAwesomeModule, NgbDropdown],
  templateUrl: './companies-users.component.html',
  styleUrl: './companies-users.component.scss',
})
export class CompaniesUsersComponent {
  faXmark = faXmark;
  faMagnifyingGlass = faMagnifyingGlass;
}
