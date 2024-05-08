import { Component, OnInit} from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-edit-new-company',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,MatDividerModule,
    MatIconModule,MatSelectModule,MatCheckboxModule,ReactiveFormsModule,MatInputModule,
    MatButtonModule],
  templateUrl: './add-edit-new-company.component.html',
  styleUrl: './add-edit-new-company.component.scss'
})
export class AddEditNewCompanyComponent implements OnInit {

  myForm: FormGroup;
  activeModal: any;
  constructor(public _fb: FormBuilder,public _dialogRef: MatDialogRef<AddEditNewCompanyComponent>) {
    this.myForm = this._fb.group({
      companyName: [''],
      belongsTo: [''],
      timeZone: [''],
      country: [''],
      industryType: [''],
      partOfGroup: [false],
      groupName: [''],
      newGroupName: ['']
    });
  }
  ngOnInit(): void {

  }

  onClick() {
   this._dialogRef.close();
  }

}
