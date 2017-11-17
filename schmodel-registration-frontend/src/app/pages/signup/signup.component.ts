import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';

import { TermsModalComponent, MessageModalComponent } from '../../shared/modules';
import { AuthUser, TermsModalResponse, ValidationMessage } from '../../shared/models';

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
      'activationCode': ''
    });

    this.missMatchPass = '';
    this.message = '';
  }

  ngOnInit() {
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    this.messageContent = '';
  }

  onSignUp() {
    if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.missMatchPass = ValidationMessage.NON_MATCHING_PASSWORD;
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
          console.log('signUp response = ', res);
          this.message = '';
          if (!res.emailValid) {
            this.message = ValidationMessage.ALREADY_REGISTERED;
            return;
          }
          if (!res.emailAvailable) {
            this.message = ValidationMessage.INVALID_EMAIL;
            return;
          }

          if (!res.passwordValid) {
            this.message = ValidationMessage.INVALID_PASSWORD;
            return;
          }
          if (!res.activationCodeValid) {
            this.message = ValidationMessage.WRONG_ACTIVATION_CODE;
            return;
          }
          this.showSignUpSuccessMessage();
        }, err => {
          console.log('signUp Error = ', err);
          this.message = 'Something went wrong.';
        });
      } else {
        console.log('T&C declined.');
        this.showSignUpDeclineMessage();
      }
    });
  }

  showSignUpSuccessMessage() {
    this.messageContent = ValidationMessage.ACCEPT_TERMS;
    this.messageModalRef = this.modalService.show(MessageModalComponent, this.messageModalConfig);
    this.messageModalRef.content.messageContent = this.messageContent;
    this.messageModalRef.content.isBtnCancel = false;

    this.messageModalRef.content.onCloseReason.subscribe(result => {
      this.router.navigate(['']);
    });
  }

  showSignUpDeclineMessage() {
    this.messageContent = ValidationMessage.DECLINE_TERMS;
    this.messageModalRef = this.modalService.show(MessageModalComponent, this.messageModalConfig);
    this.messageModalRef.content.messageContent = this.messageContent;
    this.messageModalRef.content.isBtnCancel = false;

    this.messageModalRef.content.onCloseReason.subscribe(result => {});
  }
}
