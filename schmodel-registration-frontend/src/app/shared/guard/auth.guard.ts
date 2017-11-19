import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { LocalStorageService } from 'ngx-webstorage';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  canActivate() {
    const token = this.localStorage.retrieve(
      environment.localStorage.token
    );
    if (token) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
