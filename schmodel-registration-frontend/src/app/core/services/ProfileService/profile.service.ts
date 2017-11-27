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

  isProfileComplete() {
    return this.http.get(this.apiRoutingService.getIsProfileCompleteAPIUrl(), {}, true, null);
  }

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

  updateTerms(data) {
    return this.http.post(
      this.apiRoutingService.getProfileUpdateTermsInfoUrl(),
      data,
      false,
      true,
      null
    );
  }

  getProfileInfo(callback = undefined) {
    const photoWidth = Math.round(window.innerWidth / 3);
    const photoHeight = Math.round(window.innerWidth / 3);
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
      if (callback) {
        callback(true);
      }
    }, error => {
      console.log(error);
      if (callback) {
        callback(false);
      }
    });
  }

  uploadPhoto(file, photoTypeId, photoWidth, photoHeight) {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('photoTypeId', photoTypeId);
    fd.append('photoWidth', photoWidth);
    fd.append('photoHeight', photoHeight);
    return this.http.post(
      this.apiRoutingService.getUploadPhotoUrl(),
      fd,
      false,
      true,
      null
    );
  }

  deletePhoto(photoId){
    return this.http.post(
      this.apiRoutingService.getDeletePhotoUrl(),
      {photoId},
      false,
      true,
      null
    );
  }
}
