import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class JobService {

  constructor(
    private http: HttpHelperService,
    private ip_http: Http,
    private apiRoutingService: ApiRoutingService
  ) { }

  getApplyForJobs() {
    return this.http.get(
      this.apiRoutingService.getApplyForJobsUrl(),
      {},
      true,
      null
    );
  }

  createApplication(data) {
    return this.http.post(
      this.apiRoutingService.getCreateApplicationUrl(),
      data,
      false,
      true,
      null
    );
  }

  withdrawApplication(data) {
    return this.http.post(
      this.apiRoutingService.getWithdrawApplicationUrl(),
      data,
      false,
      true,
      null
    );
  }
}
