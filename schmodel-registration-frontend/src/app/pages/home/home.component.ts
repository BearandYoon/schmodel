import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { UserService } from '../../core/services';
import { SharedService } from '../../shared/services';
import { ValidationMessage } from '../../shared/models';
import { TermsModalComponent } from '../../shared/modules';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isCompletedProfile: boolean;
  beforeTitle: string;
  beforeTitle1: string;
  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private modalService: BsModalService,
    private userService: UserService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.isCompletedProfile = false;
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    this.beforeTitle1 = null;
    if (this.sharedService.fromSignup) {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE_ONCE_SIGNUP;
    } else {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE;
    }

    this.userService.isProfileComplete().subscribe(res => {
      this.isCompletedProfile = res.profileComplete;
    });
  }

  logout() {
    this.localStorage.clear(environment.localStorage.token);
    this.router.navigate(['login']);
  }

  onEdit() {
    this.router.navigate(['edit-profile']);
  }

  showTermsAndConditions() {
    this.termsModalRef = this.modalService.show(TermsModalComponent, this.termsModalConfig);
    this.termsModalRef.content.termsContent = this.termsContent;
    this.termsModalRef.content.isBtnAgree = false;

    this.termsModalRef.content.onCloseReason.subscribe(result => {
      console.log('Terms Modal Close Reason = ', result);
    });
  }
}
