import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { menuItems } from './companies.menuitems';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [FontAwesomeModule, NgbNavModule, CommonModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss',
})
export class CompaniesComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  companiesTabHeaders = menuItems;
  active!: number;
}
