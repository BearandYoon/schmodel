import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import { AuthUser } from '../../../shared/models';

@Injectable()
export class AuthenticationService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  signUp(user: AuthUser) {
    return this.http.post(
      this.apiRoutingService.getLoginAPIUrl(),
      user,
      false,
      null
    );
  }
}
