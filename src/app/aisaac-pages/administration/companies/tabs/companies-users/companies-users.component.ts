import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faEllipsisVertical,
  faInfo,
  faMagnifyingGlass,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { AddNewDrpComponent } from './add-new-drp/add-new-drp.component';
import { dataUsers } from './companies-users.usersdata';
import { ContextDrpComponent } from './context-drp/context-drp.component';
export interface usersDataRow {
  id: number;
  name: string;
  email: string;
  role: string;
  company: string;
  buAccess: string;
  status: string;
  mobileNr: string;
  factorAuth: boolean;
  emailMessage: boolean;
  smsMessage: boolean;
  createdBy: string;
  createdDate: string;
  updateBy: string;
  updatedDate: string;
}
@Component({
  selector: 'app-companies-users',
  standalone: true,
  imports: [
    FontAwesomeModule,
    AddNewDrpComponent,
    ContextDrpComponent,
    NgbPopover,
    NgbDropdownModule,
  ],
  templateUrl: './companies-users.component.html',
  styleUrl: './companies-users.component.scss',
})
export class CompaniesUsersComponent {
  faXmark = faXmark;
  faMagnifyingGlass = faMagnifyingGlass;
  faInfo = faInfo;
  faEllipsisVertical = faEllipsisVertical;
  usersData = dataUsers.data;
  usersCount = dataUsers.count;
  selection = new SelectionModel<usersDataRow>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.usersData.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.usersData.forEach((row) => this.selection.select(row));
  }
}
