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
  }

  onSignIn() {
    console.log('onSignIn - email and password = ', this.signInForm.value.email, this.signInForm.value.password);
    this.router.navigate(['']);
  }

  showTermsAndConditions(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }
}
