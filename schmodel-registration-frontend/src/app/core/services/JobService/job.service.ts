import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

@Injectable()
export class JobService {

  ipAddress: string = '';

  constructor(
    private http: HttpHelperService,
    private ip_http: Http,
    private apiRoutingService: ApiRoutingService
  ) { }

  getApplyForJobs(callback = undefined) {
    return this.http.get(
      this.apiRoutingService.getApplyForJobsUrl(),
      {},
      true,
      null
    ).subscribe(res => {
      if (callback) {
        callback(true, res.eventView ? res.eventView : []);
      }
    }, error => {
      console.log(error);
      if (callback) {
        callback(false, []);
      }
    });
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

  getIPAddress() {
    this.ip_http.get(this.apiRoutingService.getIPAddressUrl())
      .subscribe((res: Response) => {
        if (res.json() || res.json().ip) {
          this.ipAddress = res.json().ip;
        }
      });
  }

}