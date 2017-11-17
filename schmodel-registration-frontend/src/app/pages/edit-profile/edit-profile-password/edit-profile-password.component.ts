import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ValidationService } from '../../../shared/services';
import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-profile-password',
  templateUrl: './edit-profile-password.component.html',
  styleUrls: ['./edit-profile-password.component.scss']
})
export class EditProfilePasswordComponent implements OnInit {

  editPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editPasswordForm = formBuilder.group({
      'oldPassword': ['', [Validators.required, ValidationService.passwordValidator]],
      'newPassword': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPassword': ['', [Validators.required, ValidationService.passwordValidator]]
    }, {validator: this.areEqual});
  }

  ngOnInit() {
  }

  areEqual(fg: FormGroup) {
    const { newPassword, confirmPassword } = fg.controls;
    if (newPassword.value === confirmPassword.value) {
      return null;
    } else {
      return { 'passwordNotMatch': true };
    }
  }

  onSubmit() {
    const { oldPassword, newPassword } = this.editPasswordForm.value;
    this.profileService.updatePassword(oldPassword, newPassword).subscribe( res => {
      console.log('edit password = ', res);
    }, error => {
      console.log(error);
    });
  }

}
