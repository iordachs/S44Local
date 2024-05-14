import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-context-drp',
  standalone: true,
  imports: [FontAwesomeModule, NgbDropdownModule],
  templateUrl: './context-drp.component.html',
  styleUrl: './context-drp.component.scss',
})
export class ContextDrpComponent {
  faEllipsisVertical = faEllipsisVertical;
}
