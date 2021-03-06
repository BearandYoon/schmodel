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
  status: any = null;
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
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, ValidationService.passwordLengthValidator]]
    });
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    this.message = '';
    this.termsContent = ValidationMessage.TERMS_CONTENT;
  }

  onSignIn() {
    this.message = '';
    this.status = null;

    if (ValidationService.emailValidator(this.signInForm.controls.email)) {
      this.status = {
        sucess: false,
        message: ValidationMessage.INVALID_EMAIL
      };
      return;
    }

    this.authUser.email = this.signInForm.value.email.toLowerCase();
    this.authUser.password = this.signInForm.value.password;
    this.authService.clientLogin(this.authUser).subscribe( res => {
      console.log('successfully logged in as client');
      this.router.navigate(['client']);
    }, error => {
      if (error.status === 401) {
        this.status = {
          sucess: false,
          message: ValidationMessage.INVALID_CREDENTIALS
        };
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
