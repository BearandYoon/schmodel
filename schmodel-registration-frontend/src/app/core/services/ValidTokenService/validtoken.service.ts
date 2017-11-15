import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import { ResetUser, TokenUser } from '../../../shared/models';

@Injectable()
export class ValidTokenService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  validateToken(user: TokenUser) {
    console.log(this.apiRoutingService.getValidTokenAPIUrl());
    return this.http.post(
      this.apiRoutingService.getValidTokenAPIUrl(),
      user,
      false,
      null
    );
  }
}
