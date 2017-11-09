import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from 'ngx-webstorage';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';

import { AuthUser } from '../../shared/models';
import { environment } from '../../../environments/environment';

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

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService
  ) {
    this.signUpForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordValidator]],
      'activationCode': ['', Validators.required]
    });

    this.missMatchPass = '';
  }

  ngOnInit() { }

  onSignUp() {
    console.log('onSignUp = ', this.signUpForm);

    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.missMatchPass = 'These passwords don\'t match. Try again?';
    } else {
      this.authUser.email = this.signUpForm.value.email;
      this.authUser.password = this.signUpForm.value.password;
      this.authUser.activationCode = this.signUpForm.value.activationCode;

      this.authService.signUp(this.authUser).subscribe( res => {
        console.log('SignUp Response = ', res);
        this.localStorage.store(
          environment.localStorage.token,
          res.access_token
        );
        this.router.navigate(['']);
      }, err => {
        console.log('signUp Error = ', err);
      });
    }
  }
}
