import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import { ResetUser } from '../../../shared/models';

@Injectable()
export class ResetPasswordService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  resetPwd(user: ResetUser) {
    return this.http.post(
      this.apiRoutingService.getResetPwdAPIUrl(),
      user,
      false,
      null
    );
  }
}
