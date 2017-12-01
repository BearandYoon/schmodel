import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';


@Injectable()
export class MyJobService {
  constructor(
    private http: HttpHelperService,
    private apiRoutingService: ApiRoutingService
  ) {}

  getMyJobInfor() {
    console.log(this.apiRoutingService.getMyJobsUrl());
    return this.http.get(
      this.apiRoutingService.getMyJobsUrl(),
      {},
      false,
      null
    );
  }
}
