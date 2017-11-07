import { Component, Input, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-terms-conditions-modal',
  templateUrl: './termsModal.component.html',
  styleUrls: ['./termsModal.component.scss'],
})
export class TermsModalComponent {
  termsContent: String;
  isBtnAgree: boolean;

  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: false
  };

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  onAgreeTerms() {
    this.bsModalRef.hide();
  }

  onCancelTerms() {
    this.bsModalRef.hide();
  }
}
