import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

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
    private localStorage: LocalStorageService
  ) {}

  ngOnInit() {
  }

  logout() {
    // this.showLogOutMessage();
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['login']);
  }

  onCalendar() {

  }
}
