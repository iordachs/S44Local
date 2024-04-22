import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class PasswordValidators {
  static createOldPassValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value;
      if (!val) {
        return null;
      }
      const invalidOldPassword = val !== '1234' ? true : false;
      return invalidOldPassword ? { invalidOldPassword: true } : null;
    };
  }

  static createMatchingPassValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = control.get('newPassword');
      const confirmPassword = control.get('confirmPassword');
      if (newPassword !== confirmPassword) {
        return { matchingNewPasswords: true };
      }
      return null;
    };
  }
}
