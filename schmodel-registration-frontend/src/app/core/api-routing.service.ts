import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRoutingService {
  private baseUrl = environment.BASE_API_URL;

  constructor() { }

  getResetPwdAPIUrl(): string {
    return this.baseUrl + '/talent/reset-password';
  }
  getValidTokenAPIUrl(): string {
    return this.baseUrl + '/talent/is-reset-password-token-valid';
  }

  getSignUpnAPIUrl(): string {
    return this.baseUrl + '/talent/signup';
  }

  getLoginAPIUrl(): string {
    return this.baseUrl + '/talent/login';
  }

  getIsProfileCompleteAPIUrl(): string {
    return this.baseUrl + '/talent/is-profile-complete';
  }

  getAfterProfileInfoAPIUrl(): string {
    return this.baseUrl + '/talent/home';
  }

  getChangePwdAPIUrl(): string {
    return this.baseUrl + '/talent/change-password';
  }

  getProfileUpdatePasswordUrl(): string {
    return this.baseUrl + '/talent/edit-password';
  }

  getProfileUpdateBillingInfoUrl(): string {
    return this.baseUrl + '/talent/edit-billing-information';
  }

  getProfileUpdatePersonalInfoUrl(): string {
    return this.baseUrl + '/talent/edit-personal-information';
  }

  getProfileUpdateTermsInfoUrl(): string {
    return this.baseUrl + '/talent/edit-terms';
  }

  getProfileInfoUrl(): string {
    return this.baseUrl + '/talent/edit-my-profile';
  }

  getUploadPhotoUrl(): string {
    return this.baseUrl + '/talent/upload-photo';
  }

  getDeletePhotoUrl(): string {
    return this.baseUrl + '/talent/delete-photo';
  }

  getApplyForJobsUrl(): string {
    return this.baseUrl + '/talent/apply-for-jobs';
  }

  getCreateApplicationUrl(): string {
    return this.baseUrl + '/talent/create-application';
  }

  getMyJobs(): string {
    return this.baseUrl + '/talent/my-jobs';
  }
}