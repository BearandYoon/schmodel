import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { ChangePasswordService } from '../../core/services';
import { NewPassword } from '../../shared/models';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
  changePwdForm: any;
  message: string;
  user: NewPassword = new NewPassword();
  missMatchPass: string;
  token: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private changePwdService: ChangePasswordService
  ) {
    this.changePwdForm = this.formBuilder.group({
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordValidator]]
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.token = params['token'];
    });
  }

  onChangePwd() {
    if (this.changePwdForm.value.password !== this.changePwdForm.value.confirmPass) {
      this.missMatchPass = 'These passwords don\'t match. Try again?';
    } else {
      this.user.newPassword = this.changePwdForm.value.password;
      this.user.token = this.token;
      this.changePwdService.changePwd(this.user).subscribe( res => {
        if (res.tokenValid === true && res.newPasswordValid === true) {
          this.router.navigate(['/home']);
        } else {
          this.message = 'Passwords do not match. Please try again';
        }
      }, err => {
        this.message = 'Passwords do not match. Please try again';
      });
    }
  }
}
