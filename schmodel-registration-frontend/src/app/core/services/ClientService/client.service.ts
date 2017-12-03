import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class ClientService {

  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) { }

  clientHome() {
    return this.http.get(this.apiRoutingService.getClientHomeAPIUrl(), {}, true, null);
  }

  getHireSchemodel(data) {
    return this.http.post(
      this.apiRoutingService.getHireSchemodelAPIUrl(),
      data,
      false,
      true,
      null
    );
  }

  hireTalent(data) {
    return this.http.post(
      this.apiRoutingService.getHireTalentAPIUrl(),
      data,
      false,
      true,
      null
    );
  }
}
