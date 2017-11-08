import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
  animations: [routerTransition()]
})
export class ForgotComponent implements OnInit {
  forgotForm: any;

  constructor(
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.forgotForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
    });
  }
  ngOnInit() {
  }
    // reset password feature
    onReset() {

     console.log('onReset - email = ', this.forgotForm.value.email);
     // this.router.navigate(['']);
    }
}
