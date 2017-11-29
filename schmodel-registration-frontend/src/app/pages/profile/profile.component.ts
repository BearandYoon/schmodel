import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../../router.animations';
import { ProfileService } from '../../core/services';
import { ViewProfile } from '../../shared/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: object;
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
  };
  message: string;
  constructor(
    private _profileServie: ProfileService,
  ) {
    this.message = '';
    this.profile = {};
  }
  ngOnInit() {
    this._profileServie.viewProfile().subscribe( res => {
    console.log(res);
      if ( res !== null) {
        this.profile = res;
      } else {
        this.message = 'Something went wrong.';
      }
    }, err => {
      this.message = 'Something went wrong.';
    });
  }
}
