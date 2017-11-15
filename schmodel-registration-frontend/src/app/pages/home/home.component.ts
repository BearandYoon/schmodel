import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isCompletedProfile: boolean;
  constructor(
    public router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.isCompletedProfile = false;
  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['login']);
  }
}
