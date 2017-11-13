import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-dialog-job-apply',
  templateUrl: './dialog-job-apply.component.html',
  styleUrls: ['./dialog-job-apply.component.scss']
})

export class DialogJobApplyComponent implements OnInit {
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