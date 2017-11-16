import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';

import { TermsModalComponent, MessageModalComponent } from '../../shared/modules';
import { AuthUser, TermsModalResponse } from '../../shared/models';

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
  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  messageModalRef: BsModalRef;
  messageContent: string;
  messageModalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private modalService: BsModalService,
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

  ngOnInit() {
    this.termsContent = 'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containi\n' +
      'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing the specific ' +
      'terms of the booking, must be signed and returned by the client and the signed booking confirmation form together with ' +
      'these terms and conditions shall form the agreement between the parties relating to each booking.\n' +
      '\n' +
      'The failure to sign and/or return the booking confirmation form whilst proceeding with the booking ' +
      'will be deemed to be an acceptance by the client of these terms and conditions and they shall apply ' +
      'to and govern the booking between Schmodel and the client. Any amendment and/or variations made ' +
      'to the booking confirmation form by the client shall not be valid and binding unless IMG has agreed ' +
      'to such amendment and/or variation in advance and confirmed such agreement by signing the booking ' +
      'confirmation form after the amendment and/or variation has been included on the booking confirmation form. ' +
      'In the event of any inconsistency or contradiction between these terms and conditions and the booking ' +
      'confirmation form, the terms set out in the booking confirmation form shall prevail.';
    this.messageContent = '';
  }

  onSignUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.missMatchPass = 'These passwords don\'t match. Try again?';
    } else {
      this.showTermsAndConditions();
    }
  }

  showTermsAndConditions() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = true;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      if (result === TermsModalResponse.AGREE) {
        this.authUser.email = this.signUpForm.value.email;
        this.authUser.password = this.signUpForm.value.password;
        this.authUser.activationCode = this.signUpForm.value.activationCode;

        this.authService.signUp(this.authUser).subscribe( res => {
          this.message = '';
          if (!res.emailValid) {
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
          this.showSignUpSuccessMessage();
        }, err => {
          console.log('signUp Error = ', err);
          this.message = 'Something went wrong.';
        });
      } else {
        console.log('T&C declined.');
      }
    });
  }

  showSignUpSuccessMessage() {
    this.messageContent = 'Your Schmodel account has been created! ' +
      'Please complete your profile so you can start applying to jobs." below the heading Complete Your Profile.';
    this.messageModalRef = this.modalService.show(MessageModalComponent, this.messageModalConfig);
    this.messageModalRef.content.messageContent = this.messageContent;
    this.messageModalRef.content.isBtnCancel = true;

    this.messageModalRef.content.onCloseReason.subscribe(result => {
      this.router.navigate(['login']);
    });
  }
}
