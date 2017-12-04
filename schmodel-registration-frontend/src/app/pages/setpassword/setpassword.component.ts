import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../core/services';
import { TokenUser } from '../../shared/models';

@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {

  tokenUser: TokenUser = new TokenUser();
  message: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthenticationService
  ) {
  }

  ngOnInit() {
    // subscribe to router event

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const token = params['token'];
      this.tokenUser.token = token;

      this.authService.validateToken(this.tokenUser).subscribe( res => {
        if (res.tokenValid === true) {
          this.router.navigate(['/change-password'], { queryParams: { token: token }});
        } else {
          this.router.navigate(['/forgot'], { queryParams: { token: token }});
        }
      }, err => {
        console.log('resetPassword Error = ', err);
        // this.router.navigate(['/not-found']);
      });
    });
  }
}
