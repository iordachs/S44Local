import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { menuItems } from './companies.menuitems';
import { TreeSidebarComponent } from "./tree-sidebar/tree-sidebar.component";

@Component({
    selector: 'app-companies',
    standalone: true,
    templateUrl: './companies.component.html',
    styleUrl: './companies.component.scss',
    imports: [FontAwesomeModule, NgbNavModule, CommonModule, TreeSidebarComponent]
})
export class CompaniesComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  companiesTabHeaders = menuItems;
  active!: number;
}
