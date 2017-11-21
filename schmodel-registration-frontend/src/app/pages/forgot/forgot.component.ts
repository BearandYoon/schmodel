import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';

import { ResetPasswordService } from '../../core/services';
import { ResetUser } from '../../shared/models';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [routerTransition()]
})
export class ForgotComponent implements OnInit {
  forgotForm: any;
  missMatchPass: string;
  resetUser: ResetUser = new ResetUser();
  message: string;
  isSubmitting: boolean;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private resetPwdService: ResetPasswordService
  ) {
    this.forgotForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
    this.isSubmitting = false;
  }
  onChangeInput() {
    this.message = '';
  }

  ngOnInit() {
  }
    // reset password feature
    onReset() {
      this.resetUser.email = this.forgotForm.value.email;
      this.isSubmitting = true;
      this.resetPwdService.resetPwd(this.resetUser).subscribe( res => {
        if (!res.emailValid) {
          this.message = 'Enter your registered email address';
          return;
        }else {
          this.message = 'Please check your email to reset password';
          return;
        }
        // this.router.navigate(['']);
      }, err => {
        console.log('resetPassword Error = ', err);
        this.message = 'Something went wrong.';
      });
    }
}
