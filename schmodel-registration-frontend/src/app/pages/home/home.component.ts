import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';


import { routerTransition } from '../../router.animations';
import { ProfileService, AuthenticationService } from '../../core/services';
import { SharedService } from '../../shared/services';
import { ValidationMessage, TermsModalResponse } from '../../shared/models';
import { ErrorResponse } from '../../shared/models';
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
  isHomePageLoaded: boolean;
  beforeTitle: string;
  termsModalRef: BsModalRef;
  termsContent: string;
  status: any = null;
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
  public hasActivationCode: boolean;

  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private modalService: BsModalService,
    private profileService: ProfileService,
    private authService: AuthenticationService,
    private sharedService: SharedService,
    private activatedRoute: ActivatedRoute
  ) {
    this.firstName = '';
    this.lastName = '';
    this.applications = 0;
    this.upcoming = 0;
    this.photo_url = '';
    this.message = '';
    this.isCompletedProfile = false;
    this.isHomePageLoaded = false;
    this.hasActivationCode = false;
    this.status = null;
  }

  ngOnInit() {
    const scrollLeft = document.documentElement.scrollLeft;
    window.scrollTo(scrollLeft, 0);

    this.isCompletedProfile = false;
    this.isHomePageLoaded = false;
    const changedPwdStatus = this.authService.changedPwdStatus;
    if (changedPwdStatus) {
      this.status = {
        success: changedPwdStatus,
        message: ValidationMessage.RESET_PASSWORD_SUCCESS
      };
      this.authService.changedPwdStatus = false;
    } else {
      this.status = null;
    }

    this.termsContent = ValidationMessage.TERMS_CONTENT;
    if (this.sharedService.fromSignup) {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE_ONCE_SIGNUP;
    } else {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE;
    }
    this.profileService.isProfileComplete().subscribe(res => {
      this.isCompletedProfile = res.profileComplete;
      this.hasActivationCode = res.hasActivationCode;
      if (this.isCompletedProfile) {
        this.profileService.getAfterProfile().subscribe(response => {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.applications = response.applicationCount;
        this.upcoming = response.upcomingJobCount;
        this.photo_url = response.photoUrl;
        this.isHomePageLoaded = true;
        }, err => {
          this.isHomePageLoaded = true;
        });
      } else {
        this.isHomePageLoaded = true;
      }
    }, err => {
      const body = err.json() || '';
      if (err.status === 500 && body.exception && body.exception === ErrorResponse.TOKEN_EXPIRE) {
            this.router.navigate(['login']);
      } else {
        this.isHomePageLoaded = true;
      }
    });
  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['login']);
  }

  onEdit() {
    this.router.navigate(['edit-my-profile']);
  }

  onView() {
    this.router.navigate(['profile']);
  }

  onJobs() {
    if (this.hasActivationCode === true) {
      this.router.navigate(['my-jobs']);
    }
    return false;
  }

  onApply() {
    if (this.hasActivationCode === true) {
        this.router.navigate(['apply-for-jobs']);
    }
    return false;
  }

  isLinkEnabled() {
    return this.isCompletedProfile === true && this.hasActivationCode === true;
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
