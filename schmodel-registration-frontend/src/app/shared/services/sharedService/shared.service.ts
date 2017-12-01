import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

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
}
