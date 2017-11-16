import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRoutingService {
  private baseUrl = environment.BASE_API_URL;

  constructor() {}

  getResetPwdAPIUrl(): string {
    return this.baseUrl + '/api/talent/change-password';
  }
  getValidTokenAPIUrl(): string {
    return this.baseUrl + '/api/talent/is-reset-password-token-valid';
  }
}
