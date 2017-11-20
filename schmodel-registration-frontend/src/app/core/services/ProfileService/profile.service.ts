import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class ProfileService {

  profileData: any = null;

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

  updatePersonalInfo(data) {
    return this.http.post(
      this.apiRoutingService.getProfileUpdatePersonalInfoUrl(),
      data,
      false,
      true,
      null
    );
  }

  getProfileInfo(photoWidth, photoHeight) {
    return this.http.post(
      this.apiRoutingService.getProfileInfoUrl(),
      {
        photoWidth,
        photoHeight
      },
      false,
      true,
      null
    ).subscribe( res => {
      this.profileData = res;
    }, error => {
      console.log(error);
    });
  }

}
