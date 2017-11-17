import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { UserService } from '../../core/services';
import { TermsModalComponent } from '../../shared/modules';
import { environment } from '../../../environments/environment';
import { ValidationMessage } from '../../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  isCompletedProfile: boolean;
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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.isCompletedProfile = false;
    this.termsContent = ValidationMessage.TERMS_CONTENT;

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
