import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-my-jobs-detail-dialog',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss'],
})
export class DialogDetailComponent implements OnInit {
  dialogContent: string;
  dialogTitle: string;
  public onCloseReason: Subject<string>;

  constructor(
    public bsModalRef: BsModalRef
  ) { }

  ngOnInit() {
    this.onCloseReason = new Subject();
  }

  onClose() {
    this.onCloseReason.next('close');
    this.bsModalRef.hide();
  }
}
