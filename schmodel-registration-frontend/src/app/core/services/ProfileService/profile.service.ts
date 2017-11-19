import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class ProfileService {

  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) { }

  updatePassword(oldPassword, newPassword) {
    const body = {
      oldPassword,
      newPassword
    };

    return this.http.post(
      this.apiRoutingService.getProfileUpdatePasswordUrl(),
      body,
      false,
      true,
      null
    );
  }

  updateBillingInfo(data) {
    return this.http.post(
      this.apiRoutingService.getProfileUpdateBillingInfoUrl(),
      data,
      false,
      true,
      null
    );
  }

}
