import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import { NewPassword } from '../../../shared/models';

@Injectable()
export class ChangePasswordService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  changePwd(user: NewPassword) {
    return this.http.post(
      this.apiRoutingService.getChangePwdAPIUrl(),
      user,
      false,
      null
    );
  }
}
