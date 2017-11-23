import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidationService } from '../../../shared/services';
import { ProfileService } from '../../../core/services';

@Component({
  selector: 'edit-profile-password',
  templateUrl: './edit-profile-password.component.html',
  styleUrls: ['./edit-profile-password.component.scss']
})
export class EditProfilePasswordComponent implements OnInit {

  @Output() collapseSection: EventEmitter<any> = new EventEmitter();
  editPasswordForm: FormGroup;
  btnSave: boolean;

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

  onChange(event: any) {
    this.btnSave = false;
  }

  ngOnInit() {
    this.editPasswordForm.setValue({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
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
      if(res.oldPasswordValid && res.newPasswordValid) {
        this.btnSave = true;
      }
    }, error => {
      console.log(error);
    });
  }

  onCancel() {
    this.btnSave = false;
    this.collapseSection.emit();
  }
}
