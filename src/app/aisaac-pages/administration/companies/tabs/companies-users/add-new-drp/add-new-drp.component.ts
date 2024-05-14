import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-new-drp',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './add-new-drp.component.html',
  styleUrl: './add-new-drp.component.scss',
})
export class AddNewDrpComponent {}
