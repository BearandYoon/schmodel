import {Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ValidTokenService } from '../../core/services';
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
    private validTokenService: ValidTokenService
  ) {
  }

  ngOnInit() {
    // subscribe to router event

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const token = params['token'];
      const email = params['email'];
      const timeStamp = params['timeStamp'];

      this.tokenUser.email = email;
      this.tokenUser.timeStamp = timeStamp;
      this.tokenUser.token = token;

      this.validTokenService.validateToken(this.tokenUser).subscribe( res => {
        if (res.tokenValid === true && res.emailValid === true && res.timeStampValid === true) {
          this.router.navigate(['/change-password']);
        } else {
          this.router.navigate(['/not-found']);
        }
      }, err => {
        console.log('resetPassword Error = ', err);
        this.router.navigate(['/not-found']);
      });
    });
  }
}
