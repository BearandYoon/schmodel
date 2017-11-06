import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';


import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  signInForm: any;
  modalRef: BsModalRef;
  termsContent: string;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private modalService: BsModalService
  ) {
    this.signInForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
    this.termsContent = 'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containi\n' +
      'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing the specific terms of the booking, must be signed and returned by the client and the signed booking confirmation form together with these terms and conditions shall form the agreement between the parties relating to each booking.\n' +
      '\n' +
      'The failure to sign and/or return the booking confirmation form whilst proceeding with the booking will be deemed to be an acceptance by the client of these terms and conditions and they shall apply to and govern the booking between Schmodel and the client. Any amendment and/or variations made to the booking confirmation form by the client shall not be valid and binding unless IMG has agreed to such amendment and/or variation in advance and confirmed such agreement by signing the booking confirmation form after the amendment and/or variation has been included on the booking confirmation form. In the event of any inconsistency or contradiction between these terms and conditions and the booking confirmation form, the terms set out in the booking confirmation form shall prevail.';
  }

  onSignIn() {
    console.log('onSignIn - email and password = ', this.signInForm.value.email, this.signInForm.value.password);
    this.router.navigate(['']);
  }

  showTermsAndConditions(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  onAgreeTerms() {
    this.modalRef.hide();
  }

  onCancelTerms() {
    this.modalRef.hide();
  }
}
