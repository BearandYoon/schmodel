import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import { AuthUser, NewPassword, ResetUser, TokenUser } from '../../../shared/models';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  signUp(user: AuthUser) {
    return this.http.post(
      this.apiRoutingService.getSignUpnAPIUrl(),
      user,
      false,
      null
    );
  }

  logIn(user: AuthUser) {
    delete user.activationCode;
    return this.http.post(
      this.apiRoutingService.getLoginAPIUrl(),
      user,
      false,
      null
    );
  }

  changePwd(user: NewPassword) {
    return this.http.post(
      this.apiRoutingService.getChangePwdAPIUrl(),
      user,
      false,
      null
    );
  }

  resetPwd(user: ResetUser) {
    return this.http.post(
      this.apiRoutingService.getResetPwdAPIUrl(),
      user,
      false,
      null
    );
  }

  validateToken(user: TokenUser) {
    console.log(this.apiRoutingService.getValidTokenAPIUrl());
    return this.http.get(
      this.apiRoutingService.getValidTokenAPIUrl(),
      user,
      false,
      null
    );
  }
}
