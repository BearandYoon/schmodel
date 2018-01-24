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
  status_notmatch: any = null;
  untouched = true;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.editPasswordForm = formBuilder.group({
      'oldPassword': ['', [ValidationService.passwordLengthValidator]],
      'newPassword': ['', [ValidationService.passwordLengthValidator]],
      'confirmPassword': ['', [ValidationService.passwordLengthValidator]]
    });
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

  onSubmit() {
    this.status = null;
    const { oldPassword, newPassword, confirmPassword } = this.editPasswordForm.value;
    if (ValidationService.passwordSpecialValidator(this.editPasswordForm.controls.newPassword)) {
      this.status = {
        success: false,
        message: ValidationMessage.INVALID_SPECIAL_PASSWORD
      };
      return;
    }

    if (newPassword != confirmPassword) {
      this.status = {
        success: false,
        message: ValidationMessage.NON_MATCHING_PASSWORD
      };
      return;
    }

    this.profileService.updatePassword(oldPassword, newPassword).subscribe( res => {
      if (res.oldPasswordValid && res.newPasswordValid) {
        this.status = {
          success: true,
          message: ValidationMessage.PASSWORD_SAVE_SUCCESS
        };
        this.profileService.getProfileInfo();
      }

      if(!res.oldPasswordValid) {
        this.status = {
          success: false,
          message: ValidationMessage.CURRENT_PASSWORD_NOT_MATCH
        }
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
