import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
  isOwnProfile: boolean;
  config: SwiperOptions = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
  };
  message: string;
  talentId: number;
  constructor(
    private _profileService: ProfileService,
    private activatedRoute: ActivatedRoute
  ) {
    this.message = '';
    this.talentId = 0;
    this.profile = null;
  }
  ngOnInit() {
    this.isOwnProfile = false;
    this.profile = null;
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.talentId = params['talentId'];
      });
    if ( this.talentId > 0) {
	    this._profileService.viewTalentProfile(this.talentId).subscribe( res => {
	    	console.log(res);
      		if ( res !== null) {
        		this.profile = res;
      		} else {
        		this.message = 'Something went wrong.';
      		}
    	}, err => {
      		this.message = 'Something went wrong.'; 
      	 });  
    } else {
       	this.isOwnProfile = true;
	    this._profileService.viewProfile().subscribe( res => {
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
  
  getCitizen(citizen) {
    const countries = [];
    if ( citizen != null ) {
      citizen.map(element => {
        countries.push(element.name);
      });
    }
    return countries.join(', ');
  }

  getLanguage(language) {
    const languages = [];
    if ( language != null ) {
      language.map(element => {
        languages.push(element.name);
      });
    }
    return languages.join(', ');
  }
  
}
