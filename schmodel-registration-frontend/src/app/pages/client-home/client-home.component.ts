import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { ClientService } from '../../core/services';
import { routerTransition } from '../../router.animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
  animations: [routerTransition()]
})

export class ClientHomeComponent implements OnInit {
  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.clientService.clientHome().subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
      if (error.status === 401) {
        this.router.navigate(['client/login']);
      }
      this.router.navigate(['client/login']);
    });
  }

  onCalendar() {
      this.router.navigate(['event-calendar']);
  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['client/login']);
  }
}
