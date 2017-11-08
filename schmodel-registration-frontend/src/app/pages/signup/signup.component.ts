import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

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
    private formBuilder: FormBuilder,
    private httpClient: HttpClient
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
    }

    /*
    * TODO
    * request object should not contain 
    * confirmPass field
    */

    const url = 'http://localhost:8080/api/talent/signup';
    let submiData = this.signUpForm.value;
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

    this.httpClient.post(url, submiData, { headers: headers })
      .subscribe(
      data => {
        /*
        * Process successful server HTTP response here
        * it could still contain info that 
        * new user was not registered properly
        */
        console.log("Server response data = ", data);
      },
      (err: HttpErrorResponse) => {
        /*
        * I found this event handler not very helpful,
        * It could be updated
        */
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
      );
  }

  onKeyUpConfirmPass(event: any) {
    this.missMatchPass = '';
  }
}
