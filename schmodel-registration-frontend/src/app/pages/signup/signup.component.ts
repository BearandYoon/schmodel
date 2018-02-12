import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/filter';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { routerTransition } from '../../router.animations';
import { ValidationService, SharedService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';

import { TermsModalComponent } from '../../shared/modules';
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
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private modalService: BsModalService,
  ) {
    this.signUpForm = this.formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required, ValidationService.passwordLengthValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordLengthValidator]],
      'activationCode': ''
    });

    this.missMatchPass = '';
    this.message = '';
  }

  ngOnInit() {
    this.termsContent = ValidationMessage.TERMS_CONTENT;
  }

  onSignUp() {
    this.status = null;
    if (ValidationService.passwordSpecialValidator(this.signUpForm.controls.password)) {
      this.status = {
        success: false,
        message: ValidationMessage.INVALID_SPECIAL_PASSWORD
      };
    } else if (ValidationService.emailValidator(this.signUpForm.controls.email)) {
      this.status = {
        sucess: false,
        message: ValidationMessage.INVALID_EMAIL
      };
      return;
    } else if (this.signUpForm.value.password !== this.signUpForm.value.confirmPass) {
      this.status = {
        success: false,
        message: ValidationMessage.NON_MATCHING_PASSWORD_SIGNUP
      };
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
        this.authUser.email = this.signUpForm.value.email.toLowerCase();
        this.authUser.password = this.signUpForm.value.password;
        this.authUser.activationCode = this.signUpForm.value.activationCode;

        this.authService.signUp(this.authUser).subscribe(res => {
          this.message = '';
          if (!res.activationCodeValid) {
            this.status = {
              success: false,
              message: ValidationMessage.WRONG_ACTIVATION_CODE
            };
            return;
          }
          if (!res.emailValid) {
            this.status = {
              success: false,
              message: ValidationMessage.INVALID_EMAIL
            };
            return;
          }
          if (!res.passwordValid) {
            this.status = {
              success: false,
              message: ValidationMessage.INVALID_PASSWORD
            };
            return;
          }
          if (!res.emailAvailable) {
            this.status = {
              success: false,
              message: ValidationMessage.ALREADY_REGISTERED
            };
            return;
          }

          this.sharedService.fromSignup = true;
          this.router.navigate(['']);
        });
      } else {
        this.status = {
          success: false,
          message: ValidationMessage.TERMS_CONDITIONS_DECLINE
        };
        return;
      }
    });
  }
}
