import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';

import { AuthUser } from '../../shared/models';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  signUpForm: any;
  missMatchPass: string;
  authUser: AuthUser = new AuthUser();
  message: string;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {
    this.signUpForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordValidator]],
      'activationCode': ['', Validators.required]
    });

    this.missMatchPass = '';
    this.message = '';
  }

  ngOnInit() { }

  onSignUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.missMatchPass = 'These passwords don\'t match. Try again?';
    } else {
      this.authUser.email = this.signUpForm.value.email;
      this.authUser.password = this.signUpForm.value.password;
      this.authUser.activationCode = this.signUpForm.value.activationCode;

      this.authService.signUp(this.authUser).subscribe( res => {
        if (!res.emailIsValid) {
          this.message = 'Your Email is invalid.';
          return;
        }
        if (!res.emailAvailable) {
          this.message = 'Your Email is not available.';
          return;
        }
        if (!res.passwordValid) {
          this.message = 'Your password should contain at least 6 characters long, and contain a number..';
          return;
        }
        if (!res.activationCodeValid) {
          this.message = 'Your Activation Code is invalid.';
          return;
        }
        this.router.navigate(['login']);
      }, err => {
        console.log('signUp Error = ', err);
        this.message = 'Something went wrong.';
      });
    }
  }
}
