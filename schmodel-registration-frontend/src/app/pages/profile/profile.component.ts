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
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);
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

  getValue(profile, type) {

    if(type==='bodyHeight' && profile.bodyHeight) {
      return  `${Math.floor(profile.bodyHeight.valueInch / 12)}'${profile.bodyHeight.valueInch % 12}" / ${profile.bodyHeight.valueCm}cm`;
    }
    else if(type==='bodyChestCircumference' && profile.bodyChestCircumference) {
      return `UK ${profile.bodyChestCircumference.ukValue} / EU ${profile.bodyChestCircumference.euValue} / US ${profile.bodyChestCircumference.usValue}`;
    }
    else if(type==='bodyChestCupSize' && profile.bodyChestCupSize) {
      return `UK ${profile.bodyChestCupSize.ukValue} / EU ${profile.bodyChestCupSize.euValue} / US ${profile.bodyChestCupSize.usValue}`;
    }
    else if(type==='bodyWaist' && profile.bodyWaist) {
     return `${profile.bodyWaist.valueDeciInch / 10}" / ${profile.bodyWaist.valueCm}cm`;
    }
    else if(type==='bodyWeight' && profile.bodyWeight) {
      return `${profile.bodyWeight.valueLb} lbs / ${profile.bodyWeight.valueHg/10} kg`;
    }
    else if(type==='dressSize' && profile.dressSize) {
      return `UK ${profile.dressSize.ukValue} / EU ${profile.dressSize.euValue} / US ${profile.dressSize.usValue}`;
    }
    else if(type==='hairColor' && profile.hairColor) {
      return `${profile.hairColor.name}`;
    }
    else if(type==='eyeColor' && profile.eyeColor) {
      return `${profile.eyeColor.name}`;
    }

    return '';
  }
  
}
