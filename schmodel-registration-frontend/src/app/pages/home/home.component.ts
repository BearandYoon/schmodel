import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { routerTransition } from '../../router.animations';
import { ProfileService } from '../../core/services';
import { SharedService } from '../../shared/services';
import { ValidationMessage, TermsModalResponse } from '../../shared/models';
import { TermsModalComponent, MessageModalComponent } from '../../shared/modules';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [routerTransition()]
})

export class HomeComponent implements OnInit {
  isCompletedProfile: boolean;
  isProfileLoaded: boolean;
  beforeTitle: string;
  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  messageModalRef: BsModalRef;
  messageContent: string;
  messageModalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  public firstName: string;
  public lastName: string;
  public applications: number;
  public upcoming: number;
  public photo_url: string;
  public message: string;

  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private modalService: BsModalService,
    private profileService: ProfileService,
    private sharedService: SharedService
  ) {
    this.firstName = '';
    this.lastName = '';
    this.applications = 0;
    this.upcoming = 0;
    this.photo_url = '';
    this.message = '';
    this.isCompletedProfile = false;
    this.isProfileLoaded = false;
    
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);

    this.isCompletedProfile = false;
    this.isProfileLoaded = false;
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    if (this.sharedService.fromSignup) {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE_ONCE_SIGNUP;
    }
    this.profileService.isProfileComplete().subscribe(res => {
      this.isCompletedProfile = res.profileComplete;
      this.isProfileLoaded = false;
      this.profileService.getAfterProfile().subscribe(res => {
      if (this.isCompletedProfile) {
        this.firstName = res.firstName;
        this.lastName = res.lastName;
        this.applications = res.applicationCount;
        this.upcoming = res.upcomingJobCount;
        this.photo_url = res.photoUrl;
        this.isProfileLoaded = true;
      } 
    }, err => {
      this.message = 'The page could not be loaded. Please log out, log in again and try once more.';
    });
     
    }, err => {
      this.message = 'The page could not be loaded. Please log out, log in again and try once more.';
    });



  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['login']);
  }

  onEdit() {
    this.router.navigate(['edit-profile']);
  }

  onView() {
    this.router.navigate(['profile']);
  }

  onJobs() {
    this.router.navigate(['my-jobs']);
  }

  onApply() {
    this.router.navigate(['apply-for-jobs']);
  }

  showTermsAndConditions() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = false;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
    });
  }

  showLogOutMessage() {
    this.messageContent = ValidationMessage.LOGOUT;
    this.messageModalRef = this.modalService.show(MessageModalComponent, this.messageModalConfig);
    this.messageModalRef.content.messageContent = this.messageContent;
    this.messageModalRef.content.isBtnCancel = true;

    this.messageModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
      if (result === TermsModalResponse.AGREE) {
        // this.localStorage.clear(environment.localStorage.token);
        // this.router.navigate(['login']);
      }
    });
  }
}
