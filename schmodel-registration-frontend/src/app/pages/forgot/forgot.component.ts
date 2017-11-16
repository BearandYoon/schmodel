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

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private resetPwdService: ResetPasswordService
  ) {
    this.forgotForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
  }
  ngOnInit() {
  }
    // reset password feature
    onReset() {
      if (this.forgotForm.value.password !== this.forgotForm.value.confirmPass) {
        this.missMatchPass = 'These passwords don\'t match. Try again?';
      } else {
        this.resetUser.email = this.forgotForm.value.email;
        this.resetPwdService.resetPwd(this.resetUser).subscribe( res => {
          if (!res.emailValid) {
            this.message = 'Enter a valid email address';
            return;
          }
          // this.router.navigate(['']);
        }, err => {
          console.log('resetPassword Error = ', err);
          this.message = 'Something went wrong.';
        });
      }
    }
}
