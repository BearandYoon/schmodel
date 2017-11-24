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

  constructor(
    public router: Router,
    private localStorage: LocalStorageService,
    private modalService: BsModalService,
    private profileService: ProfileService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.isCompletedProfile = false;
    this.termsContent = ValidationMessage.TERMS_CONTENT;
    if (this.sharedService.fromSignup) {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE_ONCE_SIGNUP;
    } else {
      this.beforeTitle = ValidationMessage.BEFORE_COMPLETE_HOME_TITLE;
    }

    this.profileService.isProfileComplete().subscribe(res => {
      this.isCompletedProfile = res.profileComplete;
    });
  }

  logout() {
    // this.showLogOutMessage();
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
