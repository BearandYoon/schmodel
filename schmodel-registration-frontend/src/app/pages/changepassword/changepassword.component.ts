import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';

import { routerTransition } from '../../router.animations';
import { ValidationService } from '../../shared/services';
import { AuthenticationService } from '../../core/services';
import { NewPassword, TokenUser } from '../../shared/models';

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
  tokenUser: TokenUser = new TokenUser();
  tokenValid: boolean;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private localSt: LocalStorageService,
  ) {
    this.changePwdForm = this.formBuilder.group({
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPass': ['', [Validators.required, ValidationService.passwordValidator]]
    });
     this.missMatchPass = '';
     this.message = '';
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    this.tokenValid = false;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const token = params['token'];
      this.tokenUser.token = token;
      this.token = token;

      this.authService.validateToken(this.tokenUser).subscribe( res => {
       if (res.tokenValid === true) {
          this.tokenValid = true;
          this.router.navigate(['/change-password'], { queryParams: { token: token }});
        } else if (res.tokenValid !== true) {
          this.router.navigate(['/forgot'], { queryParams: { token: token }});
        }
      }, err => {
        console.log('resetPassword Error = ', err);
        this.router.navigate(['/not-found']);
      });
    });
  }
  onChangeInput(event) {
    this.missMatchPass = '';
    this.message = '';
  }

  onChangePwd() {
    if (this.changePwdForm.value.password !== this.changePwdForm.value.confirmPass) {
      this.missMatchPass = 'Passwords do not match. Please try again';
    } else {
      this.user.newPassword = this.changePwdForm.value.password;
      this.user.token = this.token;
      this.authService.changePwd(this.user).subscribe( res => {
        if (res.tokenValid === true && res.newPasswordValid === true) {
          this.localSt.store('toastStatus', false);
          this.router.navigate(['/'], { queryParams: { resetPwd: true}});
        } else {
          this.message = 'Invalid token. Unable to change password';
        }
      }, err => {
        this.message = 'Error changing password. Please try again';
      });
    }
  }
}
