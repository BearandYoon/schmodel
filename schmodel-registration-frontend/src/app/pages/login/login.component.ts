import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../core/services';

import { routerTransition } from '../../router.animations';
import { ValidationService, SharedService } from '../../shared/services';
import { TermsModalComponent } from '../../shared/modules/termsModal/termsModal.component';
import { AuthUser, ValidationMessage } from '../../shared/models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
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
    private authService: AuthenticationService,
    private sharedService: SharedService
  ) {
    this.signInForm = this.formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, ValidationService.passwordLengthValidator]]
    });
  }

  ngOnInit() {
    this.message = '';
    this.termsContent = ValidationMessage.TERMS_CONTENT;
  }

  onSignIn() {
    this.status = null;
    this.message = '';

    if (ValidationService.emailValidator(this.signInForm.controls.email)) {
      this.status = {
        sucess: false,
        message: ValidationMessage.INVALID_EMAIL
      };
      return;
    }

    this.authUser.email = this.signInForm.value.email.toLowerCase();
    this.authUser.password = this.signInForm.value.password;
    this.authService.logIn(this.authUser).subscribe( res => {
      this.router.navigate(['']);
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
