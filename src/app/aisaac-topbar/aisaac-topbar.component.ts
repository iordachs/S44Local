/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faGears,
  faPen,
  faRightFromBracket,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { ViewProfileModalComponent } from './view-profile-modal/view-profile-modal.component';

export interface userData {
  name: string;
  email: string;
  profileImg: string;
  role: string;
  mobileNr: string;
}

@Component({
  selector: 'app-aisaac-topbar',
  standalone: true,
  imports: [FontAwesomeModule, ViewProfileModalComponent, BreadcrumbComponent],
  templateUrl: './aisaac-topbar.component.html',
  styleUrl: './aisaac-topbar.component.scss',
})
export class AIsaacTopbarComponent {
  faBars = faBars;
  faGears = faGears;
  faUser = faUser;
  faPen = faPen;
  faRightFromBracket = faRightFromBracket;

  user: userData = {
    name: 'Sagar Kesari',
    email: 'pod.pciaas@yopmail.com',
    profileImg: 'assets/images/undraw_profile.svg',
    role: 'PARTNER_ACCOUNT_OWNER',
    mobileNr: '+91-8899887766',
  };
  closeResult = '';
  private modalService = inject(NgbModal);
  open(operation: string): void {
    const modalRef = this.modalService.open(ViewProfileModalComponent);

    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.operation = operation;
    modalRef.result.then(
      (result) => {
        Object.getOwnPropertyNames(result).map(
          (x) => (this.user[x] = result[x]),
        );
      },
      (reason) => {
        console.log(reason);
      },
    );
  }
}
