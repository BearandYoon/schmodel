import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { ValidationService } from '../../../shared/services';
import { ProfileService } from '../../../core/services';
import { ValidationMessage } from '../../../shared/models';

@Component({
  selector: 'edit-profile-password',
  templateUrl: './edit-profile-password.component.html',
  styleUrls: ['./edit-profile-password.component.scss']
})
export class EditProfilePasswordComponent implements OnInit {

  @Output() collapseSection: EventEmitter<any> = new EventEmitter();
  editPasswordForm: FormGroup;
  status: any = null;
  untouched = true;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editPasswordForm = formBuilder.group({
      'oldPassword': ['', [ValidationService.passwordValidator]],
      'newPassword': [''],
      'confirmPassword': {validator: this.areEqual}
    }, {validator: this.areEqual.bind(this)});
  }

  onChange(event: any) {
    this.status = null;
    this.untouched = false;
  }

  ngOnInit() {
    this.initializePasswordForm();
  }

  initializePasswordForm() {
    this.status = null;
    this.editPasswordForm.setValue({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  }

  areEqual(fg: FormGroup) {
    const { oldPassword, newPassword, confirmPassword } = fg.controls;
    const confirmString = confirmPassword.value as string + '';
    const newString = newPassword.value as string + '';
    if ( !confirmString.match(/^[a-zA-Z0-9!"£$%^&*()_\-=+{|}[\]'`;:@~#,.<>/?\\]{6,100}$/) || !newString.match(/^[a-zA-Z0-9!"£$%^&*()_\-=+{|}[\]'`;:@~#,.<>/?\\]{6,100}$/)) {
      confirmPassword.setErrors({'invalidPassword': true});
      return { 'invalidPassword': true };
    }

    if (newPassword.value !== confirmPassword.value) {
      confirmPassword.setErrors({'notMatchingPassword': true});
      return { 'notMatchingPassword': true };
    }
  }

  onSubmit() {
    this.status = null;
    const { oldPassword, newPassword } = this.editPasswordForm.value;
    this.profileService.updatePassword(oldPassword, newPassword).subscribe( res => {
      if (res.oldPasswordValid && res.newPasswordValid) {
        this.status = {
          success: true,
          message: ValidationMessage.PASSWORD_SAVE_SUCCESS
        };
        this.profileService.getProfileInfo();
      }

      if (!res.oldPasswordValid) {
        this.editPasswordForm.get('oldPassword').setErrors({'currentPasswordNotMatching': true});
      }
    }, error => {
    });
  }

  onCancel() {
    this.initializePasswordForm();
    this.editPasswordForm.get('oldPassword').setErrors(null);
    this.editPasswordForm.get('newPassword').setErrors(null);
    this.editPasswordForm.get('confirmPassword').setErrors(null);
    this.status = null;
    this.collapseSection.emit();
    this.untouched = true;
  }
}
