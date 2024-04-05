import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
export interface userData {
  name: string;
  email: string;
  profileImg: string;
  role: string;
  mobileNr: string;
}
@Component({
  selector: 'app-view-profile-modal',
  standalone: true,
  imports: [],
  templateUrl: './view-profile-modal.component.html',
  styleUrl: './view-profile-modal.component.scss',
})
export class ViewProfileModalComponent {
  activeModal = inject(NgbActiveModal);

  @Input() user;
}
