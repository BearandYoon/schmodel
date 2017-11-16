import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AuthenticationService } from '../../core/services';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { TermsModalComponent } from '../../shared/modules/termsModal/termsModal.component';
import { AuthUser, TermsModalResponse } from '../../shared/models';

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
  }

  onSignIn() {
    this.message = '';
    this.authUser.email = this.signInForm.value.email;
    this.authUser.password = this.signInForm.value.password;
    this.authService.logIn(this.authUser).subscribe( res => {
      console.log('login user = ', res);
      this.router.navigate(['']);
    }, error => {
      if (error.status === 401) {
        this.message = 'UnRegistered User';
      }
      console.log(error);
    });
  }

  showTermsAndConditions() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = true;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
    });
  }
}
