import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

import { ClientService } from '../../core/services';
import { routerTransition } from '../../router.animations';
import { environment } from '../../../environments/environment';
import { ValidationMessage } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss'],
  animations: [routerTransition()]
})

export class ClientHomeComponent implements OnInit {
  errorMessage = '';
  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.errorMessage = '';
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
    this.clientService.clientHome().subscribe(res => {
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['client/login']);
      }
      this.errorMessage = ValidationMessage.BACKEND_CONNECTION_ERROR;
    });
  }

  onCalendar() {
      this.router.navigate(['client/event-calendar']);
  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['client/login']);
  }

  onCloseErrorMessage() {
    this.errorMessage = '';
  }
}
