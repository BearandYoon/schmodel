import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
  signUpForm: any;
  missMatchPass: string;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.signUpForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordValidator]],
      'activeCode': ['', Validators.required]
    });

    this.missMatchPass = '';
  }

  ngOnInit() { }

  onSignUp() {
    console.log('onSignUp = ', this.signUpForm);

    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.missMatchPass = 'These passwords don\'t match. Try again?';
    }
  }

  onKeyUpConfirmPass(event: any) {
    this.missMatchPass = '';
  }
}
