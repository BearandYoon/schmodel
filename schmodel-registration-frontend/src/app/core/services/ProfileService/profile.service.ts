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

  updateTerms(data) {
    return this.http.post(
      this.apiRoutingService.getProfileUpdateTermsInfoUrl(),
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
  
  uploadPhoto(file, photoTypeId, photoWidth, photoHeight) {
    let fd = new FormData();
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