import { NgIf } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faImage,
  faKey,
  faPen,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-view-profile-modal',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './view-profile-modal.component.html',
  styleUrl: './view-profile-modal.component.scss',
})
export class ViewProfileModalComponent implements OnInit {
  faTimes = faTimes;
  faImage = faImage;
  faKey = faKey;
  faPen = faPen;
  activeModal = inject(NgbActiveModal);
  profileForm!: FormGroup;
  passwordForm!: FormGroup;
  origOperation = '';
  passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*()\-_])[A-Za-z\d@#$!%^&*()\-_]{8,30}$/;
  @Input() user;
  @Input() operation!: string;

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.profileForm = new FormGroup({
      name: new FormControl(this.user.name, { nonNullable: true }),
      email: new FormControl(this.user.email, { nonNullable: true }),
      role: new FormControl(this.user.role, { nonNullable: true }),
      mobileNr: new FormControl(this.user.mobileNr, { nonNullable: true }),
    });

    this.passwordForm = new FormGroup(
      {
        old: new FormControl('', [
          Validators.required,
          PasswordValidators.createOldPassValidator(),
        ]),
        new: new FormControl('', [
          Validators.required,
          Validators.pattern(this.passwordPattern),
        ]),
        confirm: new FormControl('', [
          Validators.required,
          Validators.pattern(this.passwordPattern),
        ]),
      },
      { validators: PasswordValidators.createMatchingPassValidator() },
    );

    if (this.operation === 'view') {
      this.profileForm.disable();
    }
    this.origOperation = this.operation;
  }
  onSubmit() {
    this.activeModal.close(this.profileForm.value);
  }
  onSubmitPasswordChange() {
    console.log('Password changed');
    this.activeModal.close(this.passwordForm.value);
  }
  onCancel() {
    if (this.origOperation === this.operation)
      this.activeModal.dismiss('Canceled');
    else {
      this.origOperation != 'edit' ? this.profileForm.disable() : '';
      if (this.operation === 'editPassword') this.passwordForm.reset();
      if (this.operation === 'edit')
        Object.entries(this.profileForm.controls).forEach((element) => {
          element[1].reset();
        });
      this.operation = this.origOperation;
    }
  }
  onEdit() {
    this.profileForm.enable();
    this.operation = 'edit';
  }
  onEditPass() {
    this.operation = 'editPassword';
  }
  get newPassword() {
    return this.passwordForm.get('new');
  }
  get confirmPassword() {
    return this.passwordForm.get('confirm');
  }
}
