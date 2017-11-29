import { Injectable } from '@angular/core';

import { HttpHelperService } from '../../http-helper.service';
import { ApiRoutingService } from '../../api-routing.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class JobService {

  constructor(
    private http: HttpHelperService,
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
}