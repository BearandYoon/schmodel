import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';

import { AuthenticationService } from '../../core/services';
import { ResetUser } from '../../shared/models';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [routerTransition()]
})
export class ForgotComponent implements OnInit {
  forgotForm: any;
  resetUser: ResetUser = new ResetUser();
  message: string;
  isSubmitting: boolean;
  emailValid: boolean;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private resetPwdService: AuthenticationService
  ) {
    this.forgotForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
    this.emailValid = false;
    this.isSubmitting = false;
  }
  onChangeInput() {
    this.message = '';
    this.isSubmitting = false;
  }

  ngOnInit() {
  }
    // reset password feature
    onReset() {
      this.resetUser.email = this.forgotForm.value.email;
      this.isSubmitting = true;
      this.resetPwdService.resetPwd(this.resetUser).subscribe( res => {
          this.emailValid = true;
          this.message = 'If we found your email address in our database, we just sent you an email with instructions on how to reset your password';
          return;
        // this.router.navigate(['']);
      }, err => {
        this.emailValid = false;
        console.log(err.json());
      });
    }
}
