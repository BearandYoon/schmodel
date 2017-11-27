import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class UserService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  isProfileComplete() {
    return this.http.get(this.apiRoutingService.getIsProfileCompleteAPIUrl(), {}, true, null);
  }
}
