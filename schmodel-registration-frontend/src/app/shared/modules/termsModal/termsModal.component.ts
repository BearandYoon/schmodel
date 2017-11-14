import { Component, OnInit, HostListener } from '@angular/core';

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
  isScrollBottom: boolean;
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onCloseReason = new Subject();
    this.isScrollBottom = false;
  }

  onScroll(event) {
    let termsWrapper = document.getElementById('termsWrapper');
    let pos = termsWrapper.scrollTop + termsWrapper.offsetHeight;
    let max = termsWrapper.scrollHeight;

    if (pos == max ) {
      this.isScrollBottom = true;
    } else {
      this.isScrollBottom = false;
    }
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
