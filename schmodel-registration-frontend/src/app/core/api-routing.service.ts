import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiRoutingService {
  private baseUrl = environment.BASE_API_URL;

  constructor() {}

  getSignUpnAPIUrl(): string {
    return this.baseUrl + '/talent/signup';
  }

  getLoginAPIUrl(): string {
    return this.baseUrl + '/talent/login';
  }
}
