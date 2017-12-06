import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { HireTalent, ValidationMessage } from '../../../shared/models';
import { TermsModalComponent } from '../../../shared/modules/termsModal/termsModal.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  hireTalent: HireTalent = new HireTalent;
  public dialogTitle: string;
  public onCloseReason: Subject<string>;

  termsModalRef: BsModalRef;
  termsContent: string;
  termsModalConfig = {
    animated: true,
    keyboard: false,
    backdrop: true,
    ignoreBackdropClick: true
  };

  constructor(
    private modalService: BsModalService,
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.dialogTitle = 'Hiring Confirmation';
    this.onCloseReason = new Subject();
    this.termsContent = ValidationMessage.TERMS_CONTENT;
  }

  onConfirm() {
    this.onCloseReason.next('agree');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
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
