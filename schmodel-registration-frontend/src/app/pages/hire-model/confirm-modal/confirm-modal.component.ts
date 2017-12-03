import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

import { HireTalent } from '../../../shared/models';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {
  hireTalent: HireTalent = new HireTalent;
  public dialogTitle: string;
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.dialogTitle = 'Hiring Confirmation';
    this.onCloseReason = new Subject();
  }

  onConfirm() {
    this.onCloseReason.next('agree');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }

  onTC() {
  }
}
