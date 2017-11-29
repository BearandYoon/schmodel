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
}