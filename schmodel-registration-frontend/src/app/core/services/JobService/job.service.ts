import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {

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
        callback(res.eventView);
      }
    }, error => {
      console.log(error);
      if (callback) {
        callback([]);
      }
    });
  }

  getIpAddress() {
    return this.ip_http
    .get('http://freegeoip.net/json', {})
    .map((response: Response) => {
      return JSON.parse(response.text());
    })
    .catch(error => {
      return error;
    });
  }
}