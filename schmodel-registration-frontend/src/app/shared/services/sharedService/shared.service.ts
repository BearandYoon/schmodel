import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import * as moment from 'moment';

import { LocalStorageService } from 'ngx-webstorage';

import { ApiRoutingService } from '../../../core/api-routing.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class SharedService {

  public fromSignup = false;

  constructor(
    private apiRoutingService: ApiRoutingService,
    private ip_http: Http,
    private localStorage: LocalStorageService
  ) { }

  getIPAddress() {
    this.ip_http.get(this.apiRoutingService.getIPAddressUrl())
      .subscribe((res: Response) => {
        if (res.json() || res.json().ip) {
          console.log('my local IpAddress = ', res.json().ip);
          this.localStorage.store(environment.localStorage.ipAddress, res.json().ip);
        }
      });
  }

  formatEventDate(startDate, endDate) {
    let eventDate = '';
    if (moment(startDate).isSame(endDate)) {
      eventDate = moment(startDate, 'YYYY-MM-D').format('D MMMM YYYY');
    } else {
      eventDate = this.getDifferenceDate(startDate, endDate);
    }

    return eventDate;
  }

  getDifferenceDate(start, end) {
    let period = '';
    if (moment(start).isSame(end, 'year')) {
      if (moment(start).isSame(end, 'month')) {
        period = moment(start).get('date') + ' - ' + moment(end).get('date') + ' ' + moment(start).format('MMMM') + ' ' + moment(start).get('year');
      } else {
        period = moment(start).format('D MMMM') + ' - ' + moment(end).format('D MMMM') + ' ' + moment(start).get('year');
      }
    } else {
      period = moment(start).format('D MMMM YYYY') + ' - ' + moment(end).format('D MMMM YYYY');
    }

    return period;
  }
}
