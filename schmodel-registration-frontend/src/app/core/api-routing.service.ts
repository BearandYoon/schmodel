import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRoutingService {
  private baseUrl = environment.BASE_API_URL;

  constructor() {}

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
  getChangePwdAPIUrl(): string {
    return this.baseUrl + '/talent/change-password';
  }
  
  getProfileUpdatePasswordUrl(): string {
    return this.baseUrl + '/talent/edit-password';
  }

  getProfileUpdateBillingInfoUrl(): string {
    return this.baseUrl + '/talent/edit-billing-information';
  }
}
