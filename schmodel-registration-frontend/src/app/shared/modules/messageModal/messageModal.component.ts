import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-message-modal',
  templateUrl: './messageModal.component.html',
  styleUrls: ['./messageModal.component.scss'],
})
export class MessageModalComponent implements OnInit {
  messageContent: String;
  messageTitle: String = "Error";
  isBtnCancel: boolean;
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onCloseReason = new Subject();
  }

  onScroll() {
    
  }

  onOK() {
    this.onCloseReason.next('agree');
    this.bsModalRef.hide();
  }

  onCancel() {
    this.onCloseReason.next('decline');
    this.bsModalRef.hide();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }
}
