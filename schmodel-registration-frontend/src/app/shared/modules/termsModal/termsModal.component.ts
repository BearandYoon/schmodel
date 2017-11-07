import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-terms-conditions-modal',
  templateUrl: './termsModal.component.html',
  styleUrls: ['./termsModal.component.scss'],
})
export class TermsModalComponent implements OnInit {
  termsContent: String;
  isBtnAgree: boolean;
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onCloseReason = new Subject();
  }

  onAgreeTerms() {
    this.onCloseReason.next('agree');
    this.bsModalRef.hide();
  }

  onCancelTerms() {
    this.onCloseReason.next('decline');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }
}
