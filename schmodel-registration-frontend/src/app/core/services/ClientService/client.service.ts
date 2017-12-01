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
}
