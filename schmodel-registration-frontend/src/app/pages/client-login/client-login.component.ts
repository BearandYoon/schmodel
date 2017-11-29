import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../core/services';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { TermsModalComponent } from '../../shared/modules/termsModal/termsModal.component';
import { AuthUser, ValidationMessage } from '../../shared/models';

@Component({
    selector: 'app-client-login',
    templateUrl: './client-login.component.html',
    styleUrls: ['./client-login.component.scss'],
    animations: [routerTransition()]
})
export class ClientLoginComponent implements OnInit {
  signInForm: any;
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

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService,
    private authService: AuthenticationService
  ) {
    this.signInForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
    this.message = '';
    this.termsContent = ValidationMessage.TERMS_CONTENT;
  }

  onSignIn() {
    this.message = '';
    this.authUser.email = this.signInForm.value.email;
    this.authUser.password = this.signInForm.value.password;
    this.authService.clientLogin(this.authUser).subscribe( res => {
      console.log('successfully logged in as client');
      this.router.navigate(['client/home']);
    }, error => {
      if (error.status === 401) {
        this.message = ValidationMessage.INVALID_CREDENTIALS;
      }
      console.log(error);
    });
  }

  showTermsAndConditions() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = false;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
    });
  }
}
