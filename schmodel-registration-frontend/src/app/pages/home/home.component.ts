import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LocalStorageService } from 'ngx-webstorage';

import { UserService } from '../../core/services';
import { TermsModalComponent } from '../../shared/modules/termsModal/termsModal.component';
import { environment } from '../../../environments/environment';

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
    this.termsContent = 'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containi\n' +
      'As required by Department of Employment regulations, Schmodel’s booking confirmation form, containing the specific ' +
      'terms of the booking, must be signed and returned by the client and the signed booking confirmation form together with ' +
      'these terms and conditions shall form the agreement between the parties relating to each booking.\n' +
      '\n' +
      'The failure to sign and/or return the booking confirmation form whilst proceeding with the booking ' +
      'will be deemed to be an acceptance by the client of these terms and conditions and they shall apply ' +
      'to and govern the booking between Schmodel and the client. Any amendment and/or variations made ' +
      'to the booking confirmation form by the client shall not be valid and binding unless IMG has agreed ' +
      'to such amendment and/or variation in advance and confirmed such agreement by signing the booking ' +
      'confirmation form after the amendment and/or variation has been included on the booking confirmation form. ' +
      'In the event of any inconsistency or contradiction between these terms and conditions and the booking ' +
      'confirmation form, the terms set out in the booking confirmation form shall prevail.';

    this.userService.isProfileComplete().subscribe(res => {
      console.log('profile = ', res);
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
